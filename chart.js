//const Producao = document.getElementById('Producao').getContext('2d');
const Erros = document.getElementById('Erros').getContext('2d');
let Prod = 20;
let Err = 4;
let On = 1;
let Peri = 0;
document.getElementById('Prd').innerHTML=Prod;
document.getElementById('Er').innerHTML=Err;
document.getElementById('Online').innerHTML=On;
document.getElementById('Danger').innerHTML=Peri;

/*var myChart = new Chart(Producao, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'PRODUÇÃO',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});*/

var myChart = new Chart(Erros, {
    type: 'bar',
    data: {
        labels: ['','Erro', 'Produzidos'],
        datasets: [{
            label: '',
            data: [0, Err, Prod],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});