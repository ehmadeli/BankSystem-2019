class Betalning {

  constructor() {
    this.form = '.betalning-form';
    $(document).on('submit', this.form, e => this.onsubmit(e));
  }

  updateDisplay() {
    if (!App.user) { return; }
    let html = '';
    // loop through the logged in users accounts and create html
    for (let account of App.user.accounts) {
      html += `<option value="${account.accountNumber}">${account.name} - ${account.accountNumber}</option>`;
    }
    // put the html in the DOM
    $(this.form).find('#accountNumber').html(html);
    $(this.form).find('#accountNumberTo').html(html);
  }

  onsubmit(e) {
    // Don't send the form
    e.preventDefault();
    // Collect the form data
    this.collectFormdata();
    let f = this.formdata;
    // convert the sum to a number - if not possible set it to 0
    f.sum = isNaN(f.sum / 1) ? 0 : f.sum / 1;

    // Get the correct account
    let account = App.user.accounts.filter(account => account.accountNumber === f.accountNumber)[0];
    let accountTo = App.user.accounts.filter(account => account.accountNumber === f.accountNumberTo)[0];
    // Deposit or withdraw from different accounts

    if (account === accountTo) {
      alert("Överföring till samma konto är inte tillåtet. Vänligen välj ett annat konto.");
      return;

    } else if (account.balance >= f.sum) {
      account.withdraw(f.label + ' to: ' + f.accountNumberTo, f.sum);
      accountTo.deposit(f.label + ' from: ' + f.accountNumber, f.sum);
    } else 
      alert("Du har inte tillräckligt med Saldo för att överföra till andra konton.");
    

    // Save the user data
    App.user.save();
    // Goto the my-accounts page
    location.hash = "#my-accounts";
  }

  collectFormdata() {
    let formdata = {};
    $(this.form).find('input, select').each(function () {
      formdata[this.id] = $(this).val();
    });
    this.formdata = formdata;
  }


}