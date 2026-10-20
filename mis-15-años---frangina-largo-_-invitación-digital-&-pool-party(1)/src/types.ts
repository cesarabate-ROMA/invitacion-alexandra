export interface GuestMessage {
  id: string;
  name: string;
  message: string;
  date: string;
  likes: number;
}

export interface RSVPData {
  fullName: string;
  attending: 'yes' | 'no';
  guestCount: number;
  dietaryRestrictions?: string;
  phone?: string;
  personalMessage?: string;
}
