/**
 * Ambient background music synth for Quinceañera invitation
 * Uses Web Audio API to play a delicate music-box fairytale waltz melody
 */

class AmbientMusicSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private gainNode: GainNode | null = null;

  private notes = [
    // Dreamy waltz sequence (frequencies in Hz)
    // C5, E5, G5, B5, C6, G5, E5, D5, F5, A5, C6, B5, G5
    523.25, 659.25, 783.99, 987.77, 1046.50, 783.99, 659.25, 587.33,
    698.46, 880.00, 1046.50, 987.77, 783.99, 659.25, 523.25, 659.25,
    783.99, 880.00, 698.46, 587.33, 659.25, 523.25, 440.00, 523.25
  ];
  private currentNoteIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number = 0.8) {
    if (!this.ctx || !this.gainNode) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Sine + subtle triangle overtone for chime/bell like sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.18, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  public toggle(onStateChange?: (playing: boolean) => void): boolean {
    if (this.isPlaying) {
      this.pause();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.play();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  public play() {
    this.initContext();
    this.isPlaying = true;

    const tick = () => {
      if (!this.isPlaying) return;
      const freq = this.notes[this.currentNoteIndex];
      this.playTone(freq, 0.9);

      // Play soft bass harmony every 4 notes
      if (this.currentNoteIndex % 4 === 0) {
        this.playTone(freq / 2, 1.4);
      }

      this.currentNoteIndex = (this.currentNoteIndex + 1) % this.notes.length;
      this.timer = window.setTimeout(tick, 450);
    };

    tick();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientMusic = new AmbientMusicSynth();
