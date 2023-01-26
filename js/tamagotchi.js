const maxWater = 100;
const maxLight = 100;
const maxFertilizer = 100;

class Tamagotchi{
    constructor(name){
        this.name = name;
        this.water = maxWater;
        this.sunshine = maxLight;
        this.fertilizer = maxFertilizer;
        this.age = 0;
        this.score = 0;
    }
}
let inputName = prompt("Please, enter a name for your plant:", "")
const newPlant = new Tamagotchi(inputName)


//buttons declared
const waterButton = document.querySelector("#water-button")
const lightButton = document.querySelector("#light-button")
const ferButton = document.querySelector("#fer-button")

//scores declared
const mainScore = document.querySelector("#score")
const waterScore = document.querySelector("#water")
const lightScore = document.querySelector("#daylight")
const ferScore = document.querySelector("#fertilizer")
const ageScore = document.querySelector("#age")




let day = 10

addWater=()=>{
    this.water +=10
    document.body.style.backgroundImage = "url(/images/night.jpg)"
}

lightSwitch=()=>{
    this.sunshine +=10
    document.body.style.backgroundImage = "url(/images/day.jpg)"
}
addFertilizer =()=> {
	this.fertilizer+=10 
}

newPlant.clock = function() {
    this.water-=1
    this.sunshine-=1
    this.fertilizer-=1
    this.age+=1
}
//add event listeners to each button + call functions for each button
waterButton.addEventListener("click", () =>{
    return this.addWater()
})
lightButton.addEventListener("click", () =>{
    return this.lightSwitch()
})
ferButton.addEventListener("click", () =>{
    return this.addFertilizer()
})


changeTamagotchiPhase=()=>{
    if(newPlant.age.innerHTML <= 5){
        document.body.style.display ="url(/images/empty.jpg)"
    }else if(newPlant.age.innerHTML > 5 && newPlant.age.innerHTML <= 10){
        document.body.style.display ="url(/images/atart-growing.jpg)"
    }else if(newPlant.age.innerHTML > 5 && newPlant.age.innerHTML <= 10){
        document.body.style.display = "url(/images/growing-plant.jpg)"
    }else if(newPlant.age.innerHTML > 10 && newPlant.age.innerHTML <= 20){
        document.body.style.display = "url(/images/grown-plant.jpg)"
    }
}
changeTamagotchiPhase()
    
let waterCount
let lightCount
let fertilizerCount
let score = 0
let age = 0

play()
let playUpdate = setInterval(play, 100 * day)

function play(){

	waterCount = (newPlant.water -= 10);
	lightCount = (newPlant.sunshine -= 4);
	fertilizerCount = (newPlant.fertilizer -=3);

	

	
		
	if ((waterCount <= 0) || (lightCount <= 0) || (fertilizerCount <= 0)) {
		waterCount = 0;
		lightCount = 0;
		fertilizerCount = 0;
		clearInterval(playUpdate);
		alert(`Your score is ${score}`)
	}

    score++
    age+=1
    mainScore.innerHTML = score
	waterScore.innerHTML = waterCount
	lightScore.innerHTML = lightCount
	ferScore.innerHTML = fertilizerCount
    ageScore.innerHTML = age
   
	newPlant.clock()
}

