export class Ninja {
    private name;
    private _weapon: 'sword';
    private _title: 'black belt ninja';
    private _description: 'Agile and swift. Fights with sword and lots of tactics'

    constructor(name) {
        this.name = name || 'Ninja';
    }

    get weapon() {
        return this._weapon;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }
}

export class Wrestler {
    private name;
    private _title: 'bone crusher';
    private _description: 'Strong and swift. Fights with bare hands and lots of strength'


    constructor(name) {
        this.name = name || 'Wrestler';
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }
}

export class Soldier {
    private name;
    private _title: 'lazer target';
    private _weapon: 'gun';
    private _description: 'Long range sharp shooter. Handles guns perfectly'


    constructor(name) {
        this.name = name || 'Soldier';
    }

    get weapon() {
        return this._weapon;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }
}


