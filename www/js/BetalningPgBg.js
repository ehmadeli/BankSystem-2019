class BetalningPgBg {

  constructor() {
    this.form = '.betalning-pgbg-form';
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

    // Get the correct account
    let account = App.user.accounts.filter(account => account.accountNumber === f.accountNumber)[0];
    // Deposit or withdraw
//    if(account.checkBalance(f.sum)){
  if(account.balance>=f.sum){
     account.withdraw(f.label + ' to Pg/Bg ' + f.pgbg , f.sum);
    }else
    alert("Du har inte tillräckligt med saldo för att betala till Pg/Bg konton. Vänligen välj annan summa.");

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