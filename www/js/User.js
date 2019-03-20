class User {

  constructor(username, myFile) {
    this.username = username;
    this.myFile = myFile;
    this.accounts = [];
    // add one account initially
    this.addAccount('Lönekonto');
  }

  addAccount(name) {
    let newAccount = new Account(name);
    this.accounts.push(newAccount);
    return newAccount;
  }

  delAccount(account){
    //let index = this.accounts.indexOf(account);
    for(let x=0; x<this.accounts.length; x++ ){
      if(this.accounts[x].name == account){
        this.accounts.splice(x, 1);
        break;
      }
    }

    //console.log("Users: " + account);
    //console.log("indexUsers: " + index);
    //this.accounts.splice(index, 1);
  }

  async save(){
    // Wrapping the user in {data: user}
    // because of a bug in JSON._save
    // (it can't recreate instances from top level objects)
    await JSON._save(this.myFile, {data: this});
  }

}