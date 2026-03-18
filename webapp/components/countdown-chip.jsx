import dayjs from "dayjs";
import { useEffect, useState } from "react";

function formatCountdown(kickoffIso) {
  if (!kickoffIso) {
    return "Детали матча";
  }

  const kickoff = dayjs(kickoffIso);
  if (!kickoff.isValid()) {
    return "Детали матча";
  }

  const diffMinutes = kickoff.diff(dayjs(), "minute");
  if (diffMinutes <= 0) {
    return "Матч начался";
  }

  const days = Math.floor(diffMinutes / (60 * 24));
  const hours = Math.floor((diffMinutes % (60 * 24)) / 60);
  const minutes = diffMinutes % 60;

  if (days > 0) {
    return `${days}д ${hours}ч ${minutes}м`;
  }

  return `${hours}ч ${minutes}м`;
}

export default function CountdownChip({ kickoffIso }) {
  const [label, setLabel] = useState(() => formatCountdown(kickoffIso));

  useEffect(() => {
    setLabel(formatCountdown(kickoffIso));
    const timer = window.setInterval(() => setLabel(formatCountdown(kickoffIso)), 60000);
    return () => window.clearInterval(timer);
  }, [kickoffIso]);

  return <div className="countdown-chip">{label}</div>;
}
