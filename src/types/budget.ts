export interface IBudget {
  id: number;
  stepCost: number;
  stepDescription: string;
  helperConfirmation: boolean;
  customerConfirmation: boolean;
  orderId: number;
  createdAt: Date;
  updatedAt: Date;
}
