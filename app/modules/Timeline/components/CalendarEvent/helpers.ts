/**
 * Take two dates as parameter and return the number of days between them
 *
 * @param startDate when the event starts
 * @param endDate when the event ent ends
 * @returns number of days between the two dates
 */
export const getDaysBetweenDates = (startDate: Date, endDate: Date) => {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
