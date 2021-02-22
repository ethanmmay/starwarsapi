export default class Character {
    constructor(data) {
        this.name = data.name
        this.mass = data.mass
        this.hairColor = data.hairColor || data.hair_color
    }

    get Template() {

        return /*html*/`
        <div class="card p-2">
            ${this.name} weighs ${this.mass}kg and has ${this.hairColor == "n/a" ? "no" : this.hairColor} hair.
        </div>
        `
    }
}
