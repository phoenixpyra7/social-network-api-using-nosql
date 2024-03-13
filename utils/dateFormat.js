// Date formatting, require month/day/year, hours, minutes
function formatDate(date) {
  return new Date(date).toLocaleString();
}

module.exports = formatDate;
