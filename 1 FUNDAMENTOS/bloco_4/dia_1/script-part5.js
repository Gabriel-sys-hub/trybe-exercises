let estadoDoProcesso = "reprovada";

switch (estadoDoProcesso) {
  case "aprovado":
    console.log("Parabéns foi Aprovado!")
    break; 

  case "lista":
    console.log("Você está na lista de espera.")
    break;

  case "reprovada":
    console.log("Você foi reprovada, tente novamente!")
    break;

  default:
    console.log("Não se aplica")
}
