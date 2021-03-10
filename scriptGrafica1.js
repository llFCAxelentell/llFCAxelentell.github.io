google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
          ['Level', 'Prom_Score'],
          ['1', 40],
          ['2', 100],
          ['3', 90],
          ['4', 200]
        ]);

    var options = {
        title: 'Level vs Prom Score Users',
        curveType: 'function',
        legend: {
            position: 'bottom'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
