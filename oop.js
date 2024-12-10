//ex1 + ex 2
/*class animal {
    constructor(nom,couleur,habitat){
        this.nom=nom
        this.couleur=couleur
        this.habitat=habitat
    }
}
const chat=new animal("chat","gris","tunis");

animal.prototype.move=function(){
    return(`l'animal ${this.nom} se deplace`)
}
console.log(chat);
console.log(chat.move());
let oiseau = new animal("oiseau","bleu","foret");
console.log(oiseau)
console.log(oiseau.move())*/

//ex 3

/*class animal {
    constructor(nom,couleur){
        this.nom=nom
        this.couleur=couleur
    }
}
class Chien extends animal {
    constructor(nom, couleur, race) {
        super(nom, couleur); 
        this.race = race;
    }
}

const bergerAllemand = new Chien("Chien", "Noir", "Berger Allemand");

console.log(  bergerAllemand.nom,bergerAllemand.couleur,bergerAllemand.race);
*/

//ex4

class Animal {
  constructor(nom, couleur) {
    this.nom = nom;
    this.couleur = couleur;
  }

  parler() {
    console.log("Cet animal fait un bruit générique.");
  }
}

class Chat extends Animal {
  constructor(nom, couleur) {
    super(nom, couleur);
  }

  miauler() {
    console.log("Miaou!");
  }
}

const chatPersan = new Chat("Chat Persan", "Blanc");

chatPersan.parler();
chatPersan.miauler();
