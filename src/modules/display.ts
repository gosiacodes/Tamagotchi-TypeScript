const myTamagotchi = document.querySelector("#tamagotchi") as HTMLElement;
const happiness = document.querySelector("#hapiness") as HTMLElement;
const hunger = document.querySelector("#hunger") as HTMLElement;

function showMyTamagotchi(name:string, animal:string):void{
    myTamagotchi.innerText = `Tamagotchi: ${name} - ${animal}`;
}

function showHappiness(num:number):void{
    happiness.innerText = `Happiness: ${num}`;
}

function showHunger(num:number):void{
    hunger.innerText = `Hunger: ${num}`;
}

export { showMyTamagotchi, showHappiness, showHunger }