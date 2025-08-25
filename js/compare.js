
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    };
} ;

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    };
    return -1;
};

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length >= 2){
                alert("Só é possível comparar no máximo 2 carros.");
                el.checked = false;
                return;
            };
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            };
        } else {
          const index = GetCarArrPosition(carArr, carClass);
          if (index !== -1) {
            carArr.splice(index, 1);
            };
        };
        botaoComparar();
    } else {
        throw "You need set a Car Class";
    };
};

function botaoComparar() {
    const compareBtm = document.querySelector('button[onclick="ShowCompare()"]');

    if (carArr.length === 2) {
        compareBtm.disabled = false;
        compareBtm.style.opacity = 1;
        compareBtm.style.cursor = "pointer"
    } else {
        compareBtm.disabled = true;
        compareBtm.style.opacity = 0.5;
        compareBtm.style.cursor = 'not-allowed';
    };
};

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    };

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
    document.body.classList.add("compare-open");
};

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    document.body.classList.remove("compare-open");
};

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++){
        let car = carArr[i];
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" style="max-width:200px">`;
        document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        document.getElementById(`compare_preco_${i}`).innerText = `R$ ${car.preco.toLocaleString('pt-BR')}`;
    };
};

document.addEventListener('DOMContentLoaded', function(){
    botaoComparar();
});