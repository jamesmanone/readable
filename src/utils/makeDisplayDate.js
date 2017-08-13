const getDay = day => {
  switch(day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return null;
  }
};

const getMonth = month => {
  switch(month) {
    case 0:
      return 'JAN';
    case 1:
      return 'FEB';
    case 2:
      return 'MAR';
    case 3:
      return 'APR';
    case 4:
      return 'MAY';
    case 5:
      return 'JUN';
    case 6:
      return 'JUL';
    case 7:
      return 'AUG';
    case 8:
      return 'SEP';
    case 9:
      return 'OCT';
    case 10:
      return 'NOV';
    case 11:
      return 'DEC';
    default:
      return null;
  }
};

export default timestamp => {
  const ts = new Date(timestamp);
  const day = getDay(ts.getDay());
  const date = ts.getDate() > 9 ? ts.getDate() : parseInt(`0${ts.getDate()}`);
  const month = getMonth(ts.getMonth());
  const year = ts.getFullYear();
  const hours = ts.getHours() > 9 ? ts.getHours() : `0${ts.getHours()}`;
  const minutes = ts.getMinutes() ? ts.getMinutes() : `0${ts.getMinutes()}`;
  return `${day} ${date}${month}${year} at ${hours}:${minutes}`;
};
