const stocks = document.querySelectorAll(".stock-data");

const btn = document.querySelector("#btn");

const output = document.querySelector("#output");

function calculatePrice() {
    
}

function calculateProfitOrLoss(initial, quantity, current)
{
    if(initial&&quantity&&current)
    {
        if(initial>current)
        {
            var loss = (initial-current) * quantity;
            var lossPer = loss/initial * 100;
            //console.log(`Hey, the loss is ${loss} and the loss % is ${lossPer}`)
            output.innerHTML = "Hey, the loss is "+ loss + " and the loss % is "+ lossPer;
        }
        else if(current>initial)
        {
            var profit = (current-initial) * quantity;
            var profitPer = profit/initial * 100;
            //console.log(`Hey, the profit is ${profit} and the profit % is ${profitPer}`)
            output.innerHTML = "Hey, the profit is "+ profit + " and the profit % is "+ profitPer;
        }
        else{
            output.innerHTML = "Neither profit, nor loss";
        }
    }
    else
    output.innerHTML = "Invalid input, try again";
}

function calculatePrice()
{
 calculateProfitOrLoss(Number(stocks[0].value),Number(stocks[1].value),Number(stocks[2].value))   
}

btn.addEventListener("click", calculatePrice)