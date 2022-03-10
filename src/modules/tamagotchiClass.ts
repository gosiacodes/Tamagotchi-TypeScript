import { showHappiness, showHunger, showMyTamagotchi } from "./display";

class Tamagotchi {
    happiness: number;
    hunger: number;
    constructor(
        readonly name: string,
        readonly animal: string){
        this.happiness = 5;
        this.hunger = 5;
        setInterval(this.makeTamagotchiHungry.bind(this), 5000);
        setInterval(this.makeTamagotchiUnhappy.bind(this), 5000);
        }
    makeTamagotchiUnhappy():number{
        this.happiness--;
        if (this.happiness == 0) {
            this.tamagotchiDies('sorrow');
        }
        showHappiness(this.happiness);
        return this.happiness;
    }
    makeTamagotchiHungry():number{
        this.hunger++;
        if (this.hunger == 10) {
            this.tamagotchiDies('hunger');
        }
        showHunger(this.hunger);
        return this.hunger;
    }  
    makeTamagotchiHappy():number{
        if (this.happiness == 10) {
            this.hunger++;
            showHunger(this.hunger);
            if (this.hunger == 10) {
                this.tamagotchiDies('hunger');
            }
            return this.hunger;
        }
        else {
            this.happiness++;
            showHappiness(this.happiness);
        }
        return this.happiness;
    }
    giveTamagotchiFood():number{
        if (this.hunger == 0) {
            this.happiness--;
            showHappiness(this.happiness);
            if (this.happiness == 0) {
                this.tamagotchiDies('sorrow');
            }
            return this.happiness;
        }
        else {
            this.hunger--;
            showHunger(this.hunger);
        }
        return this.hunger;
    }   
    getTamagotchi():void{
        console.log('Tamagotchi data: ', this.name, this.animal, this.hunger, this.happiness);
        showMyTamagotchi(this.name, this.animal);
    }
    getHappiness():number{
        showHappiness(this.happiness);
        return this.happiness;
    }
    getHunger():number{
        showHunger(this.hunger);
        return this.hunger;
    }
    tamagotchiDies(reason:string):void {
        alert (`${this.name} died of ${reason} :(`);
        window.location.reload();
    }
}

export { Tamagotchi }

