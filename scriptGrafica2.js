google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
          ['Nivel', 'Compuestos hechos', 'Compuestos vendidos ', 'Elementos comprados', 'Dinero', 'Deuda'],
          ['1', 165, 938, 522, 998, 450],
          ['2', 135, 1120, 599, 1268, 288],
          ['3', 157, 1167, 587, 807, 397],
          ['4', 139, 1110, 615, 968, 215],
          ['5', 136, 691, 629, 1026, 366]
        ]);

    var options = {
        title: 'Promedio de indicadores por nivel',
        vAxis: {
            title: 'Indicadores'
        },
        hAxis: {
            title: 'Nivel'
        },
        seriesType: 'bars',
    
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
