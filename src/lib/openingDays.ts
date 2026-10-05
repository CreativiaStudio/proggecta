import { siteConfig } from "@/data/siteConfig";

export interface DayOption {
  date: string; // "YYYY-MM-DD"
  weekday: string; // "Lun", "Mar", etc.
  dayMonth: string; // "7 Ott"
  fullLabel: string; // "Lunedì 7 Ottobre"
  isToday?: boolean;
}

const WEEKDAYS = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
const MONTHS = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];

const FULL_WEEKDAYS = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];
const FULL_MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

export function getUpcomingOpenDays(count = 10): DayOption[] {
  const openDaysMap = new Set(siteConfig.openingHours.map((h) => h.day));
  const options: DayOption[] = [];
  const now = new Date();

  // Inizia da domani se sono passate le 18:00 o da oggi
  let offset = now.getHours() >= 18 ? 1 : 0;

  while (options.length < count && offset < 40) {
    const d = new Date(now.getTime() + offset * 86400000);
    const dayOfWeek = d.getDay();

    if (openDaysMap.has(dayOfWeek)) {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${day}`;

      const weekdayShort = WEEKDAYS[dayOfWeek];
      const monthShort = MONTHS[d.getMonth()];
      const dayNum = d.getDate();

      const fullWeekday = FULL_WEEKDAYS[dayOfWeek];
      const fullMonth = FULL_MONTHS[d.getMonth()];

      options.push({
        date: dateString,
        weekday: weekdayShort,
        dayMonth: `${dayNum} ${monthShort}`,
        fullLabel: `${fullWeekday} ${dayNum} ${fullMonth}`,
        isToday: offset === 0,
      });
    }
    offset++;
  }

  return options;
}
