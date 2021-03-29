let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  info2: {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
  }
};

console.log("Bem vinda(o) " + info.personagem);

//info["recorrente"] = "sim";

//for (let index in info) {
//  console.log(index + index);
//}

for (let index in info) {
 console.log(info[index] + ' e ' + info.info2[index])
}