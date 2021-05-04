const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => 15 + Math.ceil(Math.random() * (dragon.strength - 15));

const warriorDamage = () => warrior.strength + warrior.weaponDmg - Math.floor(Math.random() * 3);

function mageDamage(mage) {
  mageDam = { 
    damage: mage.intelligence + Math.round(Math.random() * mage.intelligence),
    mana: mage.mana - 15 
  }
  if (mage.mana < 15) {
    mage.mana = 0;
    mage.damage = 0;
    return 'Não possui mana suficiente'
  }
  Object.assign(mage, mageDam);
};

const dragonHp = document.getElementById('dragon-hp');
dragonHp.innerText = `HP: ${dragon.healthPoints}`;

const warriorHp = document.getElementById('warrior-hp');
warriorHp.innerText = `HP: ${warrior.healthPoints}`;

const mageHp = document.getElementById('mage-hp');
mageHp.innerText = `HP: ${mage.healthPoints}`;

const mageMp = document.getElementById('mage-mp');
mageMp.innerText = `SP: ${mage.mana}`;

const turn = document.getElementById('turn');
turn.innerHTML = 'Turno: Dragon';

const warriorAttack = document.getElementById('warrior-attack');
const mageAttack = document.getElementById('mage-attack');
const dragonAttack = document.getElementById('dragon-attack');

warriorAttack.addEventListener('click', () => {
  mageAttack.style.display = 'inline-block';
  warriorAttack.style.display = 'none';
  turn.innerHTML = 'Turno: Mage';
  warrior.damage = warriorDamage();
  dragon.healthPoints -= warrior.damage;
  dragonHp.innerText = `HP: ${dragon.healthPoints}`;
  if (dragon.healthPoints <= 0) {
    alert('Vocês derrotaram o Dragão')
  }
});

mageAttack.addEventListener('click', () => {
  dragonAttack.style.display = 'inline-block';
  mageAttack.style.display = 'none';
  turn.innerHTML = 'Turno: Dragon';
  mageDamage(mage);
  dragon.healthPoints -= mage.damage;
  mageMp.innerText = `HP: ${mage.mana}`;
  dragonHp.innerText = `HP: ${dragon.healthPoints}`;
  if (dragon.healthPoints <= 0) {
    alert('Vocês derrotaram o Dragão')
  }
});

dragonAttack.addEventListener('click', () => {
  warriorAttack.style.display = 'inline-block';
  dragonAttack.style.display = 'none';
  turn.innerHTML = 'Turno: Warrior';
  dragon.damage = dragonDamage();
  if (warrior.healthPoints > 0) {
    warrior.healthPoints -= dragon.damage;
    warriorHp.innerText = `HP: ${warrior.healthPoints}`;
  }
}); 