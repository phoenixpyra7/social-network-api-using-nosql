// Date formatting, require month/day/year, hours, minutes
function formatDate(date) {
  // const formatDate = (date) => {
  return new Date(date).toLocaleString();
}

module.exports = formatDate;
