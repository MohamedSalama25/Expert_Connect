export type TransactionStatus = "Completed" | "Processing" | "Failed";
export type TransactionType = "Consultation" | "Withdrawal" | "Refund";

export interface Transaction {
    id: string;
    transactionId: string;
    clientName: string;
    type: TransactionType;
    dateStr: string;
    amount: string;
    status: TransactionStatus;
}
