class History {

  constructor() {
    this.form = '.history-form';
     $(document).on('submit', this.form, e => this.onsubmit(e));
  
  }

  updateDisplay() {
    // Fix timing issue on hard login
    if(!App.user){
      setTimeout(() => this.updateDisplay(), 100);
      return;
    }
    // Get the account number from the url
    let no = location.hash.split('?')[1];
    // Look up the account
    let account;
    for (let anAccount of App.user.accounts) {
      if (anAccount.accountNumber === no) {
        account = anAccount;
      }
    }

    //console.log(account, no)
    // Start generating dynamic html
    $('.history-headline').text(account.name + ' ' + account.accountNumber);

    let html = '';
    let x = 0;
    for(let transaction of account.history){
      if(x < 10){
        html += `
          <tr>
            <td>${transaction.label}</td>
            <td>${transaction.time}</td>
            <td>${transaction.amount}</td>
          </tr>
        `
      }
      x++;
    }
    $('.history tbody').html(html);
  }

  onsubmit(e) {
   // Don't send the form
   e.preventDefault();
   // Collect the form data
   ///this.collectFormdata();
   ///let f = this.formdata;
   // convert the sum to a number - if not possible set it to 0
   ///f.sum = isNaN(f.sum / 1) ? 0 : f.sum / 1;
   // Get the correct account
   ///let account = App.user.accounts.filter(account => account.accountNumber === f.accountNumber)[0];
   // Goto the my-accounts page
   location.hash = "#my-accounts";
 }
}