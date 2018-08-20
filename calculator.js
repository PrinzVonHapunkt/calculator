


function calculator()
{
	setUpButtons();
}



function setUpButtons()
{
	let ac = document.getElementById("ac"); ac.addEventListener('click',function(){clearDisplay()});
	let del = document.getElementById("c"); del.addEventListener('click',function(){dlt()});
	let minus = document.getElementById("-"); minus.addEventListener('click',function(){updateDisplay("-")});
	let plus = document.getElementById("+"); plus.addEventListener('click',function(){updateDisplay("+")});

	let seven = document.getElementById("7"); seven.addEventListener('click',function(){updateDisplay("7")});
	let eight = document.getElementById("8"); eight.addEventListener('click',function(){updateDisplay("8")});
	let nine = document.getElementById("9"); nine.addEventListener('click',function(){updateDisplay("9")});
	let star = document.getElementById("*"); star.addEventListener('click',function(){updateDisplay("*")});

	let four = document.getElementById("4"); four.addEventListener('click',function(){updateDisplay("4")});
	let five = document.getElementById("5"); five.addEventListener('click',function(){updateDisplay("5")});
	let six = document.getElementById("6"); six.addEventListener('click',function(){updateDisplay("6")});
	let slash = document.getElementById("/"); slash.addEventListener('click',function(){updateDisplay("/")});

	let one = document.getElementById("1"); one.addEventListener('click',function(){updateDisplay("1")});
	let two = document.getElementById("2"); two.addEventListener('click',function(){updateDisplay("2")});
	let three = document.getElementById("3"); three.addEventListener('click',function(){updateDisplay("3")});
	let equals = document.getElementById("equals"); equals.addEventListener('click',function(){calculate()});

	
	
}
function calculate()
{
	let tokens = readDisplay();
	var result = 7357;
	
	





	clearDisplay();
	updateDisplay(result);
}

function readDisplay()
{
	let tok = [];
	let tempnum = "";
	let disp = document.getElementById("display").textContent;
	for(let i = 0; i<disp.length; i++)
	{
		switch(disp[i])
		{
			case("0"):case("1"):case("2"):case("3"):case("4"):case("5"):case("6"):case("7"):case("8"):case("9"):
			tempnum+=disp[i];
			break;

			case("+"):case("-"):case("*"):case("/"):
			tok.push(Number(tempnum));
			tempnum = "";
			tok.push(disp[i]);
			break;


		}

	}
	tok.push(Number(tempnum));
	return tok;
}

function updateDisplay(valtoadd)
{	
	document.getElementById("display").textContent += valtoadd	
}

function clearDisplay()
{
	document.getElementById("display").textContent = "";
}

function dlt()
{
	let curr = document.getElementById("display").textContent;
	if(curr != "")
	{
		let upd = curr.slice(0,curr.length-1);
		document.getElementById("display").textContent = upd;
	}
}








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

function contains(str, char)
{
	for(let i = 0; i<str.length; i++)
	{
		if(str[i]==char)
		{
			return true;
		}
	}
	return false;
}





function add (num1, num2)
{
	return num1+num2;
}

function subtract (num1, num2)
{
	return num1-num2;
}

function multiply (num1, num2)
{
	return num1*num2;
}

function divide (num1, num2)
{
	if(num2===0)
	{
		return "division by zero";
	}
	return num1/num2;
}



calculator();
