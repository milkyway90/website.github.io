const objetosc = {
    objetosc(){
        alert('objetosc to: ' + 2 * a * b + 2 * a * c + 2 * b * c)
    }
};

const pole = {
    pole(a, b, c){
        alert('pole to: ' + a * b * c);
    }
};

var choose = window.prompt('wybierz: \n pole - 1 \n objetosc - 0 \n twoj wybor: ');
var a = window.prompt('liczba a: ');
var b = window.prompt('liczba b: ');
var c = window.prompt('liczba c: ');

if(choose == '1'){
    pole.pole(a, b, c);
}else if(choose == '1'){
    objetosc.objetosc(a, b, c);
}else{
    alert('something wrong m8');
}