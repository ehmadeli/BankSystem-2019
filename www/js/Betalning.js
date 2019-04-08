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
    this.checkForNegativeNumber();
    this.checkForAmount();
    this.displayErrors();

    // Get the correct account
    let account = App.user.accounts.filter(account => account.accountNumber === f.accountNumber)[0];
    let accountTo = App.user.accounts.filter(account => account.accountNumber === f.accountNumberTo)[0];
    // Deposit or withdraw from different accounts
    if((account != accountTo) && (account.checkBalance(f.sum))){
      account.withdraw(f.label + ' to: ' + f.accountNumberTo, f.sum);
      accountTo.deposit(f.label + ' from: ' + f.accountNumber, f.sum);
    }
    
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
  checkForNegativeNumber() {
    let f = this.formdata;
    if (f.sum < 0) {
      f.errors.sum = 'Du får inte skriva ett negativt nummer';
      
    }
    else
    {
      App.user.save();
      location.hash = "#my-accounts";
    }
  }
  checkForAmount() {
    let f = this.formdata;
    let accountFrom = App.user.accounts.filter(account => account.accountNumber === f.fromAccountNumber)[0];
    if (f.sum > this.balance) {
      f.errors.sum = 'Du har inte tillräckligt med pengar';
    }
  }
  displayErrors() {
    let e = this.formdata.errors;
    $(this.form + ' .error').empty();
    for (let key in e) {
      $(this.form + ' #' + key).siblings('.error').text(e[key]);
    }
  }

}