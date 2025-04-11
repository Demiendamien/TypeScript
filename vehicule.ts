// Interface Vehicule
interface Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Classe Voiture qui implémente Vehicule
  class Voiture implements Vehicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Création d'une instance de la classe Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2020);
  maVoiture.start(); // Affiche : Car engine started
  