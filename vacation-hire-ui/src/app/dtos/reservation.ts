export interface IReservation {  id: string;  rentalStartDate: Date;  rentalExpirationDate: Date;  status: ReservationStatusType;  customerId: string;}export type ReservationStatusType = 'Confirmed' | 'Pending' | 'Cancelled';