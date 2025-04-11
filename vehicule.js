// Classe Voiture qui implémente Vehicule
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Création d'une instance de la classe Voiture
var maVoiture = new Voiture("Toyota", "Corolla", 2020);
maVoiture.start(); // Affiche : Car engine started
