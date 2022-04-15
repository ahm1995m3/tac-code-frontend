const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const prettyDate = (dateString: string) => {
  const asDate = new Date(dateString);

  const dayIndex = asDate.getDay();
  const monthIndex = asDate.getMonth();
  const year = asDate.getFullYear();
  const dayDate = asDate.getDate();

  return `${days[dayIndex]}, ${months[monthIndex]} ${dayDate}, ${year} `;
};

export default prettyDate;
