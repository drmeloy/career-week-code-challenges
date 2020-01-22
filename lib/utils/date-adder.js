module.exports = (date, diff) => {
  const oldDate = new Date(date);
  const diffOption = diff.charAt(diff.length - 1);
  const diffValue = diff.slice(0, diff.length - 1);

  const yearValue = diffOption === 'y' ? diffValue : 0;
  const monthValue = diffOption === 'M' ? diffValue : 0;
  const dateValue = diffOption === 'd' ? diffValue : diffOption === 'w' ? diffValue * 7 : 0;
  const hoursValue = diffOption === 'h' ? diffValue : 0;
  const minutesValue = diffOption === 'm' ? diffValue : 0;
  const secondsValue = diffOption === 's' ? diffValue : 0;

  // console.log(yearValue, monthValue, dateValue, hoursValue, minutesValue, secondsValue);
  

  return new Date(oldDate.getFullYear() + +yearValue, oldDate.getMonth() + +monthValue, oldDate.getDate() + +dateValue, oldDate.getHours() + +hoursValue, oldDate.getMinutes() + +minutesValue, oldDate.getSeconds() + +secondsValue);
};
