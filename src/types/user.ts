import { CheckType } from "./common";

export interface ICustomer {
  id: number;
  customerId: string;
  stripeCustomerId?: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  email: string;
  enableTextMessages: boolean;
  sendEmails: boolean;
  enableRealTimeNotification: boolean;
  totalSpent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IHelper {
  id: number;
  helperId: string;
  stripeAccountId?: string;
  firstName: string;
  lastName?: string;
  checkType: CheckType;
  ssnId?: string;
  businessLegalName?: string;
  einTexId?: string;
  email: string;
  phoneNumber: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  serviceLocation: string;
  serviceType: string;
  licenseImage?: string;
  insurenceImage?: string;
  enableTextMessages: boolean;
  sendEmails: boolean;
  enableRealTimeNotification: boolean;
  totalEarnings: number;
  createdAt: Date;
  updatedAt: Date;
}
