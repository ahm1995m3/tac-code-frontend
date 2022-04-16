import formatDistance from "date-fns/formatDistance";

const getDifferenceInTimeFromToday = (dateString: string) => {
  const date1 = new Date(dateString);
  const today = new Date();

  return formatDistance(today, date1);
};

export default getDifferenceInTimeFromToday;
