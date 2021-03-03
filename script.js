function procesarIMC() {
    var peso = document.getElementById("peso").value;
    var estatura = document.getElementById("estatura").value;
    var imc = peso / (estatura * estatura);

    if (peso == "" || estatura == "") {
        document.getElementById("IMC").innerHTML = "Faltan uno o más datos";
    } else {
        document.getElementById("IMC").innerHTML = "IMC Calculado";
        document.getElementById("dato").innerHTML = imc;

        var texto = "";

        if (imc <= 18.5) {
            texto = "Bajo de peso";
        } else if (imc > 18.5 && imc <= 24.9) {
            texto = "Peso saludable";
        } else if (imc > 25 && imc <= 29.9) {
            texto = "Sobrepeso ";
        } else if (imc > 30 && imc <= 34.9) {
            texto = "Obesidad grado 1";
        } else if (imc > 35 && imc <= 39.9) {
            texto = "Obesidad grado 2";
        } else if (imc < 40) {
            texto = "Obesidad mórbida";
        }

        document.getElementById("descripcion").innerHTML = texto;
    }

}
