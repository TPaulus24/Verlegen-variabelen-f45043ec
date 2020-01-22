function myFunctionBereken() {
    let diameter = document.getElementById("diameter").value;
    let perimeter = (Math.PI * diameter).toFixed(2);
    let surface = (0.25 * Math.PI * Math.pow(diameter, 2)).toFixed(2);
    document.getElementById("uitkomst").innerHTML = "De omtrek van de cirkel is " + perimeter + "<br>De oppervlakte van de cirkel is " + surface;
}