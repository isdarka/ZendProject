/**
 * @author isdarka
 */

$(document).ready(function(){
	
	
//	$("#filter").click(function(){
//		if($("#filterForm").valid())
//		{
//			var idUser = $("#idUser option:selected").val();
//			
//			$.ajax({
//				type: "POST",
//				url: baseUrl +  '/core/index/get-ticket-char',
//				data: {
//					idUser : idUser
//				},
//				success: function(data){
//					options.series[0].data = data.data;
//					options.title.text = "Tickets " + data.tickets;
//					$('#pieChart').highcharts(options);
//				},
//				error : function(jqXHR, textStatus, errorThrown){
//					throw textStatus;
//				}
//			});
//			
//			$.ajax({
//				type: "POST",
//				url: baseUrl +  '/core/index/get-column-char',
//				data: {
//					idUser : idUser
//				},
//				success: function(data){
//					optionsColumn.xAxis.categories = data.categories;
//					optionsColumn.series = data.series;
//					optionsColumn.title.text = "Tickets " + data.tickets;
//					$('#period').highcharts(optionsColumn);
//				},
//				error : function(jqXHR, textStatus, errorThrown){
//					throw textStatus;
//				}
//			});
//			
//			$.ajax({
//				type: "POST",
//				url: baseUrl +  '/core/index/get-column-char-customer',
//				data: {
//					idUser : idUser
//				},
//				success: function(data){
//					optionsColumn.xAxis.categories = data.categories;
//					optionsColumn.series = data.series;
//					optionsColumn.title.text = "Tickets " + data.tickets;
//					$('#customer').highcharts(optionsColumn);
//				},
//				error : function(jqXHR, textStatus, errorThrown){
//					throw textStatus;
//				}
//			});
//			
//		}
//	});
	var options = {
		    chart: {
		        renderTo: 'pieChart',
		        plotBackgroundColor: null,
		        plotBorderWidth: null,
		        plotShadow: false
		    },
		    credits: {
		    	enabled: true
		    },
		    exporting: { enabled: false } ,
		    title: {
		        text: 'Clientes'
		    },
		    tooltip: {
		        formatter: function() {
		            return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(2) +' %';
		        }
		    },
		    plotOptions: {
		        pie: {
		            allowPointSelect: true,
		            cursor: 'pointer',
		            dataLabels: {
		                enabled: true,
		                color: '#000000',
		                connectorColor: '#000000',
		                formatter: function() {
		                    return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(2) +' %';
		                }
		            }
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: '',
		        data: []
		    }]
		};
	
	$.ajax({
		type: "POST",
		url: baseUrl +  '/core/index/get-distributors',
		data: {},
		success: function(data){
			options.series[0].data = data.data;
			options.title.text = "Clientes (" + data.total + ")";
			$('#pieChart').highcharts(options);
		},
		error : function(jqXHR, textStatus, errorThrown){
			throw textStatus;
		}
	});
	
	$.ajax({
		type: "POST",
		url: baseUrl +  '/core/index/get-charges',
		data: {},
		success: function(data){
			options.series[0].data = data.data;
			options.title.text = "Cargos (" + data.total + ")";
			$('#pieChartCharge').highcharts(options);
		},
		error : function(jqXHR, textStatus, errorThrown){
			throw textStatus;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	var opts = {
			chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Cargos por Sucursal'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
            	title: {
                    text: 'Mes'
                },
                categories: []
//                plotBands: [{ // visualize the weekend
//                    from: 4.5,
//                    to: 6.5,
//                    color: 'rgba(68, 170, 213, .2)'
//                }]
            },
            yAxis: {
                title: {
                    text: 'Numero de Cargos (Ultimos 12 Meses)'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
		        data: []
		    }]
		};
	
	
	
	$.ajax({
		type: "POST",
		url: baseUrl +  '/core/index/get-charges-branches',
		data: {},
		success: function(data){
			opts.xAxis.categories = data.months;
			opts.series = data.data;
//			options.title.text = "Cargos (" + data.total + ")";
			$('#chargesBranches').highcharts(opts);
		},
		error : function(jqXHR, textStatus, errorThrown){
			throw textStatus;
		}
	});
//	
//	
//	
//	var optionsColumn = {
//			chart: {
//                type: 'column'
//            },
//            title: {
//                text: 'ASA'
//            },
//            credits: {
//		    	enabled: false
//		    },
//            subtitle: {
//                text: ''
//            },
//            exporting: { enabled: false } ,
//            xAxis: {
//                categories: []
//            },
//            yAxis: {
//                min: 0,
//                title: {
//                    text: 'Quantity'
//                }
//            },
//            tooltip: {
//                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
//                footerFormat: '</table>',
//                shared: true,
//                useHTML: true
//            },
//            plotOptions: {
//                column: {
//                    pointPadding: 0.2,
//                    borderWidth: 0
//                }
//            },
//            series: [
//            ]
//		};
//    
//	$.ajax({
//		type: "POST",
//		url: baseUrl +  '/core/index/get-column-char',
//		data: {},
//		success: function(data){
//			optionsColumn.xAxis.categories = data.categories;
//			optionsColumn.series = data.series;
//			optionsColumn.title.text = "Tickets " + data.tickets;
//			$('#period').highcharts(optionsColumn);
//		},
//		error : function(jqXHR, textStatus, errorThrown){
//			throw textStatus;
//		}
//	});
//	
//	$.ajax({
//		type: "POST",
//		url: baseUrl +  '/core/index/get-column-char-customer',
//		data: {},
//		success: function(data){
//			optionsColumn.xAxis.categories = data.categories;
//			optionsColumn.series = data.series;
//			optionsColumn.title.text = "Tickets " + data.tickets;
//			$('#customer').highcharts(optionsColumn);
//		},
//		error : function(jqXHR, textStatus, errorThrown){
//			throw textStatus;
//		}
//	});
});