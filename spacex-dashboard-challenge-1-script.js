// colours
var red = '#E51736';
var blue = '#28B3FF';
var green = '#00CC61';
var black = '#0D0B0F';
var white = '#FFF';

// date changer
var dateHere = document.getElementById('date');
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
dateHere.innerHTML = d + "/" + m + "/" + y;

// atmosphere doughnut chart
var atmosphere = document.getElementById('atmosphereChart').getContext('2d');
var atmospherePieChart = new Chart(atmosphere, {
    type: 'doughnut',
    data: {
        labels: ['42%', '58%'],
        datasets: [{
            borderWidth: 0,
            backgroundColor: [blue, red],
            borderAlign: 'center',
            weight: 15,
            data: [42, 58]
        }]
    },
    options: {
        legend: {
            display: false
        },
        data: {
            display: false
        },
        tooltips: {
            enabled: false,
            backgroundColor: white,
            displayColors: false,
            cornerRadius: 15,
            yPadding: 15,
            xPadding: 15,
            bodyFontSize: 30,
            bodyFontColor: black,
            caretSize: 0,
        },
        callbacks: {
            
        }
    }
});

// speed over time chart

var speedOverTime = document.getElementById('speedOverTimeChart').getContext('2d');
var speedOverTimeChart = new Chart(speedOverTime, {
    type: 'line',
    data: {
        labels: ['0', '', '', '', '10.000'],
        datasets: [{
            data: [0, 20, 70, 200, 500],
            fill: false,
            borderColor: blue,
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        legend: {
            display: false
        },
        elements:{ 
            line: {
                tension: 0.5,
                cubicInterpolationMode: 'monotone',
                borderWidth: 5,
            },
            point: {
                backgroundColor: blue,
                borderColor: black,
                borderWidth: 0,
                radius: 0
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 20,
                    fontColor: white
                }
            }]
        }
    }
});


// gravity over time chart

var gravityOverTime = document.getElementById('gravityOverTimeChart');
var gravityOverTimeChart = new Chart(gravityOverTime, {
    type: 'line',
    data: {
        labels: ['0', '', '', '', '', '', '10.000'],
        datasets: [{
            data: [5.8, 5.8, 5.7, 5.5, 4.5, 3, 0],
            fill: false,
            borderColor: blue,
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        elements:{ 
            line: {
                tension: 0.5,
                cubicInterpolationMode: 'monotone',
                borderWidth: 5,
            },
            point: {
                backgroundColor: blue,
                borderColor: black,
                borderWidth: 0,
                radius: 0
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 20,
                    fontColor: white
                }
            }]
        }
    }
});

// food left chart

var foodLeft = document.getElementById('foodLeftChart');
var foodLeftChart = new Chart(foodLeft, {
    type: 'doughnut',
    data: {
        labels: ['36%', '58%'],
        datasets: [{
            borderWidth: 0,
            backgroundColor: [black, green],
            borderAlign: 'center',
            weight: 15,
            data: [58, 42]
        }]
    },
    options: {
        legend: {
            display: false
        },
        data: {
            display: false
        },
        tooltips: {
            enabled: false,
            backgroundColor: white,
            displayColors: false,
            cornerRadius: 15,
            yPadding: 15,
            xPadding: 15,
            bodyFontSize: 30,
            bodyFontColor: black,
            caretSize: 0,
        },
        responsive: true
    }
});


// water left chart

var waterLeft = document.getElementById('waterLeftChart');
var waterLeftChart = new Chart(waterLeft, {
    type: 'doughnut',
    data: {
        labels: ['36%', '58%'],
        datasets: [{
            borderWidth: 0,
            backgroundColor: [black, blue],
            borderAlign: 'center',
            weight: 15,
            data: [42, 58]
        }]
    },
    options: {
        legend: {
            display: false
        },
        data: {
            display: false
        },
        tooltips: {
            enabled: false,
            backgroundColor: white,
            displayColors: false,
            cornerRadius: 15,
            yPadding: 15,
            xPadding: 15,
            bodyFontSize: 30,
            bodyFontColor: black,
            caretSize: 0,
        },
        responsive: true
    }
});


// fuel left chart // final chart

var fuelLeft = document.getElementById('fuelLeftChart');
var fuelLeftChart = new Chart(fuelLeft, {
    type: 'doughnut',
    data: {
        labels: ['36%', '58%'],
        datasets: [{
            borderWidth: 0,
            backgroundColor: [black, red],
            borderAlign: 'center',
            weight: 15,
            data: [67, 43]
        }]
    },
    options: {
        legend: {
            display: false
        },
        data: {
            display: false
        },
        tooltips: {
            enabled: false,
            backgroundColor: white,
            displayColors: false,
            cornerRadius: 15,
            yPadding: 15,
            xPadding: 15,
            bodyFontSize: 30,
            bodyFontColor: black,
            caretSize: 0,
        },
        responsive: true
    }
});