
//FIBONACCI

var a = 1
var b = 1

var output = ""

while (a < 600) {
	c = a + b
	output += " " +a
	a = b
	b = c
}

console.log(output)
