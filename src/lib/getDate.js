export function getDate(date) {
  // date
  const monthNames = [
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

  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  // time
  let hour = date.getHours();
  let minute = ("0" + date.getMinutes()).slice(-2);
  let half;
  if (hour > 12) {
    hour = hour - 12;
    half = "PM";
  } else {
    half = "AM";
  }

  let outTime = hour + ":" + minute + " " + half;
  let outDate = month + " " + day + ", " + year;

  return { outDate, outTime };
}
