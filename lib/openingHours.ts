// Minutes from midnight for each day (0=Sun, 1=Mon … 6=Sat)
const SCHEDULE: Record<number, { open: number; close: number }> = {
  0: { open: 600, close: 1170 }, // Sun  10:00–19:30
  1: { open: 540, close: 1260 }, // Mon  09:00–21:00
  2: { open: 600, close: 1170 }, // Tue  10:00–19:30
  3: { open: 600, close: 1170 }, // Wed  10:00–19:30
  4: { open: 600, close: 1170 }, // Thu  10:00–19:30
  5: { open: 600, close: 1170 }, // Fri  10:00–19:30
  6: { open: 600, close: 1170 }, // Sat  10:00–19:30
};

function formatTime(mins: number): string {
  const h = Math.floor(mins / 60).toString().padStart(2, "0");
  const m = (mins % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

export interface OpenStatus {
  isOpen: boolean;
  label: string;
  closingTime: string;
  openingTime: string;
}

export function getOpenStatus(): OpenStatus {
  const now = new Date();
  const day = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();
  const slot = SCHEDULE[day];
  const isOpen = current >= slot.open && current < slot.close;

  return {
    isOpen,
    label: isOpen
      ? `Jetzt geöffnet · bis ${formatTime(slot.close)} Uhr`
      : `Heute ab ${formatTime(slot.open)} Uhr`,
    closingTime: formatTime(slot.close),
    openingTime: formatTime(slot.open),
  };
}

export const OPENING_HOURS = [
  { day: "Montag",     open: "09:00", close: "21:00", dayIndex: 1 },
  { day: "Dienstag",   open: "10:00", close: "19:30", dayIndex: 2 },
  { day: "Mittwoch",   open: "10:00", close: "19:30", dayIndex: 3 },
  { day: "Donnerstag", open: "10:00", close: "19:30", dayIndex: 4 },
  { day: "Freitag",    open: "10:00", close: "19:30", dayIndex: 5 },
  { day: "Samstag",    open: "10:00", close: "19:30", dayIndex: 6 },
  { day: "Sonntag",    open: "10:00", close: "19:30", dayIndex: 0 },
];
