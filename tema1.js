function inmultire() 
{
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2))
    {
        document.getElementById('rezultat').innerHTML = "Introduceti doua numere valide.";
    } 
    else 
    {
        var rezultat = num1 * num2;
        
        document.getElementById('rezultat').innerHTML = "Rezultatul inmultirii este: " + rezultat;
    }
}
function impartire() 
{
    
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) 
    {
        document.getElementById('rezultat').innerHTML = "Introduceti doua numere valide.";
    } 
    else 
    {
        var rezultat = num1 / num2;
        document.getElementById('rezultat').innerHTML = "Rezultatul impartirii este: " + rezultat;
    }
}
