export const formatDate = (date: Date): string => {
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
};
