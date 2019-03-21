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
    let limit = amount/1 < 0 ? amount/1 * (-1) : amount/1;
    if(limit > 0 && limit <= 30000){
      this.balance += amount;
      this.history.unshift({label: label, amount: amount, time: this.formatTime()});
    } else {
      console.log("transferring amount is 0 or more than 30000 sek")
    }
  }

  withdraw(label, amount){
    this.deposit(label, -amount);
  }

  checkBalance(amount){
    if(this.balance >= amount){
      return true;
    } else {
      console.log("Balance is negative. Transaction is not available !");
      return false;
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