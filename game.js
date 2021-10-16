$(window).load(function(){        
  $('#myModal').modal('show');
   }); 

let resources = 0

let houses = 1

let auto = 1

let upgradesBought = 0

let bankBought = 0

let Enabled = true

function autoResources(){
setInterval(function(){ resources += auto ; drawUpdate() }, 1000)
}


let clickUpgrades = {
  1: {
    price: 30,
    multiplier: 1
  },
  2: {
    price: 50,
    multiplier: 2
  },
  3: {
    price: 70,
    multiplier: 3
  },
  4: {
    price: 90,
    multiplier: 4
  },
  5: {
    price: 110,
    multiplier: 5
  },
  6: {
    price: 130,
    multiplier: 6
  },
  7: {
    price: 160,
    multiplier: 7
  },
  8: {
    price: 200,
    multiplier: 8
  },
  9: {
    price: 240,
    multiplier: 9
  },
  10: {
    price: 280,
    multiplier: 10
  },
}

let boards = {
  1: '1house.jpg', 
  2: '2houses.jpg', 
  3: '3houses.jpg', 
  4: '4houses.jpg', 
  5: '5houses.jpg', 
  6: '6houses.jpg', 
  7: '7houses.jpg', 
  8: '8houses.jpg', 
  9: '9houses.jpg'
}
let boardup = boards[houses]

let bankUpgrades = {
  1: {
    price: 150,
    multiplier: 1
  },
  2: {
    price: 300,
    multiplier: 2
  },
  3: {
    price: 500,
    multiplier: 3
  },
  4: {
    price: 800,
    multiplier: 4
  }
}

let housesUpgrades = [ 30, 50, 70, 90, 110, 130, 160, 200, 240, 280 ]


function resourceClick(){
  if (upgradesBought == 0 && (Enabled == true)){
    let multi = clickUpgrades[1].multiplier
    resources += multi
  }
  else if  (upgradesBought == 1  && (Enabled == true)){
    let multi = clickUpgrades[2].multiplier
    resources += multi
    }
    else if  (upgradesBought == 2  && (Enabled == true)){
      let multi = clickUpgrades[3].multiplier
      resources += multi
    }
    else if  (upgradesBought == 3  && (Enabled == true)){
      let multi = clickUpgrades[4].multiplier
      resources += multi
    }
    else if  (upgradesBought == 4  && (Enabled == true)){
      let multi = clickUpgrades[5].multiplier
      resources += multi
    }
    else if  (upgradesBought == 5  && (Enabled == true)){
      let multi = clickUpgrades[6].multiplier
      resources += multi
    }
    else if  (upgradesBought == 6  && (Enabled == true)){
      let multi = clickUpgrades[7].multiplier
      resources += multi
              }
              else if  (upgradesBought == 7  && (Enabled == true)){
                let multi = clickUpgrades[8].multiplier
                resources += multi
              }
                else if  (upgradesBought == 8  && (Enabled == true)){
                  let multi = clickUpgrades[9].multiplier
                  resources += multi
                }
                else if  (upgradesBought == 9  && (Enabled == true)){
                  let multi = clickUpgrades[10].multiplier
                  resources += multi
                }
                drawUpdate()
              }
              

function changeBoard(){
  var boardUp = boards[houses]
  document.getElementById('board').innerHTML = `<img class="backboard rounded border border-5 border-light shadow" src= ${boardUp} alt=""></img>`
}

function housebutton(){
  if (houses <= 8){
    document.getElementById('buttonHouse').innerHTML = `<button type="button" onclick="buyHouse()" class="btn btn-warning fs-4 m-2">Buy a House + ${housesUpgrades[houses-1]}</button>`
  } else {(houses = 9 )  
    document.getElementById('buttonHouse').innerHTML = `<button type="button" class="btn btn-secondary m-2 fs-4" disabled data-bs-toggle="button" autocomplete="off">HOUSE MAX</button>`
  }
}

let iHouse = 0

function buyHouse(){
  let hUp = housesUpgrades[iHouse]
  if ( resources >= hUp ){
    buyHouseFinal()
    iHouse++
    resources -= hUp
  housebutton()
}
}
buyHouse()
function buyHouseFinal(){
  if (houses <= 7){
    houses++
    
    changeBoard()
  } else {(houses = 8 )  
    houses++
    
    changeBoard()
  }
  housebutton()
  
}

housebutton()

let iUpgrade = 0

function buyUpgrade(){
  let uUp = housesUpgrades[iUpgrade]
  if ( resources >= uUp && houses >= upgradesBought +1  ){
    buyUpgradeFinal()
  iUpgrade++
  resources -= uUp
  upgradebutton()
  drawUpdate()
  
}
}

function buyUpgradeFinal(){
  if (houses > upgradesBought +1 || houses == upgradesBought+1 ){
    upgradesBought++  
  }
  if (upgradesBought == 9 ){
    changeBoard()
  }
  drawUpdate()
}

function upgradebutton(){
  if(upgradesBought == 9 ){  
    document.getElementById('buttonUpgrade').innerHTML = `<button type="button" class="btn btn-secondary m-2 fs-4" disabled data-bs-toggle="button" autocomplete="off">UPGRADE MAX</button>`
  } else if (upgradesBought+1 <= 10)
  document.getElementById('buttonUpgrade').innerHTML = `<button type="button" onclick="buyUpgrade()"class="btn btn-warning btn m-2 fs-4">Upgrade Resources + ${clickUpgrades[upgradesBought+1].price}</button>` 
}
upgradebutton()

let heroPrice = {
  1: {price:200},
  2: {price:400},
  3: {price:600},
  4: {price:800}
}

let percent = {
  1: {up: '20%'},
  2: {up: '40%'},
  3: {up: '60%'},
  4: {up: '80%'},
}

let monsters = {
  1: 'monster1.png',
  2: 'monster2.png',
  3: 'monster3.png',
  4: 'monster4.png',
  5: 'monster5.png',
  6: 'monster6.png',
  7: 'monster7.png'
}
function monsterAppear() {
document.getElementById('board').innerHTML = `<img class=" backboard rounded monstersize"src= ${monsters[1]} alt=""></img>`
setTimeout( function() {monsterHeroRate1() }, 3000)
}

let heroPercentage = 1
let heroP = 1

function buttonHero(){
if (resources >= heroPrice[heroP].price && heroP < 4){
heroPercentage++
resources -= heroPrice[heroP].price
heroP++
}else{}
}

function heroButton(){
  if (heroP < 4){
  document.getElementById('goku').innerText = `Upgrade Hero + ${heroPrice[heroPercentage].price}`
} else {
  document.getElementById('goku').innerText = `HERO NV. MAX`
}
}

function heroPercentBoard(){
  document.getElementById('heroPercent').innerText = `${percent[heroPercentage].up}`
}


function monsterHeroRate1(){
  let heroRate = Math.random()
  if ( heroPercentage == 1){
    if ( heroRate < 0.2){
    document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[2]} alt=""></img>`
    } else {
      document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[3]} alt=""></img>`
      resources -= Math.floor(resources/2)
    }
  } else if (heroPercentage == 2){
     if ( heroRate < 0.4){
    document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[2]} alt=""></img>`
    } else {
      document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[3]} alt=""></img>`
      resources -= Math.floor(resources/2)
    }
  } else if (heroPercentage == 3){
    if ( heroRate < 0.6){
   document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[2]} alt=""></img>`
   } else {
     document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[3]} alt=""></img>`
     resources -= Math.floor(resources/2)
   }
  }else if (heroPercentage == 4){
    if ( heroRate < 0.8){
   document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[2]} alt=""></img>`
   } else {
     document.getElementById('board').innerHTML = `<img class=" rounded backboard monstersize"src= ${monsters[3]} alt=""></img>`
     resources -= Math.floor(resources/2)
   }
  }
}
    
  
  
  
  
 // if ( heroRate >= monsterRate){
 //   document.getElementById('board').innerHTML = `<img class=" rounded monstersize"src= ${monsters[2]} alt=""></img>`
 // } else if (heroRate < monsterRate)
 // document.getElementById('board').innerHTML = `<img class=" rounded monstersize"src= ${monsters[3]} alt=""></img>`
//}


function autoboard(){
  setTimeout(function(){ monsterAppear() ; deactivatebuttons()}, 10000)
  setTimeout(function(){ document.getElementById('board').innerHTML = `<img class="backboard rounded border border-5 border-light shadow" src= ${boardup} alt=""></img>` ; activatebuttons() }, 15000)
}

function timeout(){
  setInterval(() => {
    autoboard()
  }, 20000);
}
timeout()

function bank(){
  if ( resources >= bankUpgrades[1].price && bankBought == 0 && Enabled == true ){
    let bankMulti = bankUpgrades[1].multiplier
    auto += bankMulti
    resources -= bankUpgrades[1].price
    bankBought ++
    document.getElementById('buttonbank').innerHTML = `<button type="button" onclick="bank()" class="btn btn-warning btn m-2 fs-4">Bank Upgrade + ${bankUpgrades[2].price}</button>`
} else if (resources >= bankUpgrades[2].price && bankBought == 1 && Enabled == true ){
  let bankMulti = bankUpgrades[2].multiplier
  auto += bankMulti
  resources -= bankUpgrades[2].price
  bankBought ++
  document.getElementById('buttonbank').innerHTML = `<button type="button" onclick="bank()" class="btn btn-warning btn m-2 fs-4">Bank Upgrade + ${bankUpgrades[3].price}</button>`
} else if (resources >= bankUpgrades[3].price && bankBought == 2 && Enabled == true ){
  let bankMulti = bankUpgrades[3].multiplier
  auto += bankMulti
  resources -= bankUpgrades[3].price
  bankBought ++
  document.getElementById('buttonbank').innerHTML = `<button type="button" onclick="bank()" class="btn btn-warning btn m-2 fs-4">Bank Upgrade + ${bankUpgrades[4].price}</button>`
} else if (resources >= bankUpgrades[4].price && bankBought == 3 && Enabled == true ){
  let bankMulti = bankUpgrades[4].multiplier
  auto += bankMulti
  resources -= bankUpgrades[4].price
 bankBought ++
 document.getElementById('buttonbank').innerHTML = `<button type="button" onclick="bank()" class="btn disabled btn-secondary btn m-2 fs-4 data-bs-toggle="button" autocomplete="off"">BANK UPGRADE MAX</button>`
}
}

//setInterval(function(){ ; }, 3000);
//setTimeout(function(){ ; }, 3000);

function bankbuttonstart(){
    document.getElementById('buttonbank').innerHTML = `<button type="button" onclick="bank()" class="btn btn-warning btn m-2 fs-4">Bank Upgrade + ${bankUpgrades[1].price}</button>`
}
bankbuttonstart()

function deactivatebuttons(){
  document.getElementById('buttonHouse').innerHTML = `<button type="button" class="btn btn-secondary m-2 fs-4" disabled data-bs-toggle="button" autocomplete="off">Under Attack</button>`
  document.getElementById('buttonUpgrade').innerHTML = `<button type="button" class="btn btn-secondary m-2 fs-4" disabled data-bs-toggle="button" autocomplete="off">Under Attack</button>`
  Enabled =  false
}
function activatebuttons(){
  if(houses <= 8 && upgradesBought+1 <= 10){
  document.getElementById('buttonHouse').innerHTML = `<button type="button" onclick="buyHouse()" class="btn btn-warning btn m-2 fs-4">Buy a House + ${housesUpgrades[houses-1]}</button>`
  document.getElementById('buttonUpgrade').innerHTML = `<button type="button" onclick="buyUpgrade()"class="btn btn-warning btn m-2 fs-4">Upgrade Resources + ${clickUpgrades[upgradesBought+1].price}</button>` 
  } else if (houses = 9 && upgradesBought == 9){
    document.getElementById('buttonHouse').innerHTML = `<button type="button" class="btn btn-secondary m-2 fs-4" disabled data-bs-toggle="button" autocomplete="off">HOUSE MAX</button>`
    document.getElementById('buttonUpgrade').innerHTML = `<button type="button" class="btn btn-secondary m-2 fs-4" disabled data-bs-toggle="button" autocomplete="off">UPGRADE MAX</button>`
  }
  Enabled = true
  drawUpdate()
  changeBoard()
}

function houseWarning(){
if (upgradesBought == houses){
document.getElementById('houseWarning').innerHTML = `<p id="houseWarning" class="m-0 p-0 text-warning">Requires a new House</p>`
} else {
  document.getElementById('houseWarning').innerHTML = `<p id="houseWarning" class="m-0 p-0 text-warning">Upgrade available</p>`
}
}

autoResources()

function drawUpdate(){

  heroButton()
  heroPercentBoard()
  houseWarning()
  document.getElementById('autobonus').innerText = `Bonus per sec + ${auto}`
  document.getElementById('resources').innerText = `Resources: ${resources}`
  document.getElementById('house').innerHTML = `<i class="fas fa-home"></i> Houses: ${houses}`
  document.getElementById('upgrades').innerHTML = `<i class="fas fa-angle-double-up"></i> Upgrades: ${upgradesBought}`
  document.getElementById('currentClick').innerText = `Bonus Click + ${upgradesBought}`
}
