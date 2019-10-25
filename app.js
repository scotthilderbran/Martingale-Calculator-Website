console.dir(document);
document.getElementById("bet").addEventListener("input", function(){
    calculate();
});
document.getElementById("bankroll").addEventListener("input", function(){
    calculate();
});

function calculate(){
    $('tbody').empty();
    let count = 1;
    let bankcurr = document.getElementById("bankroll").value;
    let betcurr = document.getElementById("bet").value;
    let betafter;
    if(betcurr>= 1 && bankcurr >= 1){
        while(bankcurr - betcurr > 0){
            betafter = bankcurr-betcurr;
            console.log("Bet:" + betcurr+"Bankrol: "+bankcurr);
            $('tbody').append('<tr><th scope="row">'+count+'</th><td>'+bankcurr+'</td><td>'+betcurr+'</td><td>'+betafter+'</td</tr>');
            bankcurr=betafter;
            betcurr *=2;
            count++;
        }
        betafter = bankcurr-betcurr;
        $('tbody').append('<tr class="bg-danger"><th scope="row">'+count+'</th><td>'+bankcurr+'</td><td>'+betcurr+'</td><td>'+betafter+'</td</tr>');
    }
    
    
};
