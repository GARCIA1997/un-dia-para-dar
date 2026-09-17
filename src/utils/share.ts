import { EVENT, SITE_URL } from "../config/event";

const SHARE_TEXT = `${EVENT.name}: este año damos en círculo. ${EVENT.orgsCount} organizaciones, un solo movimiento.`;

export function shareEvent() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({ title: EVENT.name, text: SHARE_TEXT, url }).catch(() => {
      /* el usuario canceló */
    });
    return;
  }
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(SHARE_TEXT)}`,
    "_blank",
    "noopener"
  );
}

/** Formatea una fecha ISO al formato UTC compacto que exige el estándar iCalendar. */
function toICS(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function downloadCalendar() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Un Dia para Dar Colima//ES",
    "BEGIN:VEVENT",
    `UID:undiaparadar-colima-${EVENT.edition}@spartans-dev.io`,
    `DTSTAMP:${toICS(new Date().toISOString())}`,
    `DTSTART:${toICS(EVENT.dateISO)}`,
    `DTEND:${toICS(EVENT.endISO)}`,
    `SUMMARY:${EVENT.name}`,
    `DESCRIPTION:${EVENT.tagline} Más información en ${SITE_URL}`,
    `LOCATION:${EVENT.place}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `un-dia-para-dar-colima-${EVENT.edition}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}
