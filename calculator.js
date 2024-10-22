function hitung (operation){
    var angka1 = parseFloat (document.getElementById('angka1').value);
    var angka2 = parseFloat (document.getElementById('angka2').value);
    var jawaban;
    
    if (isNaN (angka1) || isNaN (angka2)){
        jawaban = "NaN";
    }else {
        if(operation === 'pertambahan'){
            jawaban = angka1 + angka2;
        }
        else if(operation === 'pengurangan'){
            jawaban = angka1 - angka2;
        }
        else if(operation === 'perkalian'){
            jawaban = angka1 * angka2;
        }
        else if(operation === 'pembagian'){
            jawaban = angka1 / angka2;
        }

    }
    document.getElementById("hasil").value=  jawaban;
 }