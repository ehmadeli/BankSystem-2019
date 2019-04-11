class Account {

  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.credit = false;
    this.history = [];
//    this.accountlimit = 1000000;
    this.accountNumber = this.createAccountNumber()
  }

  createAccountNumber() {
    // create a random 9-digit number with a hyphen after digit 4
    return ((Math.random() + .1) * 0.9 * 10000).toFixed(6).replace(/\./, '-');
  }

  deposit(label, amounts) {
      this.balance += amounts;
      this.history.unshift({ label: label, amount: amounts, time: this.formatTime() });
  }

  withdraw(label, amounts) {
    this.balance += -amounts;
    this.history.unshift({ label: label, amount: "-" + amounts, time: this.formatTime() });
  }


  checkBalance(amount) {

    if ((this.balance - amount >= 0) && !this.credit) {
      return true;
    }
    else if (this.credit) {
      return true;
    }
    else {
      return false;
    }

  }


 /* checkBalance(amount) {
    if (amount <= this.accountlimit && amount != 0) {
      if ((this.balance - amount >= 0) && !this.credit) {
        return true;
      }
      else if (this.credit) {
        return true;
      }
      else {
        console.log("Balance is negative. Transaction is failed !");
        return false;
      }
    } else {
      console.log("The amount is 0 or more than " + this.accountlimit + " Sek. Transaction is failed !");
      return false;
    }
  } */

  formatTime() {
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