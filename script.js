var btnCalcula = document.getElementById('calcular');

btnCalcula.addEventListener('click', function(){
    var planet = document.getElementById('planeta').value;
    var peso = parseFloat(document.getElementById('peso').value)
    var p1 = document.getElementById("pesoPessoa");    

    if(planet == "me"){
        var v = ((peso/10)*0,37); 
        p1.innerHTML = v
    } 
    if(planet == "ve"){
        v = ((peso/10)*0,88); 
        p1.innerHTML = v
    } 
    if(planet == "ma"){
        v = ((peso/10)*0,38);
        p1.innerHTML = v
    } 
    if(planet == "ju"){
        v = ((peso/10)*2,64); 
        p1.innerHTML = v
    } 
    if(planet == "sa"){
        v = ((peso/10)*1,15); 
        p1.innerHTML = v
    } 
    if(planet == "ur"){
        v = ((peso/10)*1,17);
        p1.innerHTML = v
    }
    
});
