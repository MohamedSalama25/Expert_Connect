export type AppointmentStatus = "Confirmed" | "Cancelled" | "Pending";

export interface Appointment {
    id: string;
    clientName: string;
    clientSubtitle: string;
    clientAvatar: string;
    sessionType: string;
    dateStr: string;
    duration: string;
    status: AppointmentStatus;
    actionType: "View Details" | "Reschedule" | "Join Room";
}
