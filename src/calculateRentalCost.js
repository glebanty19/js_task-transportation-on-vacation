/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const DAY_WITHOUT_DISCOUNT = 2;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days <= DAY_WITHOUT_DISCOUNT) {
    return days * cost;
  }

  if (days < LONG_TERM) {
    return days * cost - MIDDLE_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * cost - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
