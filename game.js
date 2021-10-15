let resources = 0

let houses = 1

let upgradesBought = 0

let clickUpgrades = {
  1: {
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  2: {
    price: 200,
    quantity: 0,
    multiplier: 2
  },
  3: {
    price: 300,
    quantity: 0,
    multiplier: 3
  },
  4: {
    price: 400,
    quantity: 0,
    multiplier: 4
  },
};
let heroUpgrades = {
  1: {
    price: 200,
    quantity: 0,
    multiplier: 1
  },
  2: {
    price: 200,
    quantity: 0,
    multiplier: 1
  },
  3: {
    price: 200,
    quantity: 0,
    multiplier: 1
  },
}

let automaticUpgrades = {
  coinsUpgrade: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  resourceUpgradeAuto: {
    price: 100,
    quantity: 0,
    multiplier: 1
  }
};

function resourceClick(){
  if (upgradesBought == 0){
  let multi = clickUpgrades[1].multiplier
  resources += multi
  }
  else if  (upgradesBought == 1){
    let multi = clickUpgrades[2].multiplier
    resources += multi
    }
    else if  (upgradesBought == 2){
      let multi = clickUpgrades[3].multiplier
      resources += multi
      }
      else if  (upgradesBought == 3){
        let multi = clickUpgrades[4].multiplier
        resources += multi
        }
drawUpdate()
}

function buyHouse(){
  houses++
  drawUpdate()
}

function buyUpgrade(){
if (houses >= upgradesBought +1){
  upgradesBought++
 }
  drawUpdate()
}
  







function drawUpdate(){
  document.getElementById('resources').innerText = `Resources: ${resources}`
  document.getElementById('house').innerText = `Houses: ${houses}`
  document.getElementById('upgrades').innerText = `Upgrades: ${upgradesBought}`
}

drawUpdate()
















