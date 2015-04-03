/* Code Modified by Collin Mullis
	CMP237 
	Modifying Code
	Second Hourly Exam
*/
// Variable used for matching
var stock = "1 lemon, 2 cabbages, and 102 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
