google.charts.load('current', {
    'packages': ['table']
});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Top');
    data.addColumn('string', 'Nickname');
    data.addColumn('number', 'Score');
    data.addColumn('number', 'Max Level');
    data.addRows([
          [1, 'Mike123', 1250, 10],
          [2, 'Rockstar', 1000, 9],
          [3, 'TheBest', 980, 8],
          [4, 'BobPro', 950, 8]
        ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {
        width: '100%',
        height: '100%',
        TableColorFormat: 'red'
    });
}
