console.dir(document);
document.getElementById("submitme").addEventListener("click", function(){
    let betAmount = document.getElementById("betamount").value;
    let bankRoll = document.getElementById("bankroll").value;
    console.log(betAmount);
    console.log(bankRoll);
    let count = 0;
    while (bankRoll > 0){
        bankRoll -= betAmount;
        betAmount *= 2;
        count ++;
        console.log(bankRoll);
        console.log(betAmount);
        console.log(count);
    }
    document.getElementById("test").innerHTML = `You were able to take: ${count} consecutive losses.`;
  });
