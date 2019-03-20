class History {

  constructor() {
    // event handlers
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

    console.log(account, no)
    // Start generating dynamic html
    $('.history-headline').text(account.name + ' ' + account.accountNumber);

    let html = '';
    for(let transaction of account.history){
      html += `
        <tr>
          <td>${transaction.label}</td>
          <td>${transaction.time}</td>
          <td>${transaction.amount}</td>
        </tr>
      `
    }
    $('.history tbody').html(html);
  }

}