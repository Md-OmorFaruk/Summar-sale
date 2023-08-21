function card(taka) {
      const cardOneTk = document.getElementById(taka);
      const cardOneTkInnerText = cardOneTk.innerText;

      const convertInt = parseFloat(cardOneTkInnerText);
      return convertInt;

};