var ctx = document.getElementById('type_pub').getContext('2d');

var chart = new Chart(ctx, {
    type: 'doughnut',
    data:{
        labels: ['Telecommunication', 'E-health', 'Wireless Sensor Network (WSN)', 'Cloud Computing', 'Teaching', 'Internet of Things (IoT)', 'Blockchain'],
        datasets:[{
            data: [5, 2, 2, 3, 3, 8, 1],
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", '#87CEEB', 'orange']
        }]
    },
    options:{
        title:{
            display: true,
            text: 'Research Topics',
            fontSize: 24,
            fontStyle: 'bold',
            fontColor: 'black'
        }
    }
});
