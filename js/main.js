document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('cats').onclick = partyCats


function partyPurple() {
  document.body.style.backgroundImage = "none"
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.body.style.backgroundImage = "none"
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.body.style.backgroundImage = "none"
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyCats(){
  document.body.style.backgroundImage = "url('img/spaceCat.jpg')"
  document.querySelector('h1').style.color = 'white'
}

