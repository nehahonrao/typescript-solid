import {Animal} from "./animal";
import {Zoo} from "./old";

let target=<HTMLElement>document.querySelector("#target");

let zoo = new Zoo;
let cat= new Animal("cat","mauw");
let dog= new Animal("dog","bhau-bhau");
let peacock= new Animal("peacock","pooo");

zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(peacock);


zoo.animals.forEach((animal: object) => {
    // console.log(animal);
    target.innerHTML += (animal.type + ": " + animal.sound + "<br>");
});