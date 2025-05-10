let xp = 5604
let nomeDoHeroi = "Hiro"

if(xp >= 2001 && xp <= 5000){
    level = "Prata";
} else if (xp >= 5001 && xp <= 7000){
    level = "Ouro";
} else if (xp >= 7001 && xp <= 8000){
    level = "Platina";
} else if (xp >= 8001 && xp <= 9000){
    level = "Ascendente";
} else if (xp >= 9001 && xp <= 1000){
    level = "Imortal";
} else if (xp >= 10001){
    level = "Radiante";
} else{
    level = "Bronze";
}

console.log("O Herói de nome "+ nomeDoHeroi + " está no nível " +level+ " com "+xp+ " de experiência")
