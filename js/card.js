//card 01
document.getElementById('card-1').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-1-tk');
      console.log(cardMoney);

      //Money in Coupon Code
      // const totalPriceCard1 = document.getElementById('totalprice');
      // const priceTotal = totalPriceCard1.innerText;
      // const moneyInt = parseFloat(priceTotal);
      // totalPriceCard1.innerText =  moneyInt  + cardMoney;

      //total Price Money in Coupon Code
      const findingMoney = backMoney('totalprice', 'card-1-tk', 'total');
     

      
   
      //total in coupon
      // const totalMoney = document.getElementById('total')
      // const moneyInner = totalMoney.innerText;
      // const monInt = parseFloat(moneyInner);

      // totalMoney.innerText = monInt + findingMoney;

      //for accessories name
      const nameCard = cardName('accessories01');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories01');
      console.log(listAdded);

      
});

//card 02
document.getElementById('card-2').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-2-tk');
      console.log(cardMoney);

      //total Price Money in Coupon Code
      const findingMoney = backMoney('totalprice', 'card-2-tk','total')

      //for accessories name
      const nameCard = cardName('accessories02');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories02');
      console.log(listAdded);

      
});
//card 03
document.getElementById('card-3').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-3-tk');
      console.log(cardMoney);

      //Money in Coupon Code
      const findingMoney = backMoney('totalprice', 'card-3-tk','total')

      //for accessories name
      const nameCard = cardName('accessories03');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories03');
      console.log(listAdded);

      
});
//card 04
document.getElementById('card-4').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-4-tk');
      console.log(cardMoney);

      //Money in Coupon Code
     const findingMoney = backMoney('totalprice', 'card-4-tk','total')

      //for accessories name
      const nameCard = cardName('accessories02');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories04');
      console.log(listAdded);

      
});
//card 05
document.getElementById('card-5').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-5-tk');
      console.log(cardMoney);

      //Money in Coupon Code
     const findingMoney = backMoney('totalprice', 'card-5-tk','total')

      //for accessories name
      const nameCard = cardName('accessories05');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories05');
      console.log(listAdded);

      
});
//card 06
document.getElementById('card-6').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-6-tk');
      console.log(cardMoney);

      //Money in Coupon Code
      const findingMoney = backMoney('totalprice','card-6-tk','total')

      //for accessories name
      const nameCard = cardName('accessories06');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories06');
      console.log(listAdded);

      
});
//card 07
document.getElementById('card-7').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-7-tk');
      console.log(cardMoney);

      //Money in Coupon Code
      const findingMoney = backMoney('totalprice','card-7-tk','total')

      //for accessories name
      const nameCard = cardName('accessories07');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories07');
      console.log(listAdded);

      
});
//card 08
document.getElementById('card-8').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-8-tk');
      console.log(cardMoney);

      //Money in Coupon Code
      const findingMoney = backMoney('totalprice','card-8-tk','total')

      //for accessories name
      const nameCard = cardName('accessories08');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories08');
      console.log(listAdded);

      
});
//card 09
document.getElementById('card-9').addEventListener('click', function () {
      //Taka
      const cardMoney = card('card-9-tk');
      console.log(cardMoney);

      //Money in Coupon Code
      const findingMoney = backMoney('totalprice','card-9-tk','total')

      //for accessories name
      const nameCard = cardName('accessories09');
      console.log(nameCard);

       //for list added
      const listAdded = listItem('listGroup','accessories09');
      console.log(listAdded);

      
});

 

document.getElementById('but-1').addEventListener('click', function () {
      const inputField = document.getElementById('infield')
      const inValue = inputField.value;
      inputField.value = '';


      const totalMoney = document.getElementById('discount');
      const totalMoneyInner = totalMoney.innerText;
      const moneyInt = parseFloat(totalMoneyInner);
      if (inValue == 'SELL200') {
            totalMoney.innerText = moneyInt + (document.getElementById('total').innerText * 0.2);
            document.getElementById('total').innerText = document.getElementById('total').innerText - totalMoney.innerText;
            
            
      }
      
});

document.getElementById('home').addEventListener('click', function () {
      document.getElementById('totalprice').innerText = 0;
      document.getElementById('total').innerText = 0;
      document.getElementById('discount').innerText = 0;

      document.getElementById('but-1').setAttribute('disabled','true');
      document.getElementById('purchases').setAttribute('disabled', 'true');
      
      let myList = document.getElementById('listGroup');
      while (listGroup.firstChild) {
            myList.removeChild(listGroup.firstChild);
      }
       document.getElementById('none').style.display = 'block';

});



