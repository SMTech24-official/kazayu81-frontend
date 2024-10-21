import { FreeVisitStatus } from "./common";
import { IOrder } from "./helpOrder";
import { IHelper } from "./user";

export interface IFreeVisit {
  id: number;
  orderId: number;
  order: IOrder;
  helperId: string;
  helper: IHelper;
  scheduledDate?: Date;
  scheduledTime?: string;
  shortMessage?: string;
  rejectionMessage?: string;
  freeVisitStatus: FreeVisitStatus;
  createdAt: Date;
  updatedAt: Date;
}
