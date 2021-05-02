const RecursiveDescentParser = require("./recursive-descent-parser/recursiveDescentParser.js");


var parser = new RecursiveDescentParser(`
formula = left & ("<="|">="|"<"|">"|"=") & right

a = "[" & (((n&",")|(n))*) &"]"
n = "1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"
`);
