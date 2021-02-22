import CharactersController from "./Controllers/CharactersController.js";

class App {
  charactersController = new CharactersController();
}

window["app"] = new App();
