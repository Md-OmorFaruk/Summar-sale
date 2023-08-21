function card(taka) {
      // Taka
      const cardOneTk = document.getElementById(taka);
      const cardOneTkInnerText = cardOneTk.innerText;

      const convertInt = parseFloat(cardOneTkInnerText);
      return convertInt;
      

};
function cardName(name) {
        //Name
      const cardName = document.getElementById(name);
      const cardNameInnerText = cardName.innerText;
      return cardNameInnerText;
}
;
function listItem(itemName, accessSori) {
      //List
      document.getElementById('none').style.display = 'none';
      const listContainer = document.getElementById(itemName);
      const li = document.createElement('li');
      li.innerText = cardName(accessSori);
      listContainer.appendChild(li);
      // listContainer.insertBefore(li, listContainer.firstChild);

};
function backMoney(taka, money, all) {
        
      //total Price
      const totalPriceCard1 = document.getElementById(taka);
      const priceTotal = totalPriceCard1.innerText;
      const moneyInt = parseFloat(priceTotal);
      totalPriceCard1.innerText = moneyInt + card(money);

      //total
      const moneyOfTotal = document.getElementById(all)
      const moneyAgain = moneyOfTotal.innerText;
      const moneyInt01 = parseFloat(moneyAgain);
      moneyOfTotal.innerText = moneyInt01 + card(money)
      
      if (moneyOfTotal.innerText >= 200) {
            document.getElementById('but-1').removeAttribute('disabled');
      }
      if (totalPriceCard1.innerText > 0) {
            document.getElementById('purchases').removeAttribute('disabled');
      }

      return moneyOfTotal.innerText;


  
};

