import { ProxyState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";


//Private
function _draw() {
  let characters = ProxyState.characters;
  let template = ''
  characters.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button class="btn btn-primary" onclick="app.charactersController.next()">Next</button>
  <button class="btn btn-primary" onclick="app.charactersController.prev()">Previous</button>
  <div className="card-columns characters">
      ${template}
  </div>
  `
}

//Public
export default class CharactersController {
  constructor() {
    ProxyState.on("characters", _draw);
    _draw()
  }

  getCharacter() {
    charactersService.getCharacter()
  }

  next() {
    charactersService.next()
  }

  prev() {
    charactersService.prev()
  }
}
