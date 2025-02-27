export interface ProfileFormData {
  name: string;
  username: string;
  email: string;
  password?: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export type ProfileFormKeys = keyof ProfileFormData; 