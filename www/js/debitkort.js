class Debitkort {

  constructor() {
    this.form = '.debitkort-form';
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
    // Deposit or withdraw
    
    if (account.balance >= 250) {
    
      account.withdraw(' Debitcard ', f.sum);
      alert('Tack för att du beställde ett nytt betalkort. Kortet kommer att levereras till din adress inom 3 arbetsdagar.');
    
    } else
      alert("Du har inte tillräckligt med balans för att beställa ett nytt Debitkort.");
 

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