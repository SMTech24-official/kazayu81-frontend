export enum OrderStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  STRIPE = "STRIPE",
  PAYPAL = "PAYPAL",
}


export enum PaymentStatus {
  PAYMENT_PENDING = "PAYMENT_PENDING",
  PAYMENT_IN_PROGRESS = "PAYMENT_IN_PROGRESS",
  PAYMENT_RECEIVED = "PAYMENT_RECEIVED",
  REFUND_IN_PROGRESS = "REFUND_IN_PROGRESS",
}


export enum ServiceOption {
  MATERIAL_INCLUDED = "MATERIAL_INCLUDED",
  ONLY_LABOR = "ONLY_LABOR",
}


export enum TimeUnit {
  HOURS = "hours",
  DAYS = "days",
  WEEKS = "weeks",
  MONTHS = "months",
  YEARS = "years",
}


export enum CheckType {
  INDIVIDUAL = "individual",
  BUSINESS = "business",
}


export enum FreeVisitStatus {
  OFFERED = "OFFERED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  NOT_OFFERED = "NOT_OFFERED",
}


export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  HELPER = "HELPER",
  CUSTOMER = "CUSTOMER",
}


export enum UserStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
}


export enum AccountType {
  CHECKING = "CHECKING",
  SAVINGS = "SAVINGS",
}
