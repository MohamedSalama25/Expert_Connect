export interface TimeSlot {
    id: string;
    start: string;
    end: string;
    type: "available" | "available_light" | "break";
}
