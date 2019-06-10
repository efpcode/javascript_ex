var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/11Ou-79_Tqlaw-7yiyvv-K7DnxbZwHjkCC5Rx4uuBTKA/edit?usp=sharing';
var dataSet ={}; 

function init() {
	Tabletop.init({
		key: publicSpreadsheetUrl,
		callback: showInfo,
		parseNumbers: true,
		simpleSheet: false
    });
};

dataSet.getData = Array();


dataSet.plotData = function(samples){
	var array = [];
	var array = Array();
	samples.forEach(function(point){
		array.push(
			[
				point.isoCode, point.CholeraDeath, point.Sanitation,
				point.Year.toString(), point.Population
			]
		);
	});
	return array
};

async function showInfo(data, tabletop) {
	try{
		data.summary.elements.forEach(function(point){
		dataSet.getData.push(point);
	
		});
	const samples = await dataSet.getData;
	const plotData = await dataSet.plotData(samples);
	plotData.unshift([
		'ID', 'Cholera Deaths', 'Basic Water Sanitation Total \%',
		'Year', 'Population']);
	const result = await plot.Plot(plotData);
	}
	catch(error){
		//failureCallback(error);
		console.log("callback failed", error);
	
	}

};
plot = {};
plot.Plot = function(plotData){

	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawSeriesChart);

	function drawSeriesChart() {


		var data = new google.visualization.arrayToDataTable(plotData
		);

		var options = {
			title: 'Top 5 Cholera Deaths vs Total Basic Water Sanitation For Countries',
			vAxis: {title: 'Basic Water Sanitation'},
			hAxis: {title: 'Cholera Deaths'},
			explorer: {actions: ['dragToZoom', 'rightClickToReset'] },
			bubble: {textStyle: {fontSize: 14}}
		};

		var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
		chart.draw(data, options);
		}
	return "Done"
};

init();


