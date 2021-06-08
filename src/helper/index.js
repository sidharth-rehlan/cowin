/**
 * Return number of days
 */
export const getDates = (daysCount) => {
  let daysList = [],
    i = 0;
  while (i < daysCount) {
    let day = new Date();
    day.setDate(day.getDate() + i);
    daysList.push(day);
    i++;
  }
  return daysList;
};
