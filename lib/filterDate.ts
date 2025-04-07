const FilterDate = (date: string) => {
  const dateToFilter = date;
  const year = dateToFilter.split("").splice(0, 4);
  const month_and_day = dateToFilter.split("").splice(5, 5);
  const filteredDate = `${month_and_day.join("")}-${year.join("")}`;
  return filteredDate;
};

export default FilterDate;
