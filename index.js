const addDays = require("date-fns/addDays");
const subbu = (days) => {
  const results = addDays(new Date(2020, 7, 22), days);
  return `${results.getDate()}-${
    results.getMonth() + 1
  }-${results.getFullYear()}`;
};
module.exports = subbu;
