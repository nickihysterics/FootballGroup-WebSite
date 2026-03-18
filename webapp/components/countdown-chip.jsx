"use client";

import { useEffect, useState } from "react";

function formatCountdown(kickoffIso) {
  if (!kickoffIso) {
    return "Детали матча";
  }

  const diff = new Date(kickoffIso).getTime() - Date.now();
  if (diff <= 0) {
    return "Матч начался";
  }

  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

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
