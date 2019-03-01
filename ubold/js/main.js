$(function () {

  'use strict';

  (function () {

    var aside = $('.side-nav'),

        showAsideBtn = $('.show-side-btn'),

        contents = $('#contents');

    showAsideBtn.on("click", function () {

      $("#" + $(this).data('show')).toggleClass('show-side-nav');

      contents.toggleClass('margin');

    });

    if ($(window).width() <= 767) {

      aside.addClass('show-side-nav');

    }
    $(window).on('resize', function () {

      if ($(window).width() > 767) {

        aside.removeClass('show-side-nav');

      }

    });

    // dropdown menu in the side nav
    var slideNavDropdown = $('.side-nav-dropdown');

    $('.side-nav .categories li').on('click', function () {

      $(this).toggleClass('opend').siblings().removeClass('opend');
	  
	$(this).toggleClass('active').siblings().removeClass('active');

      if ($(this).hasClass('opend')) {

        $(this).find('.side-nav-dropdown').slideToggle('fast');

        $(this).siblings().find('.side-nav-dropdown').slideUp('fast');

      } else {

        $(this).find('.side-nav-dropdown').slideUp('fast');

      }
	 

    });

    $('.side-nav .close-aside').on('click', function () {

      $('#' + $(this).data('close')).addClass('show-side-nav');

      contents.removeClass('margin');

    });

  }());

  
  // Start chart
window.onload = function () {

//Better to construct options first and then pass it as a parameter
var options = {
	animationEnabled: true,  	
	title:{
		text: "Sales of ACME based on Sales-Channels"
	},
	axisY: {
		suffix: ""
	},
	toolTip: {
		shared: true,
		reversed: true
	},
	legend: {
		reversed: true,
		verticalAlign: "center",
		horizontalAlign: "right"
	},
	data: [
	{
		type: "stackedColumn100",
		name: "WholeSale",
		showInLegend: true,
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
		{ label: "Q1", y: 44 },
		{ label: "Q2", y: 88 },
		{ label: "Q3", y: 65 },
		{ label: "Q4", y: 69 }
		]
	},
	
	{
		type: "stackedColumn100",
		name: "Inside Sales",
		showInLegend: true,
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
		{ label: "Q1", y: 19 },
		{ label: "Q2", y: 41 },
		{ label: "Q3", y: 5 },
		{ label: "Q4", y: 39 }
		]
	},
	{
		type: "stackedColumn100",
		name: "Mail Order",
		showInLegend: true,
		yValueFormatString: "#,##0\"%\"",
		dataPoints: [
		{ label: "Q1", y: 20 },
		{ label: "Q2", y: 100 },
		{ label: "Q3", y: 7 },
		{ label: "Q4", y: 43 }
		]
	}
	]
};

$("#chartContainer").CanvasJSChart(options);
}


});



$(document).ready(function(){
	$('.categories li').on('click', function(){
        //alert('clicked');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
	

});


/**
 * Set up the chart
 */
var chartData = [{
  "year": 2000,
  "cars": 1587,
  "motorcycles": 650,
  "bicycles": 121
}, {
  "year": 1995,
  "cars": 1567,
  "motorcycles": 683,
  "bicycles": 146
}, {
  "year": 1996,
  "cars": 1617,
  "motorcycles": 691,
  "bicycles": 138
}, {
  "year": 1997,
  "cars": 1630,
  "motorcycles": 642,
  "bicycles": 127
}, {
  "year": 1998,
  "cars": 1660,
  "motorcycles": 699,
  "bicycles": 105
}, {
  "year": 1999,
  "cars": 1683,
  "motorcycles": 721,
  "bicycles": 109
}, {
  "year": 2000,
  "cars": 1691,
  "motorcycles": 737,
  "bicycles": 112
}, {
  "year": 2001,
  "cars": 1298,
  "motorcycles": 680,
  "bicycles": 101
}, {
  "year": 2002,
  "cars": 1275,
  "motorcycles": 664,
  "bicycles": 97
}, {
  "year": 2003,
  "cars": 1246,
  "motorcycles": 648,
  "bicycles": 93
}, {
  "year": 2004,
  "cars": 1218,
  "motorcycles": 637,
  "bicycles": 101
}, {
  "year": 2005,
  "cars": 1213,
  "motorcycles": 633,
  "bicycles": 87
}, {
  "year": 2006,
  "cars": 1199,
  "motorcycles": 621,
  "bicycles": 79
}, {
  "year": 2007,
  "cars": 1110,
  "motorcycles": 210,
  "bicycles": 81
}, {
  "year": 2008,
  "cars": 1165,
  "motorcycles": 232,
  "bicycles": 75
}, {
  "year": 2009,
  "cars": 1145,
  "motorcycles": 219,
  "bicycles": 88
}, {
  "year": 2010,
  "cars": 1163,
  "motorcycles": 201,
  "bicycles": 82
}, {
  "year": 2011,
  "cars": 1180,
  "motorcycles": 285,
  "bicycles": 87
}, {
  "year": 2012,
  "cars": 1159,
  "motorcycles": 277,
  "bicycles": 71
}];

var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "dataProvider": chartData,
  "rotate": false,
  "marginTop": 10,
  "categoryField": "year",
  "categoryAxis": {
    "gridAlpha": 0.07,
    "axisColor": "#DADADA",
    "startOnAxis": false,
    "title": "Year",
    "guides": [{
      "category": "2001",
      "lineColor": "#CC0000",
      "lineAlpha": 1,
      "dashLength": 2,
      "inside": true,
      "labelRotation": 90,
      "label": "fines for speeding increased"
    }, {
      "category": "2007",
      "lineColor": "#CC0000",
      "lineAlpha": 1,
      "dashLength": 2,
      "inside": true,
      "labelRotation": 90,
      "label": "motorcycle fee introduced"
    }]
  },
  "valueAxes": [{
    "stackType": "regular",
    "gridAlpha": 0.07,
    "title": "Traffic incidents"
  }],
  "graphs": [{
    "id": "g1",
    "type": "column",
    "title": "Cars",
    "valueField": "cars",
    "bullet": "round",
    "lineAlpha": 0,
    "fillAlphas": 0.6,
    "balloonText": "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
  }, {
    "id": "g2",
    "type": "column",
    "title": "Motorcycles",
    "valueField": "motorcycles",
    "lineAlpha": 0,
    "fillAlphas": 0.6,
    "balloonText": "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
  }, {
    "id": "g3",
    "type": "column",
    "title": "Bicycles",
    "valueField": "bicycles",
    "lineAlpha": 0,
    "fillAlphas": 0.6,
    "balloonText": "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
  }],
  "legend": {
    "position": "bottom",
    "valueText": "[[value]]",
    "valueWidth": 100,
    "valueAlign": "left",
    "equalWidths": false,
    "periodValueText": "total: [[value.sum]]"
  },
  "chartCursor": {
    "cursorAlpha": 0
  },
  "chartScrollbar": {
    "color": "FFFFFF"
  },
  "responsive": {
    "enabled": true
  }

});

/**
 * Set up demo controls
 * These are for this particular demo purposes only. You don't need this
 * for actual responsive charts
 */
$( function () {
  $( ".resizable" ).resizable( {
    animate: true,
    animateEasing: 'swing',
    animateDuration: 250,
    resize: function( event, ui ) {
      $( '#dims' ).html( ui.size.width + 'x' + ui.size.height + 'px' );
    },
    stop: function( event, ui ) {
      setTimeout(function () { chart.invalidateSize() }, 251 );
    }
  } );
} );

function resize( dim, dir, h ) {
  /**
   * Set appropriate container size
   */
  var container = $('.resizable');
  if ( 'd' == dim )
    container.css( { 'width': dir, 'height': h });
  else if ( 'w' == dim )
    container.css( { 'width': container.width() + dir } );
  else
    container.css( { 'height': container.height() + dir } );
  $( '#dims' ).html( Math.round( container.width() ) + 'x' + Math.round( container.height() ) + 'px' );
  
  /**
   * Normally the charts will watch for window resize / orientation chang
   * events to automatically resize themselves.
   *
   * Since we're manipulating the container size manually, we need to
   * trigger chart resize event as well.
   *
   * Normally you won't have to do this.
   */
  chart.invalidateSize();
}