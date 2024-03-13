const format = require("date-fns/format");

// Date formatting, require month/day/year, hours, minutes
function formatDate(date) {
  return format(new Date(date), "MMMM dd, yyyy HH:mm");
}

module.exports = formatDate;
