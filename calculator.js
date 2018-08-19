function operate(char, num1,num2)
{
	switch(char)
	{
		case('+'):
		return add(num1,num2);
		break;

		case('-'):
		return subtract(num1,num2);
		break;

		case('*'):
		return multiply(num1,num2);
		break;

		case('/'):
		return divide(num1,num2);
		break;
	}

}







function add (num1, num2)
{
	return num1+num2;
}

function subtract (num1, num2)
{
	return num1-num2;
}

function multiply (num1 num2)
{
	return num1*num2;
}

function divide (num1, num2)
{
	return num1/num2;
}

