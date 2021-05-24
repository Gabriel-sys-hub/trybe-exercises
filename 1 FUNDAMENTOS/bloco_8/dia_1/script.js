const normalReturn = (name) => { console.log('Acordando!!'); }

const secondFunction = (name) => { console.log('Bora tomar café!!'); }

const thrirdFunction = (name) => { console.log('Partiu dormir!!'); }

const doingThings = (name) => { name() };

doingThings(normalReturn);
doingThings(secondFunction);
doingThings(thrirdFunction);