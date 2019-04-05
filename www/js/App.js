class App {

  constructor() {

    // Register classes used with JSON-flex
    JSON._classes(User, Account);

    // Instances that we need to be able to reach anywhere
    App.spaHandler = new SpaHandler();
    App.myAccounts = new MyAccounts();
    App.simulate = new Simulate();
    App.betalning = new Betalning();
    App.betalningPgBg = new BetalningPgBg();
    App.login = new Login();
    App.history = new History();
    App.debitkort = new Debitkort();

    // Instances that we don't need to reach/communicate with
    new RegisterUser();

  }

}