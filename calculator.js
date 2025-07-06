const display = document.getElementById('display')

function appendValue(value)
{
    display.value =display.value+value
}

function clear()
{
    display.value="";
}

function calculate()
{
    let res=0;
    let num1 = display.value;
    let num2 = display.value;
    let operator=['+','-','*','/','%']
    switch (operator) {
        case '+':
            res=num1+num2;
            console.log(display.value);
            break;
            case '-':
                res=display.value-display.value;
                break;
                case '*':
            res=display.value*display.value;
            break;
            case '/':
            res=display.value/display.value;
            break;
            case '%':
            res=display.value%display.value;
            break;
            
        default:
            alert('error')
            break;
    }
}