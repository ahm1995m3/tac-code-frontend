import formatDistance from "date-fns/formatDistance";

const getDifferenceInTimeFromToday = (dateString: string) => {
  const date1 = new Date(dateString);
  const today = new Date();

  const result = formatDistance(today, date1);

  return result;
};

export default getDifferenceInTimeFromToday;
