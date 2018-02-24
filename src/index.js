// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var cents = currency;
    var minCoins = {};

    if (cents <= 0) return minCoins;
    if (cents > 10000) {
        minCoins["error"] = 'You are rich, my friend! We don\'t have so much coins for exchange';
        return minCoins;
    }

    minCoins["H"] = 0; 
    minCoins["Q"] = 0; 
    minCoins["D"] = 0; 
    minCoins["N"] = 0; 
    minCoins["P"] = 0; 

  while (cents != 0) {
      
      if ( cents - 50 >= 0) { cents -= 50; minCoins["H"] += 1; continue;}
      if ( cents - 25 >= 0) { cents -= 25; minCoins["Q"] += 1; continue;}
      if ( cents - 10 >= 0) { cents -= 10; minCoins["D"] += 1; continue;}
      if ( cents - 5  >= 0) { cents -= 5 ; minCoins["N"] += 1; continue;}
      if ( cents - 1  >= 0) { cents -= 1 ; minCoins["P"] += 1; continue;}
 
  }
  
  if ( minCoins["H"] == 0 ) delete minCoins.H ; 
  if ( minCoins["Q"] == 0 ) delete minCoins.Q ;
  if ( minCoins["D"] == 0 ) delete minCoins.D ;
  if ( minCoins["N"] == 0 ) delete minCoins.N ;
  if ( minCoins["P"] == 0 ) delete minCoins.P ;

  return minCoins;

}
