class Account {

  constructor(name){
    this.name = name;
    this.balance = 0;
    this.credit = false;
    this.history = [];
    this.accountNumber = this.createAccountNumber()
  }

  createAccountNumber(){
    // create a random 9-digit number with a hyphen after digit 4
    return ((Math.random() + .1) * 0.9 * 10000).toFixed(6).replace(/\./,'-');
  }

  deposit(label, amount){
    if(amount/1 > 0 && amount/1 <= 30000){
    this.balance += amount;
    this.history.unshift({label: label, amount: amount, time: this.formatTime()});
    } else {
      console.log("transferring amount is 0 or more than 30000 sek")
    }
  }

  withdraw(label, amount){
    if(this.balance >= amount){
      this.deposit(label, -amount);
    } else {
      console.log("Balance is negative. Transaction is not available !")
    }
  }

  formatTime(){
    return new Intl.DateTimeFormat(
      'se-SV', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date());
  }

}