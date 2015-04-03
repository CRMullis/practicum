/* Code modified by Collin Mullis
	CMP237
	Modifying Code
	Second Hourly Exam
*/
// Changed input variable
var input = "A string with 7 numbers in it... 42 and 88, 123 and 16, 4 and 22.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
