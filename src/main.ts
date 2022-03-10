import { Tamagotchi } from "./modules/tamagotchiClass";

const playButton = document.querySelector("#play") as HTMLButtonElement;
const feedButton = document.querySelector("#feed") as HTMLButtonElement;

type TamagotchiName = 'Luna' | 'Sol' | 'Estrella';
type TamagotchiAnimal = 'dog' | 'cat' | 'hamster';

function randomName():TamagotchiName{
    let random:number = Math.floor(Math.random() * 3) + 1;
    if(random == 1) return 'Luna';
    else if (random == 2) return 'Sol';
    else return 'Estrella';
}

function randomAnimal():TamagotchiAnimal{
    let random:number = Math.floor(Math.random() * 3) + 1;
    if(random == 1) return 'dog';
    else if (random == 2) return 'cat';
    else return 'hamster';
}

const tamagotchi = new Tamagotchi(randomName(), randomAnimal());
tamagotchi.getTamagotchi();
tamagotchi.getHunger();
tamagotchi.getHappiness();

function playWithTamagotchi(): void {
    console.log('play button ' + tamagotchi.getHappiness());
    tamagotchi.makeTamagotchiHappy();
}

function feedTamagotchi(): void {
    console.log('feed button ' + tamagotchi.getHunger());
    tamagotchi.giveTamagotchiFood();
}

playButton.addEventListener('click', playWithTamagotchi);
feedButton.addEventListener('click', feedTamagotchi);



