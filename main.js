let consulta= (prompt("desea calcular un monto si/no"))

switch (consulta) {
    case "si":
        while (consulta=="si") {

    
            let nombre= (prompt("bienvenido, ¿como es su nombre?"))
            let monto= Number (prompt(nombre + ", ingrese monto a invertir"))
            let interesAnual= Number(prompt(nombre +", ingrese interes anual"))
            let anios= Number(prompt("en cuantos años desea financiar"))
            let total= monto
            
            
            
            function calculador() {
                for (let i = 0; i < anios; i++) {
                    total= total + total * interesAnual / 100}
                 
            }
            
            
            calculador()

            alert( " su financiacion es " + total)

            consulta=prompt("desea calcular un monto si/no")
            }
    

        break;
    case "no":

    default:
        alert("gracias por su visita, lo esperamos pronto")
        break;}

       alert("gracias por su compra")