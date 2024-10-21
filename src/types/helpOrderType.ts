enum TimeUnit {
  hours,
  days,
  weeks,
  months,
  years,
}

enum ServiceOption {
  MATERIAL_INCLUDED,
  ONLY_LABOR,
}

enum OrderStatus {
  OPEN,
  IN_PROGRESS,
  COMPLETED,
  CANCELLED,
}

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
  //   budget: Budget[];
  totalCost: number;
  status: OrderStatus;
  customerId: number;
  helperId?: number;
}
