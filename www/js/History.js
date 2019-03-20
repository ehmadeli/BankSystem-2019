class History {

  constructor() {
    this.form = '.history-form';
    $(document).on('submit', this.form, e => this.onsubmit(e));
  }

  updateDisplay() {
    if (!App.user) { return; }
    //let html = Object.name;
    // loop through the logged in users accounts and create html

    //App.user.load();
    //let person = await JSON._load(App.user);
    //console.log(person);

    //$("#accountName").html("<b>${account.accountNumber}</b>");

    console.log(Object);
    for (let x in Object.history) {
      html += x.amount + '  ' + x.label;
    }
    // put the html in the DOM
    $(this.form).html(html);
    
    
  }

  onsubmit(e) {
    // Don't send the form
    
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