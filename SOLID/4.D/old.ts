
import {Gas} from "./gas";
import{Oven} from "./oven";

class Restaurant{
    private _name : string;
    private _gas : Gas;

    constructor(name : string, gas : Gas) {
        this._name = name;
        this._gas =gas;
    }

    public Cook(item : string) {
        this._gas.turnOn();
        this._gas.cook(item);
        this._gas.turnOff();
    }
}


let bakery = new Restaurant("Bakery",new Oven());
bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
