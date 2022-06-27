let Hund = function (name, besitzer) {
    this._name = name;
    this._besitzer = besitzer;
};
Hund.prototype.bellen = function () {
    console.log(this._name + "sagt:Wau wau!");
};
let waldi = new Hund("Waldi", "Krause");
waldi.bellen();