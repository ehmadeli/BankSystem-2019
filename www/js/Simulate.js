class Simulate {
  constructor() {
    this.form = '.simulate-form';
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
    $.datepicker.setDefaults($.datepicker.regional["sv"]);
    $('#datepicker').datepicker();
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
    // Deposit or withdraw
    if (account.checkBalance(f.sum)) {
     account[f.depositOrWithdraw](f.depositOrWithdraw + ': ' + f.label, f.sum);
    }
//    account.withdraw(f.label, f.sum);
//    account.deposit(f.label, f.sum);
    
  }

  collectFormdata() {
    let formdata = { errors: {} };
    $(this.form).find('input, select').each(function () {
      formdata[this.id] = $(this).val();
    });
    this.formdata = formdata;
  }

  checkForNegativeNumber() {
    let f = this.formdata;
    if (f.sum < 0) {
      f.errors.sum = 'Beloppet ska vara positivt nummer';

    }
    else {
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