import { IBudget } from "./budget";
import { OrderStatus, ServiceOption, TimeUnit } from "./common";

export interface IOrder {
  id: number;
  orderId: string;

  subject: string;
  description: string;
  duration: string;
  timeUnit: TimeUnit;
  serviceLocation: string;
  city: string;
  state: string;
  serviceType: string;
  otherService?: string;
  serviceOption: ServiceOption;
  isPublished?: boolean;
  budget: IBudget[];
  totalCost: number;
  status: OrderStatus;
  customerId: number;
  helperId?: number;
  customer: any;

  createdAt: Date;
  updatedAt: Date;
}
