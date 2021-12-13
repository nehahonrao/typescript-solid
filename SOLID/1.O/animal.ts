export class Animal {
    private  _type:string;
    private  _sound:string;

    constructor(type:string,sound:string){
        this._type=type;
        this._sound=sound;
    }

    get type() {
        return this._type;
    }

    get sound(){
        return this._sound;

    }
}
    


   