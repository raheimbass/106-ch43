
function sayHello(name, lastName){
    console.log("Hello "+name+" "+lastName);
    let color = "red";

}

function sum(num1, num2){
    const result = num1 + num2;
    console.log(result);
    return result;

}


//print numbers from 1 to 20 except 7 and 13
function printNumbers()
{
    for (let i = 0; i < 21; i++)
    {
        if (i!= 7 && i!= 13)
        {
            console.log(i);
        }
    }
    for (let i = 0; i < printNumbers.length; i++)
    {
        let num = numbers[i];
        console.log(num);
    }
}

function init()
{
    console.log("Hello there!");
    let anything = "Raheim";
    sayHello(anything, "Bass");
    const result = sum(10, 20);
    console.log(result);
}

window.onload = init;//we :are forcing the computer to wait