class Start {

    constructor() {

    }

    updateDisplay() {
      if (!App.user) { return; }
      let html = '';

        html = `<tr>
          <th scope="row">${App.user.accounts[0].name}</th>
          <td >${App.user.accounts[0].accountNumber}</td>
          <td class="text-right">${this.toSwedishFormat(App.user.accounts[0].balance)}</td>
         
        </tr>`;
   
      // put the html in the DOM
      $('.accounts tbody').html(html);
     // $(this.form).find('#accountNumber').html(html2);

    // Get the account number from the url
    let no = location.hash.split('?')[1];

    let html3 = '';
    let x = 0;
    for(let transaction of App.user.accounts[0].history){
      if(x < 5){
        html3 += `
          <tr>
          
            <td>${transaction.label}</td>
            <td>${transaction.time}</td>
            <td>${transaction.amount}</td>
          </tr>
        `
      }
      x++;
    }
    $('.accounts1 tbody').html(html3);


     }
   
       toSwedishFormat(num){
        return new Intl.NumberFormat('sv', {
          style: 'currency',
          currency: 'SEK',
        }).format(num);
      }
    }
