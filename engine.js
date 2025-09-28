console.log('haiiii')
//let num1,num2,num3
let whole = {
    num1:undefined,
    num2:undefined,
    result:undefined,
    operation:undefined,
}
const result = document.querySelector('#result')

let btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', ()=>recieve(btn.id)))
function recieve(action)
{
    console.log(action)
    isNaN(action)?operation(action):numeric(action)
    action==='equals'?display(false):display(true)
    if (action==='clear') result.textContent=0
}

function numeric(number)
{
        
        if (whole.operation==undefined)
        {
            whole.num1==undefined?whole.num1=number:whole.num1+=number
        }
        else 
        {
            whole.num2==undefined?whole.num2=number:whole.num2+=number
        }
    
    //if (!isNaN(whole.num2)){console.log(evaluate())}
    console.log(whole)
}

function operation(action)
{
    if (action==='clear') clearall()
    else if (action==='equals') {evaluate();clearall();display(0)}
    if (whole.num1!==undefined && whole.num2!==undefined) {evaluate();clearall(); whole.num1=whole.result}
    if (action==='add') whole.operation='+'
    else if (action==='sub') whole.operation='-'
    else if (action==='mul') whole.operation='*'
    else if (action==='divide') whole.operation='/'
}
function evaluate()
{
    console.log(whole)
    if (whole.num1==undefined || 
        whole.num2==undefined || 
        whole.operation==undefined)
        {alert("OPERATION NOT COMPLETE")}
    else if (whole.operation=='+'){whole.result= parseInt(whole.num1)+parseInt(whole.num2)}
    else if (whole.operation=='-'){whole.result= parseInt(whole.num1)-parseInt(whole.num2)}
    else if (whole.operation=='*'){whole.result= parseInt(whole.num1)*parseInt(whole.num2)}
    else if (whole.operation=='/'){whole.result= parseInt(whole.num1)/parseInt(whole.num2)}
}

function clearall()
{
    whole.num1=undefined
    whole.num2=undefined
    whole.operation=undefined

}

function display(flag)
{
   
    if (flag==true){result.textContent=
    `${whole.num1==undefined?'':whole.num1}
     ${whole.operation==undefined?'':whole.operation}
      ${whole.num2==undefined?'':whole.num2}`}
      else{
        console.log(whole.result)
        result.textContent=whole.result
      }

}