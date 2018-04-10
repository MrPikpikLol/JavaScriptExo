// set endpoint and your API key
var url = 'http://data.fixer.io/api/latest?access_key=55a8fe5681034a4a2ace5d0682a9d008&base=EUR&symbols=GBP,JPY,EUR,USD';

// define from currency, to currency, and amount
  function recupererValeur() {

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: url,
    dataType: 'jsonp',

    success: function(res,status,req) {

        console.log(res.rates);
        console.log(status);
        var taux = res.rates
          , from = document.getElementById('from').value
          , to = document.getElementById('to').value
          , amount = document.getElementById('fromAmount').value

          var result = amount * taux[to] / taux[from]

          document.getElementById('toAmount').value=result

    }
})};
