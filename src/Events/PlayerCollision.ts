
// todo:: useEffect on active stateRoomNav

import { NAMES } from "Configs/names";
import { nameConversion } from "Utils/conversion";

/**
 * PlayerCollisionClass
 * Global object that handels all collisions with player
 */
class PlayerCollisionClass {
    private state:boolean=false;
    // private stateRoomNav:boolean=false
    // private items:Array<any>=[];
    constructor(){
        this.state=true        
    }

    public isPlayer({ manifold, target, other }:any):boolean{
        const name= other.rigidBodyObject.name
        return name !== NAMES.Player1
    }
    public collisionHandler({ manifold, target, other }:any):void{
        const name= other.rigidBodyObject.name
        if(name !== NAMES.Player1) return 

        const targ= nameConversion.extract(target.rigidBodyObject.name)
        this.changeRoom(targ)
    }

    // todo:: prompt for comfiration
    public changeRoom(url:string):void{
        if(!this.state) return
        window.location.hash = "/"+url
    }
}
export const playerCollider = new PlayerCollisionClass()
