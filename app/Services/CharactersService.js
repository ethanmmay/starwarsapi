import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";
import { api } from "./AxiosService.js";

class CharactersService {

  constructor() {
    this.getCharacter()
  }

  getCharacter() {
    api.get('people').then(res => {  // if api returns data within timeout time, "then" execute
        ProxyState.characters = res.data.results.map(rawCharData => new Character(rawCharData))
        ProxyState.next = res.data.next
        ProxyState.prev = res.data.previous
      })
  }

  next() {
    api.get(ProxyState.next).then(res => {
        ProxyState.characters = res.data.results.map(rawCharData => new Character(rawCharData))
        ProxyState.next = res.data.next
        ProxyState.prev = res.data.previous
    }).catch(err => console.error(err))
  }

  prev() {
    api.get(ProxyState.prev).then(res => {
      ProxyState.characters = res.data.results.map(rawCharData => new Character(rawCharData))
      ProxyState.next = res.data.next
      ProxyState.prev = res.data.previous
    }).catch(err => console.error(err))
  }

}

export const charactersService = new CharactersService();

