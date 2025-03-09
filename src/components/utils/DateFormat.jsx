"use client";

export default function DateFormat({ dateString }) {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return <>{formattedDate}</>;
}
