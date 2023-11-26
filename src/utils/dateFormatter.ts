export const formatDate = (date: string): string => {
  const currentDate = new Date(date);
  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short",
  });
  return dateTimeFormatter.format(currentDate);
};
