class MyAccounts {
  constructor(){
   $(document).on('click', '.add-account-btn', e => this.addAccount(e));
   $(document).on('click', '.del-account-btn', e => this.delAccount(e));
   $(document).on('click', '.his-account-btn', e => this.showHistory(e));
   $(document).on('hidden.bs.modal', '#addAccountModal', e => this.emptyNewAccountNameField(e));
   this.form = '.history-form';
   //$(document).on('submit', this.form, e => this.onsubmit(e));
 }

 showHistory(){
   let accountNumber = $('#accountNumber').val();
   // For some reason we need to wait
   // before navigating to page with location.hash
   // (strange...)
   setTimeout(() => {
     location.hash = 'history?' + accountNumber;
   }, 1);
 }

 updateDisplay() {
   if (!App.user) { return; }
   let html = '';
   let html2 = '';
   let xx = 0;
   // loop through the logged in users accounts and create html
   for (let account of App.user.accounts) {
     html += `<tr>
       <th scope="row">${account.name}</th>
       <td >${account.accountNumber}</td>
       <td class="text-right">${this.toSwedishFormat(account.balance)}</td>
       <td class="text-right"><button type="submit" id=${xx} class="del-account-btn btn btn-primary">Tar bort</button></td>
     </tr>`;
     html2 += `<option value="${account.accountNumber}">${account.name} - ${account.accountNumber}</option>`;
     xx++;
   }

   // put the html in the DOM
   $('.accounts tbody').html(html);
   $(this.form).find('#accountNumber').html(html2);
  }

 
 toSwedishFormat(num){
   return new Intl.NumberFormat('sv', {
     style: 'currency',
     currency: 'SEK',
   }).format(num);
 }

 addAccount(){
  if (!App.user) { return; }
  // Add the account
  let credit = document.getElementById("credit").checked;
  let name = $('#newAccountName').val();
  //Create account with name
  if(name != ""){
    App.user.addAccount(name, credit);
    // Save the user data
    App.user.save();
  }else {
    console.log("The name of account is empty !!!")
  }
  
  // Update the display
  this.updateDisplay();
}

  delAccount(e){
    if (!App.user) { return; }
    let index = $(e.currentTarget).attr('id');
    //console.log("** " + index);
    let account = App.user.accounts[index]; 
    //console.log(account);   
    // Del the account
    App.user.delAccount(account.name);
    // Save the user data
    App.user.save();
    // Update the display
    this.updateDisplay();
  }


 emptyNewAccountNameField(){
   // empty the field when the modal closes
   $('#newAccountName').val('');
 }

 /*onsubmit(e) {
   // Don't send the form
   e.preventDefault();
   // Collect the form data
   this.collectFormdata();
   let f = this.formdata;
   // convert the sum to a number - if not possible set it to 0
   f.sum = isNaN(f.sum / 1) ? 0 : f.sum / 1;
   // Get the correct account
   let account = App.user.accounts.filter(account => account.accountNumber === f.accountNumber)[0];
   // Goto the my-accounts page
   location.hash = "#my-accounts";
 }*/

}