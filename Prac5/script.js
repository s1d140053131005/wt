var ch;

do 
{
	ch = prompt("Which Mathemetical operation do you want to perform? \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \n5. Modulo");
	ch = parseInt(ch);
}
 while (ch < 1 || ch > 5);

var a = prompt("Enter First Number");
var b= prompt("Enter Second Number");

ch = parseInt(ch);
a = parseInt(a);
b = parseInt(b);

var ans = 0;
switch (ch) {
	case 1:
		ans = a + b; break;
	case 2:
		ans = a - b; break;
	case 3:
		ans = a * b; break;
	case 4:
		ans = a / b; break;
	case 5:
		ans = a % b; break;
}

alert("The answer is: " + ans);