
var userAccount;

        var accountInterval = setInterval(function() {
            window.web3old.eth.getAccounts(function (err, result) {
              
               var isAddress = window.web3old.isAddress(`${result}`);
                 document.getElementById("metamask").innerHTML = '';
                if (isAddress !== true) {
                    
                  document.getElementById("metamask").innerHTML = `<div class="alert warning">
   <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>  
  <strong>Please!</strong> Unlock your Metamask wallet and refresh the page.
</div>`;              
                     $("#cuenta").hide();
					 $("#user").hide();
                }else {
                    
                     $("#cuenta").show();
					  $("#user").show();
                     
                }
                
                if (result.length !== 0) { 
                
                
                
          // Comprobar si la cuenta ha sido cambiada
          if (result !== userAccount) {
              
            userAccount = result;
              
               $("#cuenta").text(userAccount);
            window.web3old.eth.getBalance(`${userAccount}`,function (err, result) {
                       
                
         $("#balance").text(result);
             var value = window.web3old.fromWei($("#balance").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("balance").innerHTML = `Your balance is: <b>${valued3} ETH<b>`;
                     
                     
     })    
              } 
                
               } else {
                   
                   clearInterval(accountInterval);
               }
                
                });
                
             }, 100);


 if (window.web3) {
        
	 window.web3old = window.web3;
  window.web3 = new Web3(window.web3.currentProvider);
  var cryptovideogamestokenContractOldWeb3Object = window.web3old.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ceoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCEO","type":"address"}],"name":"setCEO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllTokens","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newCOO","type":"address"}],"name":"setCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"createToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"nextPriceOf","outputs":[{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enableERC721","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_owner","type":"address"},{"name":"_price","type":"uint256"}],"name":"createPromoToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cooAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"takeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"priceOf","outputs":[{"name":"_price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getToken","outputs":[{"name":"_tokenName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_nextPrice","type":"uint256"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenIdToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"sellingPrice","type":"uint256"},{"indexed":false,"name":"newPrice","type":"uint256"},{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"TokenSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"}]);
             
         var cryptovideogamestokenOldWeb3 = cryptovideogamestokenContractOldWeb3Object.at('0xfb2397daa1851ba306cee0bcad859959f63aa4f3');


        
    }
    // Non-dapp browsers...
    else {
          // set the provider you want from Web3.providers
                             
             
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            
    }



          
 window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/0947de0454e841beb9c31d13eb4ee770"));
           var cryptovideogamestoken = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ceoAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCEO","type":"address"}],"name":"setCEO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllTokens","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newCOO","type":"address"}],"name":"setCOO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"createToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"nextPriceOf","outputs":[{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enableERC721","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_owner","type":"address"},{"name":"_price","type":"uint256"}],"name":"createPromoToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cooAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"takeOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"priceOf","outputs":[{"name":"_price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getToken","outputs":[{"name":"_tokenName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_nextPrice","type":"uint256"},{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenIdToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"owner","type":"address"}],"name":"TokenCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"sellingPrice","type":"uint256"},{"indexed":false,"name":"newPrice","type":"uint256"},{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"TokenSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"}], '0xfb2397daa1851ba306cee0bcad859959f63aa4f3');
               
       
            
     
        
         // PriceOf Mario Bross TokenId #0
        function priceOf () {
            
           cryptovideogamestoken.methods.priceOf(0).call(function (err, result) {//ejemplo precio token #0
          $("#price").text(result);
                var value = web3.utils.fromWei($("#price").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("priceCard").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
                  //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf').value = value;
          
          
       
         
     }); 
                                                                 
        }
   // PriceOf Sonic TokenId #1
function priceOf1 () {
            
           cryptovideogamestoken.methods.priceOf(1).call(function (err, result) {//ejemplo precio token #1
                $("#price1").text(result);
                var value = web3.utils.fromWei($("#price1").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price1").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard1").innerHTML = `Price: <b>${valued3} ETH<b>`;  
         //ejemplo de insertar resultado de una llamada a un input
          
          document.getElementById('priceOf1').value = value;
         
       
     }); 
                                                                 
        }
 // PriceOf Pacman TokenId #2
function priceOf2 () {
            
           cryptovideogamestoken.methods.priceOf(2).call(function (err, result) {//ejemplo precio token #1
                $("#price2").text(result);
                var value = web3.utils.fromWei($("#price2").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price2").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard2").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
         
          document.getElementById('priceOf2').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Megaman TokenId #3
function priceOf3 () {
            
           cryptovideogamestoken.methods.priceOf(3).call(function (err, result) {//ejemplo precio token #3
                $("#price3").text(result);
                var value = web3.utils.fromWei($("#price3").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price3").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard3").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf3').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Bomberman TokenId #4
function priceOf4 () {
            
           cryptovideogamestoken.methods.priceOf(4).call(function (err, result) {//ejemplo precio token #4
                $("#price4").text(result);
                var value = web3.utils.fromWei($("#price4").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price4").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard4").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf4').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Donkey Kong TokenId #5
function priceOf5 () {
            
           cryptovideogamestoken.methods.priceOf(5).call(function (err, result) {//ejemplo precio token #5
                $("#price5").text(result);
                var value = web3.utils.fromWei($("#price5").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price5").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard5").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf5').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Luigi TokenId #6
function priceOf6 () {
            
           cryptovideogamestoken.methods.priceOf(6).call(function (err, result) {//ejemplo precio token #6
                $("#price6").text(result);
                var value = web3.utils.fromWei($("#price6").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price6").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard6").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf6').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Yoshi TokenId #7
function priceOf7 () {
            
           cryptovideogamestoken.methods.priceOf(7).call(function (err, result) {//ejemplo precio token #7
                $("#price7").text(result);
                var value = web3.utils.fromWei($("#price7").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price7").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard7").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf7').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Toad TokenId #8
function priceOf8 () {
            
           cryptovideogamestoken.methods.priceOf(8).call(function (err, result) {//ejemplo precio token #8
                $("#price8").text(result);
                var value = web3.utils.fromWei($("#price8").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price8").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard8").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf8').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Knuckles TokenId #9
function priceOf9 () {
            
           cryptovideogamestoken.methods.priceOf(9).call(function (err, result) {//ejemplo precio token #9
                $("#price9").text(result);
                var value = web3.utils.fromWei($("#price9").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price9").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard9").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf9').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Wario TokenId #10
function priceOf10 () {
            
          cryptovideogamestoken.methods.priceOf(10).call(function (err, result) {//ejemplo precio token #10
                $("#price10").text(result);
                var value = web3.utils.fromWei($("#price10").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price10").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard10").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf10').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Bowser TokenId #11
function priceOf11 () {
            
           cryptovideogamestoken.methods.priceOf(11).call(function (err, result) {//ejemplo precio token #11
                $("#price11").text(result);
                var value = web3.utils.fromWei($("#price11").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price11").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard11").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf11').value = value;
         
       
     }); 
                                                                 
        }




 // PriceOf Sub Zero TokenId #12
        function priceOf12 () {
            
            cryptovideogamestoken.methods.priceOf(12).call(function (err, result) {//ejemplo precio token #12
          $("#price12").text(result);
                var value = web3.utils.fromWei($("#price12").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price12").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("priceCard12").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
                  //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf12').value = value;
          
          
       
         
     }); 
                                                                 
        }
   // PriceOf Assassin's Creed TokenId #13
function priceOf13 () {
            
           cryptovideogamestoken.methods.priceOf(13).call(function (err, result) {//ejemplo precio token #13
                $("#price13").text(result);
                var value = web3.utils.fromWei($("#price13").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price13").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard13").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          
          document.getElementById('priceOf13').value = value;
         
       
     }); 
                                                                 
        }
 // PriceOf Kratos TokenId #14
function priceOf14 () {
            
           var result = cryptovideogamestoken.methods.priceOf(14).call(function (err, result) {//ejemplo precio token #14
                $("#price14").text(result);
                var value = web3.utils.fromWei($("#price14").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price14").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard14").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
         
          document.getElementById('priceOf14').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Raiden TokenId #15
function priceOf15 () {
            
           cryptovideogamestoken.methods.priceOf(15).call(function (err, result) {//ejemplo precio token #15
                $("#price15").text(result);
                var value = web3.utils.fromWei($("#price15").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price15").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard15").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf15').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Kitana TokenId #16
function priceOf16 () {
            
            cryptovideogamestoken.methods.priceOf(16).call(function (err, result) {//ejemplo precio token #16
                $("#price16").text(result);
                var value = web3.utils.fromWei($("#price16").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price16").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard16").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf16').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf The Last Of US TokenId #17
function priceOf17 () {
            
            cryptovideogamestoken.methods.priceOf(17).call(function (err, result) {//ejemplo precio token #17
                $("#price17").text(result);
                var value = web3.utils.fromWei($("#price17").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price17").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard17").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf17').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Jonny Cage TokenId #18
function priceOf18 () {
            
            cryptovideogamestoken.methods.priceOf(18).call(function (err, result) {//ejemplo precio token #18
                $("#price18").text(result);
                var value = web3.utils.fromWei($("#price18").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price18").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard18").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf18').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Prince Of Persia TokenId #19
function priceOf19 () {
            
            cryptovideogamestoken.methods.priceOf(19).call(function (err, result) {//ejemplo precio token #19
                $("#price19").text(result);
                var value = web3.utils.fromWei($("#price19").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price19").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard19").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf19').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Ada TokenId #20
function priceOf20 () {
            
           cryptovideogamestoken.methods.priceOf(20).call(function (err, result) {//ejemplo precio token #20
                $("#price20").text(result);
                var value = web3.utils.fromWei($("#price20").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price20").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard20").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf20').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Goro TokenId #21
function priceOf21 () {
            
          cryptovideogamestoken.methods.priceOf(21).call(function (err, result) {//ejemplo precio token #21
                $("#price21").text(result);
                var value = web3.utils.fromWei($("#price21").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price21").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard21").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf21').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Leon TokenId #22
function priceOf22 () {
            
          cryptovideogamestoken.methods.priceOf(22).call(function (err, result) {//ejemplo precio token #22
                $("#price22").text(result);
                var value = web3.utils.fromWei($("#price22").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price22").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard22").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf22').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Ryu TokenId #23
function priceOf23 () {
            
          cryptovideogamestoken.methods.priceOf(23).call(function (err, result) {//ejemplo precio token #23
                $("#price23").text(result);
                var value = web3.utils.fromWei($("#price23").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price23").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard23").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf23').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Hitman TokenId #24
function priceOf24 () {
            
           cryptovideogamestoken.methods.priceOf(24).call(function (err, result) {//ejemplo precio token #24
                $("#price24").text(result);
                var value = web3.utils.fromWei($("#price24").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price24").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard24").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf24').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Aiden TokenId #25
function priceOf25 () {
            
           cryptovideogamestoken.methods.priceOf(25).call(function (err, result) {//ejemplo precio token #25
                $("#price25").text(result);
                var value = web3.utils.fromWei($("#price25").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price25").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard25").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf25').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Blood Borne TokenId #26
function priceOf26 () {
            
           cryptovideogamestoken.methods.priceOf(26).call(function (err, result) {//ejemplo precio token #26
                $("#price26").text(result);
                var value = web3.utils.fromWei($("#price26").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price26").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard26").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf26').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Doom TokenId #27
function priceOf27 () {
            
           cryptovideogamestoken.methods.priceOf(27).call(function (err, result) {//ejemplo precio token #27
                $("#price27").text(result);
                var value = web3.utils.fromWei($("#price27").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price27").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard27").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf27').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Mileena TokenId #28
function priceOf28 () {
            
          cryptovideogamestoken.methods.priceOf(28).call(function (err, result) {//ejemplo precio token #28
                $("#price28").text(result);
                var value = web3.utils.fromWei($("#price28").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price28").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard28").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf28').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Scorpion TokenId #29
function priceOf29 () {
            
           cryptovideogamestoken.methods.priceOf(29).call(function (err, result) {//ejemplo precio token #29
                $("#price29").text(result);
                var value = web3.utils.fromWei($("#price29").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price29").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard29").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf29').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Shadow Mordor TokenId #30
function priceOf30 () {
            
          cryptovideogamestoken.methods.priceOf(30).call(function (err, result) {//ejemplo precio token #30
                $("#price30").text(result);
                var value = web3.utils.fromWei($("#price30").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price30").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard30").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf30').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf The Witcher TokenId #31
function priceOf31 () {
            
          cryptovideogamestoken.methods.priceOf(31).call(function (err, result) {//ejemplo precio token #31
                $("#price31").text(result);
                var value = web3.utils.fromWei($("#price31").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price31").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard31").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf31').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Pagan Mind TokenId #32
function priceOf32 () {
            
           cryptovideogamestoken.methods.priceOf(32).call(function (err, result) {//ejemplo precio token #32
                $("#price32").text(result);
                var value = web3.utils.fromWei($("#price32").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price32").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard32").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf32').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Uncharted TokenId #33
function priceOf33 () {
            
           cryptovideogamestoken.methods.priceOf(33).call(function (err, result) {//ejemplo precio token #33
                $("#price33").text(result);
                var value = web3.utils.fromWei($("#price33").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price33").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard33").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf33').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Blazkowicz TokenId #34
function priceOf34 () {
            
           cryptovideogamestoken.methods.priceOf(34).call(function (err, result) {//ejemplo precio token #34
                $("#price34").text(result);
                var value = web3.utils.fromWei($("#price34").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price34").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard34").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf34').value = value;
         
       
     }); 
                                                                 
        }
// PriceOf Lara Croft TokenId #35
function priceOf35 () {
            
           cryptovideogamestoken.methods.priceOf(30).call(function (err, result) {//ejemplo precio token #35
                $("#price35").text(result);
                var value = web3.utils.fromWei($("#price35").text(), 'ether');
               var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("price35").innerHTML = `The current buying price for this contract is <b>${valued3} ETH<b>`;
               document.getElementById("priceCard35").innerHTML = `Price: <b>${valued3} ETH<b>`;
               
               
         //ejemplo de insertar resultado de una llamada a un input
          document.getElementById('priceOf35').value = value;
         
       
     }); 
                                                                 
        }




// NextPriceOf Mario Bross TokenId #0
        function nextPriceOf () {
            
           cryptovideogamestoken.methods.nextPriceOf(0).call(function (err, result) {//ejemplo Próximo precio token #0
          $("#nextprice").text(result);
                var value = web3.utils.fromWei($("#nextprice").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Sonic TokenId #1
        function nextPriceOf1 () {
            
           cryptovideogamestoken.methods.nextPriceOf(1).call(function (err, result) {//ejemplo Próximo precio token #1
          $("#nextprice1").text(result);
                var value = web3.utils.fromWei($("#nextprice1").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice1").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard1").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Pacman TokenId #2
        function nextPriceOf2 () {
            
           cryptovideogamestoken.methods.nextPriceOf(2).call(function (err, result) {//ejemplo Próximo precio token #2
          $("#nextprice2").text(result);
                var value = web3.utils.fromWei($("#nextprice2").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice2").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard2").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Megaman TokenId #3
        function nextPriceOf3 () {
            
            cryptovideogamestoken.methods.nextPriceOf(3).call(function (err, result) {//ejemplo Próximo precio token #3
          $("#nextprice3").text(result);
                var value = web3.utils.fromWei($("#nextprice3").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice3").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard3").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
             // NextPriceOf Bomberman TokenId #4
        function nextPriceOf4 () {
            
            cryptovideogamestoken.methods.nextPriceOf(4).call(function (err, result) {//ejemplo Próximo precio token #4
          $("#nextprice4").text(result);
                var value = web3.utils.fromWei($("#nextprice4").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice4").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard4").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     });
            }
            // NextPriceOf DonkeyKong TokenId #5
        function nextPriceOf5 () {
            
           cryptovideogamestoken.methods.nextPriceOf(5).call(function (err, result) {//ejemplo Próximo precio token #5
          $("#nextprice5").text(result);
                var value = web3.utils.fromWei($("#nextprice5").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice5").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard5").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Luigi TokenId #6
        function nextPriceOf6 () {
            
           cryptovideogamestoken.methods.nextPriceOf(6).call(function (err, result) {//ejemplo Próximo precio token #6
          $("#nextprice6").text(result);
                var value = web3.utils.fromWei($("#nextprice6").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice6").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard6").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
             // NextPriceOf Yoshi TokenId #7
        function nextPriceOf7 () {
            
            cryptovideogamestoken.methods.nextPriceOf(7).call(function (err, result) {//ejemplo Próximo precio token #7
          $("#nextprice7").text(result);
                var value = web3.utils.fromWei($("#nextprice7").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice7").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard7").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            
             // NextPriceOf Toad TokenId #8
        function nextPriceOf8 () {
            
            cryptovideogamestoken.methods.nextPriceOf(8).call(function (err, result) {//ejemplo Próximo precio token #8
          $("#nextprice8").text(result);
                var value = web3.utils.fromWei($("#nextprice8").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice8").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard8").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     });
            }
            // NextPriceOf Knuckles TokenId #9
        function nextPriceOf9 () {
            
           cryptovideogamestoken.methods.nextPriceOf(9).call(function (err, result) {//ejemplo Próximo precio token #9
          $("#nextprice9").text(result);
                var value = web3.utils.fromWei($("#nextprice9").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice9").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard9").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Wario TokenId #10
        function nextPriceOf10 () {
            
            cryptovideogamestoken.methods.nextPriceOf(10).call(function (err, result) {//ejemplo Próximo precio token #10
          $("#nextprice10").text(result);
                var value = web3.utils.fromWei($("#nextprice10").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice10").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard10").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     });
            }
            // NextPriceOf Bowser TokenId #11
        function nextPriceOf11 () {
            
           cryptovideogamestoken.methods.nextPriceOf(11).call(function (err, result) {//ejemplo Próximo precio token #11
          $("#nextprice11").text(result);
                var value = web3.utils.fromWei($("#nextprice11").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice11").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard11").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }


// NextPriceOf Sub Zero TokenId #12
        function nextPriceOf12 () {
            
           cryptovideogamestoken.methods.nextPriceOf(12).call(function (err, result) {//ejemplo Próximo precio token #12
          $("#nextprice12").text(result);
                var value = web3.utils.fromWei($("#nextprice12").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice12").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard12").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Assassin' Creed TokenId #13
        function nextPriceOf13 () {
            
           cryptovideogamestoken.methods.nextPriceOf(13).call(function (err, result) {//ejemplo Próximo precio token #13
          $("#nextprice13").text(result);
                var value = web3.utils.fromWei($("#nextprice13").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice13").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard13").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Kratos TokenId #14
        function nextPriceOf14 () {
            
           cryptovideogamestoken.methods.nextPriceOf(14).call(function (err, result) {//ejemplo Próximo precio token #14
          $("#nextprice14").text(result);
                var value = web3.utils.fromWei($("#nextprice14").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice14").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard14").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Raiden TokenId #15
        function nextPriceOf15 () {
            
           cryptovideogamestoken.methods.nextPriceOf(15).call(function (err, result) {//ejemplo Próximo precio token #15
          $("#nextprice15").text(result);
                var value = web3.utils.fromWei($("#nextprice15").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice15").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard15").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
             // NextPriceOf Kitana TokenId #16
        function nextPriceOf16 () {
            
           cryptovideogamestoken.methods.nextPriceOf(16).call(function (err, result) {//ejemplo Próximo precio token #16
          $("#nextprice16").text(result);
                var value = web3.utils.fromWei($("#nextprice16").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice16").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard16").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     });
            }
            // NextPriceOf The Last Of US TokenId #17
        function nextPriceOf17 () {
            
           cryptovideogamestoken.methods.nextPriceOf(17).call(function (err, result) {//ejemplo Próximo precio token #17
          $("#nextprice17").text(result);
                var value = web3.utils.fromWei($("#nextprice17").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice17").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard17").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Jonny Cage TokenId #18
        function nextPriceOf18 () {
            
           cryptovideogamestoken.methods.nextPriceOf(18).call(function (err, result) {//ejemplo Próximo precio token #18
          $("#nextprice18").text(result);
                var value = web3.utils.fromWei($("#nextprice18").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice18").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard18").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
             // NextPriceOf Prince Of Persia TokenId #19
        function nextPriceOf19 () {
            
            cryptovideogamestoken.methods.nextPriceOf(19).call(function (err, result) {//ejemplo Próximo precio token #19
          $("#nextprice19").text(result);
                var value = web3.utils.fromWei($("#nextprice19").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice19").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard19").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            
             // NextPriceOf Ada TokenId #20
        function nextPriceOf20 () {
            
            cryptovideogamestoken.methods.nextPriceOf(20).call(function (err, result) {//ejemplo Próximo precio token #20
          $("#nextprice20").text(result);
                var value = web3.utils.fromWei($("#nextprice20").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice20").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard20").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     });
            }
            // NextPriceOf Goro TokenId #21
        function nextPriceOf21 () {
            
            cryptovideogamestoken.methods.nextPriceOf(21).call(function (err, result) {//ejemplo Próximo precio token #21
          $("#nextprice21").text(result);
                var value = web3.utils.fromWei($("#nextprice21").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice21").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard21").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
            // NextPriceOf Leon TokenId #22
        function nextPriceOf22 () {
            
            cryptovideogamestoken.methods.nextPriceOf(22).call(function (err, result) {//ejemplo Próximo precio token #22
          $("#nextprice22").text(result);
                var value = web3.utils.fromWei($("#nextprice22").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice22").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard22").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     });
            }
            // NextPriceOf Ryu TokenId #23
        function nextPriceOf23 () {
            
           cryptovideogamestoken.methods.nextPriceOf(23).call(function (err, result) {//ejemplo Próximo precio token #23
          $("#nextprice23").text(result);
                var value = web3.utils.fromWei($("#nextprice23").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice23").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard23").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Hitman TokenId #24
        function nextPriceOf24 () {
            
           cryptovideogamestoken.methods.nextPriceOf(24).call(function (err, result) {//ejemplo Próximo precio token #24
          $("#nextprice24").text(result);
                var value = web3.utils.fromWei($("#nextprice24").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice24").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard24").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Aiden TokenId #25
        function nextPriceOf25 () {
            
            cryptovideogamestoken.methods.nextPriceOf(25).call(function (err, result) {//ejemplo Próximo precio token #25
          $("#nextprice25").text(result);
                var value = web3.utils.fromWei($("#nextprice25").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice25").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard25").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Blood Borne TokenId #26
        function nextPriceOf26 () {
            
           cryptovideogamestoken.methods.nextPriceOf(26).call(function (err, result) {//ejemplo Próximo precio token #26
          $("#nextprice26").text(result);
                var value = web3.utils.fromWei($("#nextprice26").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice26").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard26").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Doom TokenId #27
        function nextPriceOf27 () {
            
            cryptovideogamestoken.methods.nextPriceOf(27).call(function (err, result) {//ejemplo Próximo precio token #27
          $("#nextprice27").text(result);
                var value = web3.utils.fromWei($("#nextprice27").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice27").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard27").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Mileena TokenId #28
        function nextPriceOf28 () {
            
           cryptovideogamestoken.methods.nextPriceOf(28).call(function (err, result) {//ejemplo Próximo precio token #28
          $("#nextprice28").text(result);
                var value = web3.utils.fromWei($("#nextprice28").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice28").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard28").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Scorpion TokenId #29
        function nextPriceOf29 () {
            
           cryptovideogamestoken.methods.nextPriceOf(29).call(function (err, result) {//ejemplo Próximo precio token #29
          $("#nextprice29").text(result);
                var value = web3.utils.fromWei($("#nextprice29").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice29").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard29").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf Shadow Mordor TokenId #30
        function nextPriceOf30 () {
            
           cryptovideogamestoken.methods.nextPriceOf(30).call(function (err, result) {//ejemplo Próximo precio token #30
          $("#nextprice30").text(result);
                var value = web3.utils.fromWei($("#nextprice30").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice30").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard30").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
 // NextPriceOf The Witcher TokenId #31
        function nextPriceOf31 () {
            
          cryptovideogamestoken.methods.nextPriceOf(31).call(function (err, result) {//ejemplo Próximo precio token #31
          $("#nextprice31").text(result);
                var value = web3.utils.fromWei($("#nextprice31").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice31").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard31").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
// NextPriceOf Pagan Mind TokenId #32
        function nextPriceOf32 () {
            
           cryptovideogamestoken.methods.nextPriceOf(32).call(function (err, result) {//ejemplo Próximo precio token #32
          $("#nextprice32").text(result);
                var value = web3.utils.fromWei($("#nextprice32").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice32").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard32").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
// NextPriceOf Uncharted TokenId #33
        function nextPriceOf33 () {
            
           cryptovideogamestoken.methods.nextPriceOf(33).call(function (err, result) {//ejemplo Próximo precio token #33
          $("#nextprice33").text(result);
                var value = web3.utils.fromWei($("#nextprice33").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice33").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard33").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
// NextPriceOf Blazkowicz TokenId #34
        function nextPriceOf34 () {
            
           cryptovideogamestoken.methods.nextPriceOf(34).call(function (err, result) {//ejemplo Próximo precio token #34
          $("#nextprice34").text(result);
                var value = web3.utils.fromWei($("#nextprice34").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice34").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard34").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
// NextPriceOf Lara Croft TokenId #35
        function nextPriceOf35 () {
            
           cryptovideogamestoken.methods.nextPriceOf(35).call(function (err, result) {//ejemplo Próximo precio token #35
          $("#nextprice35").text(result);
                var value = web3.utils.fromWei($("#nextprice35").text(), 'ether');
                var valued3 = parseFloat(value).toFixed(3); 
                document.getElementById("nextprice35").innerHTML = `The next price for this contract is <b>${valued3} ETH<b>`;
                document.getElementById("nextpriceCard35").innerHTML = `Next Price: <b>${valued3} ETH<b>`;
                                           
     }); 
            }
        





   // OwnerOf Mario Bross TokenId #0
        
         function ownerOf () {
            
           cryptovideogamestoken.methods.ownerOf(0).call(function (err, result) {//ejemplo dueño del token #0
          $("#owner").text(result);
          var rec = result.substring(0,12);
          document.getElementById("ownerCard").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
         
          
        
     }); 
                                                                 
        }
  // OwnerOf Sonic TokenId #1
function ownerOf1 () {
            
           cryptovideogamestoken.methods.ownerOf(1).call(function (err, result) {//ejemplo dueño del token #1
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard1").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
         // OwnerOf Pacman TokenId #2
function ownerOf2 () {
            
           cryptovideogamestoken.methods.ownerOf(2).call(function (err, result) {//ejemplo dueño del token #1
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard2").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
 // OwnerOf Megaman TokenId #3
function ownerOf3 () {
            
           cryptovideogamestoken.methods.ownerOf(3).call(function (err, result) {//ejemplo dueño del token #3
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard3").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Bomberman TokenId #4
function ownerOf4 () {
            
           cryptovideogamestoken.methods.ownerOf(4).call(function (err, result) {//ejemplo dueño del token #4
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard4").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
        // OwnerOf Donkey Kong TokenId #5
function ownerOf5 () {
            
           cryptovideogamestoken.methods.ownerOf(5).call(function (err, result) {//ejemplo dueño del token #5
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard5").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
  // OwnerOf Luigi TokenId #6
function ownerOf6 () {
            
          cryptovideogamestoken.methods.ownerOf(6).call(function (err, result) {//ejemplo dueño del token #6
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard6").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
 // OwnerOf Yoshi TokenId #7
function ownerOf7 () {
            
          cryptovideogamestoken.methods.ownerOf(7).call(function (err, result) {//ejemplo dueño del token #7
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard7").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
 // OwnerOf Toad TokenId #8
function ownerOf8 () {
            
          cryptovideogamestoken.methods.ownerOf(8).call(function (err, result) {//ejemplo dueño del token #8
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard8").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Knuckles TokenId #9
function ownerOf9 () {
            
           cryptovideogamestoken.methods.ownerOf(9).call(function (err, result) {//ejemplo dueño del token #9
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard9").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Wario TokenId #10
function ownerOf10 () {
            
           cryptovideogamestoken.methods.ownerOf(10).call(function (err, result) {//ejemplo dueño del token #10
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard10").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Bowser TokenId #11
function ownerOf11 () {
            
           cryptovideogamestoken.methods.ownerOf(11).call(function (err, result) {//ejemplo dueño del token #11
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard11").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }

// OwnerOf Sub Zero TokenId #12
        
         function ownerOf12 () {
            
           cryptovideogamestoken.methods.ownerOf(12).call(function (err, result) {//ejemplo dueño del token #12
          $("#owner").text(result);
          var rec = result.substring(0,12);
          document.getElementById("ownerCard12").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
         
          
        
     }); 
                                                                 
        }
  // OwnerOf Assassin's Creed TokenId #13
function ownerOf13 () {
            
           cryptovideogamestoken.methods.ownerOf(13).call(function (err, result) {//ejemplo dueño del token #13
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard13").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
         // OwnerOf Kratos TokenId #14
function ownerOf14 () {
            
           cryptovideogamestoken.methods.ownerOf(14).call(function (err, result) {//ejemplo dueño del token #14
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard14").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
 // OwnerOf Raiden TokenId #15
function ownerOf15 () {
            
         cryptovideogamestoken.methods.ownerOf(15).call(function (err, result) {//ejemplo dueño del token #15
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard15").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Kitana TokenId #16
function ownerOf16 () {
            
          cryptovideogamestoken.methods.ownerOf(16).call(function (err, result) {//ejemplo dueño del token #16
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard16").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
        // OwnerOf The Last Of US TokenId #17
function ownerOf17 () {
            
           cryptovideogamestoken.methods.ownerOf(17).call(function (err, result) {//ejemplo dueño del token #17
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard17").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
  // OwnerOf Jonny Cage TokenId #18
function ownerOf18 () {
            
           cryptovideogamestoken.methods.ownerOf(18).call(function (err, result) {//ejemplo dueño del token #18
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard18").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
 // OwnerOf  TokenId #19
function ownerOf19 () {
            
          cryptovideogamestoken.methods.ownerOf(19).call(function (err, result) {//ejemplo dueño del token #19
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard19").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
 // OwnerOf Ada TokenId #20
function ownerOf20 () {
            
          cryptovideogamestoken.methods.ownerOf(20).call(function (err, result) {//ejemplo dueño del token #20
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard20").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Goro TokenId #21
function ownerOf21 () {
            
           cryptovideogamestoken.methods.ownerOf(21).call(function (err, result) {//ejemplo dueño del token #21
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard21").innerHTML = `Owner: <a href="https://rinkeby.etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Leon TokenId #22
function ownerOf22 () {
            
            cryptovideogamestoken.methods.ownerOf(22).call(function (err, result) {//ejemplo dueño del token #22
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard22").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Ryu TokenId #23
function ownerOf23 () {
            
            cryptovideogamestoken.methods.ownerOf(23).call(function (err, result) {//ejemplo dueño del token #23
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard23").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Hitman TokenId #24
function ownerOf24 () {
            
            cryptovideogamestoken.methods.ownerOf(24).call(function (err, result) {//ejemplo dueño del token #24
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard24").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Aiden TokenId #25
function ownerOf25 () {
            
           cryptovideogamestoken.methods.ownerOf(25).call(function (err, result) {//ejemplo dueño del token #25
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard25").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Blood Borne TokenId #26
function ownerOf26 () {
            
           cryptovideogamestoken.methods.ownerOf(26).call(function (err, result) {//ejemplo dueño del token #26
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard26").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Doom TokenId #27
function ownerOf27 () {
            
            cryptovideogamestoken.methods.ownerOf(27).call(function (err, result) {//ejemplo dueño del token #27
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard27").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Mileena TokenId #28
function ownerOf28 () {
            
            cryptovideogamestoken.methods.ownerOf(28).call(function (err, result) {//ejemplo dueño del token #28
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard28").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Scorpion TokenId #29
function ownerOf29 () {
            
           cryptovideogamestoken.methods.ownerOf(29).call(function (err, result) {//ejemplo dueño del token #29
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard29").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Shadow Mordor TokenId #30
function ownerOf30 () {
            
           cryptovideogamestoken.methods.ownerOf(30).call(function (err, result) {//ejemplo dueño del token #30
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard30").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf The Witcher TokenId #31
function ownerOf31 () {
            
            cryptovideogamestoken.methods.ownerOf(31).call(function (err, result) {//ejemplo dueño del token #31
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard31").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Pagan Mind TokenId #32
function ownerOf32 () {
            
          cryptovideogamestoken.methods.ownerOf(32).call(function (err, result) {//ejemplo dueño del token #32
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard32").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Uncharted TokenId #33
function ownerOf33 () {
            
           cryptovideogamestoken.methods.ownerOf(33).call(function (err, result) {//ejemplo dueño del token #33
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard33").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Blazkowicz TokenId #34
function ownerOf34 () {
            
           cryptovideogamestoken.methods.ownerOf(34).call(function (err, result) {//ejemplo dueño del token #34
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard34").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }
// OwnerOf Lara Croft TokenId #35
function ownerOf35 () {
            
            cryptovideogamestoken.methods.ownerOf(35).call(function (err, result) {//ejemplo dueño del token #35
          $("#owner").text(result);
           var rec = result.substring(0,12);
           document.getElementById("ownerCard35").innerHTML = `Owner: <a href="https://etherscan.io/address/${result}"><b style='color:blue'>${rec}...</b></a>`;
        
     }); 
                                                                 
        }

        
// Get Kirby TokenId #36
function getToken36 () {
            
            cryptovideogamestoken.methods.getToken(36).call(function (err, result) {
                
                 document.getElementById('priceOf36').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard36").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price36").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard36").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice36").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard36").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Rayman TokenId #37
function getToken37 () {
            
           cryptovideogamestoken.methods.getToken(37).call(function (err, result) {
                
                 document.getElementById('priceOf37').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard37").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price37").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard37").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice37").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard37").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Crash TokenId #38
function getToken38 () {
            
           cryptovideogamestoken.methods.getToken(38).call(function (err, result) {
                
                 document.getElementById('priceOf38').value =web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard38").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price38").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard38").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice38").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard38").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Ice Climbers TokenId #39
function getToken39 () {
            
           cryptovideogamestoken.methods.getToken(39).call(function (err, result) {
                
                 document.getElementById('priceOf39').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard39").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price39").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard39").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice39").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard39").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Star Fox TokenId #40
function getToken40 () {
            
            cryptovideogamestoken.methods.getToken(40).call(function (err, result) {
                
                 document.getElementById('priceOf40').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard40").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price40").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard40").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice40").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard40").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Birdo TokenId #41
function getToken41 () {
            
            cryptovideogamestoken.methods.getToken(41).call(function (err, result) {
                
                 document.getElementById('priceOf41').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard41").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price41").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard41").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice41").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard41").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Diddy Kong TokenId #42
function getToken42 () {
            
           cryptovideogamestoken.methods.getToken(42).call(function (err, result) {
                
                 document.getElementById('priceOf42').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard42").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price42").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard42").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice42").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard42").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Minecraft TokenId #43
function getToken43 () {
            
           cryptovideogamestoken.methods.getToken(43).call(function (err, result) {
                
                 document.getElementById('priceOf43').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard43").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price43").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard43").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice43").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard43").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Ratchet TokenId #44
function getToken44 () {
            
           cryptovideogamestoken.methods.getToken(44).call(function (err, result) {
                
                 document.getElementById('priceOf44').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard44").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price44").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard44").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice44").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard44").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Zelda TokenId #45
function getToken45 () {
            
           cryptovideogamestoken.methods.getToken(45).call(function (err, result) {
                
                 document.getElementById('priceOf45').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard45").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price45").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard45").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice45").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard45").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Metroid TokenId #46
function getToken46 () {
            
            cryptovideogamestoken.methods.getToken(46).call(function (err, result) {
                
                 document.getElementById('priceOf46').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard46").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price46").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard46").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice46").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard46").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Dr. Eggman TokenId #47
function getToken47 () {
            
           cryptovideogamestoken.methods.getToken(47).call(function (err, result) {
                
                 document.getElementById('priceOf47').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard47").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price47").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard47").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice47").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard47").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Contra TokenId #48
function getToken48 () {
            
            cryptovideogamestoken.methods.getToken(48).call(function (err, result) {
                
                 document.getElementById('priceOf48').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard48").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price48").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard48").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice48").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard48").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Aloy TokenId #49
function getToken49 () {
            
            cryptovideogamestoken.methods.getToken(49).call(function (err, result) {
                
                 document.getElementById('priceOf49').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard49").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price49").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard49").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice49").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard49").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Cloud Strife TokenId #50
function getToken50 () {
            
           cryptovideogamestoken.methods.getToken(50).call(function (err, result) {
                
                 document.getElementById('priceOf50').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard50").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price50").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard50").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice50").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard50").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Hunter Destiny TokenId #51
function getToken51 () {
            
            cryptovideogamestoken.methods.getToken(51).call(function (err, result) {
                
                 document.getElementById('priceOf51').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard51").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price51").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard51").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice51").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard51").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Jill Valentine TokenId #52
function getToken52 () {
            
           cryptovideogamestoken.methods.getToken(52).call(function (err, result) {
                
                 document.getElementById('priceOf52').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard52").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price52").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard52").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice52").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard52").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get John Marston TokenId #53
function getToken53 () {
            
           cryptovideogamestoken.methods.getToken(53).call(function (err, result) {
                
                 document.getElementById('priceOf53').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard53").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price53").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard53").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice53").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard53").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Vivi Ornitier TokenId #54
function getToken54 () {
            
            cryptovideogamestoken.methods.getToken(54).call(function (err, result) {
                
                 document.getElementById('priceOf54').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard54").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price54").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard54").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice54").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard54").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Wrench TokenId #55
function getToken55 () {
            
            cryptovideogamestoken.methods.getToken(55).call(function (err, result) {
                
                 document.getElementById('priceOf55').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard55").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price55").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard55").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice55").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard55").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get July Kidman TokenId #56
function getToken56 () {
            
           cryptovideogamestoken.methods.getToken(56).call(function (err, result) {
                
                 document.getElementById('priceOf56').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard56").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price56").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard56").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice56").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard56").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Sebastian C. TokenId #57
function getToken57 () {
            
           cryptovideogamestoken.methods.getToken(57).call(function (err, result) {
                
                 document.getElementById('priceOf57').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard57").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price57").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard57").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice57").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard57").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Solid Snake TokenId #58
function getToken58 () {
            
            cryptovideogamestoken.methods.getToken(58).call(function (err, result) {
                
                 document.getElementById('priceOf58').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard58").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price58").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard58").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice58").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard58").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Trevor TokenId #59
function getToken59 () {
            
           cryptovideogamestoken.methods.getToken(59).call(function (err, result) {
                
                 document.getElementById('priceOf59').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard59").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price59").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard59").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice59").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard59").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Plants vs Zombies TokenId #60
function getToken60 () {
            
            cryptovideogamestoken.methods.getToken(60).call(function (err, result) {
                
                 document.getElementById('priceOf60').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard60").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price60").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard60").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice60").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard60").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Princess Peach TokenId #61
function getToken61 () {
            
           cryptovideogamestoken.methods.getToken(61).call(function (err, result) {
                
                 document.getElementById('priceOf61').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard61").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price61").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard61").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice61").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard61").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Dixie Kong TokenId #62
function getToken62 () {
            
           cryptovideogamestoken.methods.getToken(62).call(function (err, result) {
                
                 document.getElementById('priceOf62').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard62").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price62").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard62").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice62").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard62").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Paragoomba TokenId #63
function getToken63 () {
            
           cryptovideogamestoken.methods.getToken(63).call(function (err, result) {
                
                 document.getElementById('priceOf63').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard63").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price63").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard63").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice63").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard63").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Qbert TokenId #64
function getToken64 () {
            
            cryptovideogamestoken.methods.getToken(64).call(function (err, result) {
                
                 document.getElementById('priceOf64').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard64").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price64").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard64").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice64").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard64").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Tails TokenId #65
function getToken65 () {
            
            cryptovideogamestoken.methods.getToken(65).call(function (err, result) {
                
                 document.getElementById('priceOf65').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard65").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price65").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard65").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice65").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard65").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Angry Birds TokenId #66
function getToken66 () {
            
           cryptovideogamestoken.methods.getToken(66).call(function (err, result) {
                
                 document.getElementById('priceOf66').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard66").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price66").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard66").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice66").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard66").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Earthworm Jim TokenId #67
function getToken67 () {
            
           cryptovideogamestoken.methods.getToken(67).call(function (err, result) {
                
                 document.getElementById('priceOf67').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard67").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price67").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard67").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice67").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard67").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Lemmings TokenId #68
function getToken68 () {
            
            cryptovideogamestoken.methods.getToken(68).call(function (err, result) {
                
                 document.getElementById('priceOf68').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard68").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price68").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard68").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice68").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard68").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Knack TokenId #69
function getToken69 () {
            
           cryptovideogamestoken.methods.getToken(69).call(function (err, result) {
                
                 document.getElementById('priceOf69').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard69").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price69").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard69").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice69").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard69").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Waluigi TokenId #70
function getToken70 () {
            
           cryptovideogamestoken.methods.getToken(70).call(function (err, result) {
                
                 document.getElementById('priceOf70').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard70").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price70").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard70").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice70").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard70").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Kiddy Kong TokenId #71
function getToken71 () {
            
           cryptovideogamestoken.methods.getToken(71).call(function (err, result) {
                
                 document.getElementById('priceOf71').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard71").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price71").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard71").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice71").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard71").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Lightning TokenId #72
function getToken72 () {
            
            cryptovideogamestoken.methods.getToken(72).call(function (err, result) {
                
                 document.getElementById('priceOf72').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard72").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price72").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard72").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice72").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard72").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Lucas Kellen TokenId #73
function getToken73 () {
            
            cryptovideogamestoken.methods.getToken(73).call(function (err, result) {
                
                 document.getElementById('priceOf73').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard73").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price73").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard73").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice73").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard73").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Ninja Gaiden TokenId #74
function getToken74 () {
            
           cryptovideogamestoken.methods.getToken(74).call(function (err, result) {
                
                 document.getElementById('priceOf74').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard74").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price74").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard74").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice74").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard74").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Quiet TokenId #75
function getToken75 () {
            
           cryptovideogamestoken.methods.getToken(75).call(function (err, result) {
                
                 document.getElementById('priceOf75').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard75").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price75").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard75").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice75").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard75").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Tomb Rider TokenId #76
function getToken76 () {
            
            cryptovideogamestoken.methods.getToken(76).call(function (err, result) {
                
                 document.getElementById('priceOf76').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard76").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price76").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard76").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice76").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard76").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Michael de Santa TokenId #77
function getToken77 () {
            
           cryptovideogamestoken.methods.getToken(77).call(function (err, result) {
                
                 document.getElementById('priceOf77').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard77").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price77").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard77").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice77").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard77").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Cammy TokenId #78
function getToken78 () {
            
            cryptovideogamestoken.methods.getToken(78).call(function (err, result) {
                
                 document.getElementById('priceOf78').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard78").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price78").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard78").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice78").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard78").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Franklin TokenId #79
function getToken79 () {
            
            cryptovideogamestoken.methods.getToken(79).call(function (err, result) {
                
                 document.getElementById('priceOf79').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard79").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price79").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard79").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice79").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard79").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Sonya Blade TokenId #80
function getToken80 () {
            
           cryptovideogamestoken.methods.getToken(80).call(function (err, result) {
                
                 document.getElementById('priceOf80').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard80").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price80").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard80").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice80").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard80").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Chun Li TokenId #81
function getToken81 () {
            
          cryptovideogamestoken.methods.getToken(81).call(function (err, result) {
                
                 document.getElementById('priceOf81').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard81").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price81").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard81").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice81").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard81").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Sitara TokenId #82
function getToken82 () {
            
            cryptovideogamestoken.methods.getToken(82).call(function (err, result) {
                
                 document.getElementById('priceOf82').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard82").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price82").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard82").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice82").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard82").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Marcus TokenId #83
function getToken83 () {
            
           cryptovideogamestoken.methods.getToken(83).call(function (err, result) {
                
                 document.getElementById('priceOf83').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard83").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price83").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard83").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice83").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard83").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Frau Engel TokenId #84
function getToken84 () {
            
           cryptovideogamestoken.methods.getToken(84).call(function (err, result) {
                
                 document.getElementById('priceOf84').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard84").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price84").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard84").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice84").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard84").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Mancubus TokenId #85
function getToken85 () {
            
            cryptovideogamestoken.methods.getToken(85).call(function (err, result) {
                
                 document.getElementById('priceOf85').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard85").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price85").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard85").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice85").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard85").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Albert Wesker TokenId #86
function getToken86 () {
            
           cryptovideogamestoken.methods.getToken(86).call(function (err, result) {
                
                 document.getElementById('priceOf86').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard86").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price86").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard86").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice86").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard86").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Pinky TokenId #87
function getToken87 () {
            
           cryptovideogamestoken.methods.getToken(87).call(function (err, result) {
                
                 document.getElementById('priceOf87').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard87").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price87").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard87").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice87").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard87").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Pyramid Head TokenId #88
function getToken88 () {
            
           cryptovideogamestoken.methods.getToken(88).call(function (err, result) {
                
                 document.getElementById('priceOf88').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard88").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price88").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard88").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice88").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard88").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get The Keeper TokenId #89
function getToken89 () {
            
           cryptovideogamestoken.methods.getToken(89).call(function (err, result) {
                
                 document.getElementById('priceOf89').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard89").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price89").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard89").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice89").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard89").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Nemesis TokenId #90
function getToken90 () {
            
            cryptovideogamestoken.methods.getToken(90).call(function (err, result) {
                
                 document.getElementById('priceOf90').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard90").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price90").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard90").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice90").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard90").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get CyberDemon TokenId #91
function getToken91 () {
            
           cryptovideogamestoken.methods.getToken(91).call(function (err, result) {
                
                 document.getElementById('priceOf91').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard91").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price91").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard91").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice91").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard91").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get CacoDemon TokenId #92
function getToken92 () {
            
            cryptovideogamestoken.methods.getToken(92).call(function (err, result) {
                
                 document.getElementById('priceOf92').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard92").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price92").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard92").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice92").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard92").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Devil Jin Kazama TokenId #93
function getToken93 () {
            
           cryptovideogamestoken.methods.getToken(93).call(function (err, result) {
                
                 document.getElementById('priceOf93').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard93").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price93").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard93").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice93").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard93").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Nurse Silent Hill TokenId #94
function getToken94 () {
            
            cryptovideogamestoken.methods.getToken(94).call(function (err, result) {
                
                 document.getElementById('priceOf94').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard94").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price94").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard94").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice94").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard94").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}
// Get Lisa Garland TokenId #95
function getToken95 () {
            
            cryptovideogamestoken.methods.getToken(95).call(function (err, result) {
                
                 document.getElementById('priceOf95').value = web3.utils.fromWei(result[1],'ether');
                 document.getElementById("priceCard95").innerHTML = `Price: <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("price95").innerHTML = `The current buying price for this contract is <b>${parseFloat(web3.utils.fromWei(result[1],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("nextpriceCard95").innerHTML = `Next Price: <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                document.getElementById("nextprice95").innerHTML = `The next price for this contract is <b>${parseFloat(web3.utils.fromWei(result[2],'ether')).toFixed(3)} ETH<b>`;
                 document.getElementById("ownerCard95").innerHTML = `Owner: <a href="https://etherscan.io/address/${result[3]}"><b style='color:blue'>${result[3].substring(0,12)}...</b></a>`; 
     });
            
		}










        
        
        
        
// funcion compra Mario Bross TokendId0
    function purchase() {// ejemplo de compra token #0
    cryptovideogamestokenOldWeb3.purchase(0, {value: window.web3old.toWei(document.getElementById('priceOf').value, 'ether')}, function (error, txHash) {
         
         function tryTillResponse (txhash, done) {
		    document.getElementById('status').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Sonic TokendId1
function purchase1() {// ejemplo de compra token #1
     cryptovideogamestokenOldWeb3.purchase(1, {value: window.web3old.toWei(document.getElementById('priceOf1').value, 'ether')}, function (error, txHash) {
         
         function tryTillResponse (txhash, done) {
		    document.getElementById('status1').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status1').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status1").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status1").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Pacman TokendId2
function purchase2() {// ejemplo de compra token #2
      cryptovideogamestokenOldWeb3.purchase(2, {value: window.web3old.toWei(document.getElementById('priceOf2').value, 'ether')}, function (error, txHash) {
		            
         function tryTillResponse (txhash, done) {
		    document.getElementById('status2').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status2').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status2").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status2").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Megaman TokendId3
function purchase3() {// ejemplo de compra token #3
      cryptovideogamestokenOldWeb3.purchase(3, {value: window.web3old.toWei(document.getElementById('priceOf3').value, 'ether')}, function (error, txHash) {
		          
         function tryTillResponse (txhash, done) {
		    document.getElementById('status3').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status3').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status3").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status3").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Bomberman TokendId4 
function purchase4() {// ejemplo de compra token #4
      cryptovideogamestokenOldWeb3.purchase(4, {value: window.web3old.toWei(document.getElementById('priceOf4').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status4').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status4').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status4").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status4").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Donkey Kong TokendId5
function purchase5() {// ejemplo de compra token #5
     cryptovideogamestokenOldWeb3.purchase(5, {value: window.web3old.toWei(document.getElementById('priceOf5').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status5').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status5').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status5").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status5").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Luigi TokendId6 
function purchase6() {// ejemplo de compra token #6
     cryptovideogamestokenOldWeb3.purchase(6, {value: window.web3old.toWei(document.getElementById('priceOf6').value, 'ether')}, function (error, txHash) {
		            
          function tryTillResponse (txhash, done) {
		    document.getElementById('status6').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status6').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status6").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status6").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Yoshi TokendId7
function purchase7() {// ejemplo de compra token #7
     cryptovideogamestokenOldWeb3.purchase(7, {value: window.web3old.toWei(document.getElementById('priceOf7').value, 'ether')}, function (error, txHash) {
		          
         function tryTillResponse (txhash, done) {
		    document.getElementById('status7').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status7').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status7").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status7").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Toad TokendId8
function purchase8() {// ejemplo de compra token #8
     cryptovideogamestokenOldWeb3.purchase(8, {value: window.web3old.toWei(document.getElementById('priceOf8').value, 'ether')}, function (error, txHash) {
		          
         function tryTillResponse (txhash, done) {
		    document.getElementById('status8').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status8').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status8").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status8").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Knuckles TokendId9
function purchase9() {// ejemplo de compra token #9
     cryptovideogamestokenOldWeb3.purchase(9, {value: window.web3old.toWei(document.getElementById('priceOf9').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status9').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status9').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status9").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status9").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Wario TokendId10
function purchase10() {// ejemplo de compra token #10
     cryptovideogamestokenOldWeb3.purchase(10, {value: window.web3old.toWei(document.getElementById('priceOf10').value, 'ether')}, function (error, txHash) {
		            
         function tryTillResponse (txhash, done) {
		    document.getElementById('status10').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status10').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status10").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status10").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Bowser TokendId11
function purchase11() {// ejemplo de compra token #11
     cryptovideogamestokenOldWeb3.purchase(11, {value: window.web3old.toWei(document.getElementById('priceOf11').value, 'ether')}, function (error, txHash) {
		            
         function tryTillResponse (txhash, done) {
		    document.getElementById('status11').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status11').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status11").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status11").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }

// funcion compra Sub Zero TokendId12
    function purchase12() {// ejemplo de compra token #12
     cryptovideogamestokenOldWeb3.purchase(12, {value: window.web3old.toWei(document.getElementById('priceOf12').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status12').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status12').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status12").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status12").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Assassin's Creed TokendId13
function purchase13() {// ejemplo de compra token #13
     cryptovideogamestokenOldWeb3.purchase(13, {value: window.web3old.toWei(document.getElementById('priceOf13').value, 'ether')}, function (error, txHash) {
		          
         function tryTillResponse (txhash, done) {
		    document.getElementById('status13').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status13').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status13").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status13").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Kratos TokendId14
function purchase14() {// ejemplo de compra token #14
     cryptovideogamestokenOldWeb3.purchase(14, {value: window.web3old.toWei(document.getElementById('priceOf14').value, 'ether')}, function (error, txHash) {
		          
         function tryTillResponse (txhash, done) {
		    document.getElementById('status14').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status14').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status14").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status14").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Raiden TokendId15
function purchase15() {// ejemplo de compra token #15
     cryptovideogamestokenOldWeb3.purchase(15, {value: window.web3old.toWei(document.getElementById('priceOf15').value, 'ether')}, function (error, txHash) {
		            
         function tryTillResponse (txhash, done) {
		    document.getElementById('status15').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status15').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status15").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status15").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Kitana TokendId16
function purchase16() {// ejemplo de compra token #16
     cryptovideogamestokenOldWeb3.purchase(16, {value: window.web3old.toWei(document.getElementById('priceOf16').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status16').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status16').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status16").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status16").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra The Last Of US TokendId17
function purchase17() {// ejemplo de compra token #17
     cryptovideogamestokenOldWeb3.purchase(17, {value: window.web3old.toWei(document.getElementById('priceOf17').value, 'ether')}, function (error, txHash) {
		            
         function tryTillResponse (txhash, done) {
		    document.getElementById('status17').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status17').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status17").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status17").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Jonny Cage TokendId18
function purchase18() {// ejemplo de compra token #18
     cryptovideogamestokenOldWeb3.purchase(18, {value: window.web3old.toWei(document.getElementById('priceOf18').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status18').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status18').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status18").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status18").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Prince Of Persia TokendId19
function purchase19() {// ejemplo de compra token #19
cryptovideogamestokenOldWeb3.purchase(19, {value: window.web3old.toWei(document.getElementById('priceOf19').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status19').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status19').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status19").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status19").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Ada TokendId20
function purchase20() {// ejemplo de compra token #20
     cryptovideogamestokenOldWeb3.purchase(20, {value: window.web3old.toWei(document.getElementById('priceOf20').value, 'ether')}, function (error, txHash) {
		            
         function tryTillResponse (txhash, done) {
		    document.getElementById('status20').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status20').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status20").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status20").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Goro TokendId21
function purchase21() {// ejemplo de compra token #21
     cryptovideogamestokenOldWeb3.purchase(21, {value: window.web3old.toWei(document.getElementById('priceOf21').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status21').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status21').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status21").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status21").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Leon TokendId22
function purchase22() {// ejemplo de compra token #22
     cryptovideogamestokenOldWeb3.purchase(22, {value: window.web3old.toWei(document.getElementById('priceOf22').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status22').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status22').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status22").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status22").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Ryu TokendId23
function purchase23() {// ejemplo de compra token #23
     cryptovideogamestokenOldWeb3.purchase(23, {value: window.web3old.toWei(document.getElementById('priceOf23').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status23').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status23').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status23").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status23").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Hitman TokendId24
function purchase24() {// ejemplo de compra token #24
     cryptovideogamestokenOldWeb3.purchase(24, {value: window.web3old.toWei(document.getElementById('priceOf24').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status24').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status24').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status24").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status24").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Aiden TokendId25
function purchase25() {// ejemplo de compra token #25
     cryptovideogamestokenOldWeb3.purchase(25, {value: window.web3old.toWei(document.getElementById('priceOf25').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status25').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status25').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status25").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status25").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Blood Borne TokendId26
function purchase26() {// ejemplo de compra token #26
     cryptovideogamestokenOldWeb3.purchase(26, {value: window.web3old.toWei(document.getElementById('priceOf26').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status26').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status26').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status26").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status26").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Doom TokendId27
function purchase27() {// ejemplo de compra token #27
     cryptovideogamestokenOldWeb3.purchase(27, {value: window.web3old.toWei(document.getElementById('priceOf27').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status27').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status27').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status27").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status27").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Mileena TokendId28
function purchase28() {// ejemplo de compra token #28
     cryptovideogamestokenOldWeb3.purchase(28, {value: window.web3old.toWei(document.getElementById('priceOf28').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status28').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status28').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status28").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status28").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Scorpion TokendId29
function purchase29() {// ejemplo de compra token #29
     cryptovideogamestokenOldWeb3.purchase(29, {value: window.web3old.toWei(document.getElementById('priceOf29').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status29').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status29').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status29").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status29").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Shadow Mordor TokendId30
function purchase30() {// ejemplo de compra token #30
     cryptovideogamestokenOldWeb3.purchase(30, {value: window.web3old.toWei(document.getElementById('priceOf30').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status30').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status30').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status30").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status30").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra The Witcher TokendId31
function purchase31() {// ejemplo de compra token #31
     cryptovideogamestokenOldWeb3.purchase(31, {value: window.web3old.toWei(document.getElementById('priceOf31').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status31').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status31').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status31").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status31").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Pagan Mind TokendId32
function purchase32() {// ejemplo de compra token #32
     cryptovideogamestokenOldWeb3.purchase(32, {value: window.web3old.toWei(document.getElementById('priceOf32').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status32').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status32').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status32").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status32").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Uncharted TokendId33
function purchase33() {// ejemplo de compra token #33
     cryptovideogamestokenOldWeb3.purchase(33, {value: window.web3old.toWei(document.getElementById('priceOf33').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status33').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status33').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status33").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status33").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Blazkowicz TokendId34
function purchase34() {// ejemplo de compra token #34
     cryptovideogamestokenOldWeb3.purchase(34, {value: window.web3old.toWei(document.getElementById('priceOf34').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status34').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status34').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status34").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status34").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra Lara Croft TokendId35
function purchase35() {// ejemplo de compra token #35
     cryptovideogamestokenOldWeb3.purchase(35, {value: window.web3old.toWei(document.getElementById('priceOf35').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status35').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status35').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status35").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status35").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId36
function purchase36() {// ejemplo de compra token #36
     cryptovideogamestokenOldWeb3.purchase(36, {value: window.web3old.toWei(document.getElementById('priceOf36').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status36').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status36').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status36").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status36").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId37
function purchase37() {// ejemplo de compra token #37
     cryptovideogamestokenOldWeb3.purchase(37, {value: window.web3old.toWei(document.getElementById('priceOf37').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status37').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status37').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status37").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status37").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId38
function purchase38() {// ejemplo de compra token #38
     cryptovideogamestokenOldWeb3.purchase(38, {value: window.web3old.toWei(document.getElementById('priceOf38').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status38').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status38').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status38").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status38").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId39
function purchase39() {// ejemplo de compra token #39
     cryptovideogamestokenOldWeb3.purchase(39, {value: window.web3old.toWei(document.getElementById('priceOf39').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status39').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status39').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status39").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status39").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId40
function purchase40() {// ejemplo de compra token #40
     cryptovideogamestokenOldWeb3.purchase(40, {value: window.web3old.toWei(document.getElementById('priceOf40').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status40').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status40').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status40").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status40").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId41
function purchase41() {// ejemplo de compra token #41
     cryptovideogamestokenOldWeb3.purchase(41, {value: window.web3old.toWei(document.getElementById('priceOf41').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status41').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status41').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status41").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status41").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId42
function purchase42() {// ejemplo de compra token #42
     cryptovideogamestokenOldWeb3.purchase(42, {value: window.web3old.toWei(document.getElementById('priceOf42').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status42').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status42').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status42").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status42").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId43
function purchase43() {// ejemplo de compra token #43
     cryptovideogamestokenOldWeb3.purchase(43, {value: window.web3old.toWei(document.getElementById('priceOf43').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status43').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status43').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status43").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status43").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId44
function purchase44() {// ejemplo de compra token #44
     cryptovideogamestokenOldWeb3.purchase(44, {value: window.web3old.toWei(document.getElementById('priceOf44').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status44').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status44').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status44").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status44").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId45
function purchase45() {// ejemplo de compra token #45
     cryptovideogamestokenOldWeb3.purchase(45, {value: window.web3old.toWei(document.getElementById('priceOf45').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status45').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status45').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status45").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status45").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId46
function purchase46() {// ejemplo de compra token #46
     cryptovideogamestokenOldWeb3.purchase(46, {value: window.web3old.toWei(document.getElementById('priceOf46').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status46').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status46').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status46").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status46").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId47
function purchase47() {// ejemplo de compra token #47
     cryptovideogamestokenOldWeb3.purchase(47, {value: window.web3old.toWei(document.getElementById('priceOf47').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status47').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status47').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status47").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status47").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId48
function purchase48() {// ejemplo de compra token #48
     cryptovideogamestokenOldWeb3.purchase(48, {value: window.web3old.toWei(document.getElementById('priceOf48').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status48').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status48').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status48").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status48").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId49
function purchase49() {// ejemplo de compra token #49
     cryptovideogamestokenOldWeb3.purchase(49, {value: window.web3old.toWei(document.getElementById('priceOf49').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status49').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status49').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status49").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status49").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId50
function purchase50() {// ejemplo de compra token #50
     cryptovideogamestokenOldWeb3.purchase(50, {value: window.web3old.toWei(document.getElementById('priceOf50').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status50').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status50').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status50").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status50").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId51
function purchase51() {// ejemplo de compra token #51
     cryptovideogamestokenOldWeb3.purchase(51, {value: window.web3old.toWei(document.getElementById('priceOf51').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status51').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status51').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status51").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status51").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId52
function purchase52() {
     cryptovideogamestokenOldWeb3.purchase(52, {value: window.web3old.toWei(document.getElementById('priceOf52').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status52').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status52').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status52").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status52").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId53
function purchase53() {
     cryptovideogamestokenOldWeb3.purchase(53, {value: window.web3old.toWei(document.getElementById('priceOf53').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status53').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status53').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status53").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status53").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId54
function purchase54() {
     cryptovideogamestokenOldWeb3.purchase(54, {value: window.web3old.toWei(document.getElementById('priceOf54').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status54').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status54').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status54").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status54").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId55
function purchase55() {
     cryptovideogamestokenOldWeb3.purchase(55, {value: window.web3old.toWei(document.getElementById('priceOf55').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status55').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status55').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status55").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status55").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId56
function purchase56() {
     cryptovideogamestokenOldWeb3.purchase(56, {value: window.web3old.toWei(document.getElementById('priceOf56').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status56').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status56').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status56").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status56").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId57
function purchase57() {
     cryptovideogamestokenOldWeb3.purchase(57, {value: window.web3old.toWei(document.getElementById('priceOf57').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status57').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status57').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status57").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status57").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }// funcion compra TokendId58
function purchase58() {
     cryptovideogamestokenOldWeb3.purchase(58, {value: window.web3old.toWei(document.getElementById('priceOf58').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status58').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status58').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status58").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status58").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId59
function purchase59() {
     cryptovideogamestokenOldWeb3.purchase(59, {value: window.web3old.toWei(document.getElementById('priceOf59').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status59').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status59').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status59").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status59").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId60
function purchase60() {
     cryptovideogamestokenOldWeb3.purchase(60, {value: window.web3old.toWei(document.getElementById('priceOf60').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status60').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status60').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status60").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status60").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId61
function purchase61() {
     cryptovideogamestokenOldWeb3.purchase(61, {value: window.web3old.toWei(document.getElementById('priceOf61').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status61').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status61').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status61").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status61").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId62
function purchase62() {
     cryptovideogamestokenOldWeb3.purchase(62, {value: window.web3old.toWei(document.getElementById('priceOf62').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status62').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status62').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status62").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status62").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId63
function purchase63() {
     cryptovideogamestokenOldWeb3.purchase(63, {value: window.web3old.toWei(document.getElementById('priceOf63').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status63').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status63').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status63").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status63").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId64
function purchase64() {
     cryptovideogamestokenOldWeb3.purchase(64, {value: window.web3old.toWei(document.getElementById('priceOf64').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status64').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status64').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status64").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status64").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId65
function purchase65() {
     cryptovideogamestokenOldWeb3.purchase(65, {value: window.web3old.toWei(document.getElementById('priceOf65').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status65').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status65').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status65").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status65").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId66
function purchase66() {
     cryptovideogamestokenOldWeb3.purchase(66, {value: window.web3old.toWei(document.getElementById('priceOf66').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status66').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status66').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status66").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status66").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId67
function purchase67() {
     cryptovideogamestokenOldWeb3.purchase(67, {value: window.web3old.toWei(document.getElementById('priceOf67').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status67').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status67').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status67").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status67").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId68
function purchase68() {
     cryptovideogamestokenOldWeb3.purchase(68, {value: window.web3old.toWei(document.getElementById('priceOf68').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status68').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status68').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status68").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status68").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId69
function purchase69() {
     cryptovideogamestokenOldWeb3.purchase(69, {value: window.web3old.toWei(document.getElementById('priceOf69').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status69').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status69').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status69").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status69").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId70
function purchase70() {
     cryptovideogamestokenOldWeb3.purchase(70, {value: window.web3old.toWei(document.getElementById('priceOf70').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status70').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status70').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status70").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status70").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId71
function purchase71() {
     cryptovideogamestokenOldWeb3.purchase(71, {value: window.web3old.toWei(document.getElementById('priceOf71').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status71').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status71').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status71").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status71").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId72
function purchase72() {
     cryptovideogamestokenOldWeb3.purchase(72, {value: window.web3old.toWei(document.getElementById('priceOf72').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status72').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status72').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status72").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status72").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId73
function purchase73() {
     cryptovideogamestokenOldWeb3.purchase(73, {value: window.web3old.toWei(document.getElementById('priceOf73').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status73').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status73').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status73").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status73").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId74
function purchase74() {
     cryptovideogamestokenOldWeb3.purchase(74, {value: window.web3old.toWei(document.getElementById('priceOf74').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status74').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status74').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status74").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status74").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId75
function purchase75() {
     cryptovideogamestokenOldWeb3.purchase(75, {value: window.web3old.toWei(document.getElementById('priceOf75').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status75').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status75').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status75").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status75").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId76
function purchase76() {
     cryptovideogamestokenOldWeb3.purchase(76, {value: window.web3old.toWei(document.getElementById('priceOf76').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status76').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status76').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status76").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status76").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId77
function purchase77() {
     cryptovideogamestokenOldWeb3.purchase(77, {value: window.web3old.toWei(document.getElementById('priceOf77').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status77').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status77').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status77").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status77").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId78
function purchase78() {
     cryptovideogamestokenOldWeb3.purchase(78, {value: window.web3old.toWei(document.getElementById('priceOf78').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status78').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status78').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status78").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status78").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId79
function purchase79() {
     cryptovideogamestokenOldWeb3.purchase(79, {value: window.web3old.toWei(document.getElementById('priceOf79').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status79').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status79').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status79").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status79").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId80
function purchase80() {
     cryptovideogamestokenOldWeb3.purchase(80, {value: window.web3old.toWei(document.getElementById('priceOf80').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status80').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status80').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status80").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status80").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId81
function purchase81() {
     cryptovideogamestokenOldWeb3.purchase(81, {value: window.web3old.toWei(document.getElementById('priceOf81').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status81').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status81').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status81").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status81").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId82
function purchase82() {
     cryptovideogamestokenOldWeb3.purchase(82, {value: window.web3old.toWei(document.getElementById('priceOf82').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status82').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status82').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status82").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status82").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId83
function purchase83() {
     cryptovideogamestokenOldWeb3.purchase(83, {value: window.web3old.toWei(document.getElementById('priceOf83').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status83').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status83').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status83").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status83").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId84
function purchase84() {
     cryptovideogamestokenOldWeb3.purchase(84, {value: window.web3old.toWei(document.getElementById('priceOf84').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status84').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status84').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status84").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status84").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId85
function purchase85() {
     cryptovideogamestokenOldWeb3.purchase(85, {value: window.web3old.toWei(document.getElementById('priceOf85').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status85').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status85').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status85").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status85").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId86
function purchase86() {
     cryptovideogamestokenOldWeb3.purchase(86, {value: window.web3old.toWei(document.getElementById('priceOf86').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status86').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status86').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status86").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status86").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId87
function purchase87() {
     cryptovideogamestokenOldWeb3.purchase(87, {value: window.web3old.toWei(document.getElementById('priceOf87').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status87').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status87').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status87").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status87").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId88
function purchase88() {
     cryptovideogamestokenOldWeb3.purchase(88, {value: window.web3old.toWei(document.getElementById('priceOf88').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status88').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status88').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status88").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status88").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId89
function purchase89() {
     cryptovideogamestokenOldWeb3.purchase(89, {value: window.web3old.toWei(document.getElementById('priceOf89').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status89').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status89').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status89").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status89").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId90
function purchase90() {
     cryptovideogamestokenOldWeb3.purchase(90, {value: window.web3old.toWei(document.getElementById('priceOf90').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status90').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status90').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status90").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status90").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId91
function purchase91() {
     cryptovideogamestokenOldWeb3.purchase(91, {value: window.web3old.toWei(document.getElementById('priceOf91').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status91').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status91').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status91").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status91").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId92
function purchase92() {
     cryptovideogamestokenOldWeb3.purchase(92, {value: window.web3old.toWei(document.getElementById('priceOf92').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status92').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status92').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status92").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status92").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId93
function purchase93() {
     cryptovideogamestokenOldWeb3.purchase(93, {value: window.web3old.toWei(document.getElementById('priceOf93').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status93').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status93').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status93").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status93").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId94
function purchase94() {
     cryptovideogamestokenOldWeb3.purchase(94, {value: window.web3old.toWei(document.getElementById('priceOf94').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status94').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status94').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status94").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status94").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }
// funcion compra TokendId95
function purchase95() {
     cryptovideogamestokenOldWeb3.purchase(95, {value: window.web3old.toWei(document.getElementById('priceOf95').value, 'ether')}, function (error, txHash) {
		           
         function tryTillResponse (txhash, done) {
		    document.getElementById('status95').innerHTML = `<div class="alert info">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Info!</strong> Waiting for the transaction to be mined ...
</div>`;
		    web3.eth.getTransactionReceipt(txhash, function (err, result) {
		    		console.log("Error: " + err);
		    		console.log("Result: " + result);
		        if (!err && !result) {
		            // Try again with a bit of delay
		            setTimeout(function () { tryTillResponse(txhash, done) }, 500);
		        } else {
		            document.getElementById('status95').innerHTML = '';
		            var log = document.createElement("div");
		            log.innerHTML = JSON.stringify(result);
		            document.getElementById('log').appendChild(log);
		            done(err,result);
		        }
		    })
		}
		            tryTillResponse(txHash, function (error, receipt) {
        if(!error)
    {
  document.getElementById("status95").innerHTML = `<div class="alert success">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Success!</strong> His transaction was successful. Transaction Receipt: <a href="https://etherscan.io/tx/${ txHash}"><b style='color:#4CAF50'>${ txHash}</b></a>
<br>
<p>visit <a href="MyCards.html"><b style='color:blue'>My cards</b></a> to see your XGAME.</p>
</div>`;                   
       
    }else
    {
         document.getElementById("status95").innerHTML = `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Failed!</strong> You canceled the transaction or the connection failed.
</div>`;     
       console.log(error);
    }
      });

     });
			      		    
 }