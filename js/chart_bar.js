var ctx = document.getElementById('publication').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'Number of Publication',
            pointStyle:'circle',
            fill: false,
            backgroundColor: ['#6959CD', 'orange', '#87CEEB', 'white', 'white', '#E6E6FA', '#FF6347', '#00FFFF', '#BDB76B'],
            data: [2, 1, 2, 0, 0, 1, 7, 9, 3]
        }]
    },

    // Configuration options go here
    options: 
    {
        legend:{display: false},
        title:{
            display: true, 
            text: 'Publication by Year', 
            fontStyle: 'bold',
            fontColor:'black', 
            fontSize: 24},
    }
        
    });