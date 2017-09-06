var lat, long, postcode,rows_bus,rows_tube,rows_rail,rows_walk, index;
var walk=[],bus =[],tube =[],rail=[];


$(document).ready(function() {
    'use strict';
    $("#search").click(function(event) {
    event.preventDefault();

    lat = $("#latitude").val();
    long = $("#longitude").val();
    postcode = $("#postcode").val();
    $(".success-alert").text("Hola! Data served successfully! Now you can check for the mode you wish.");
      $.get(
    "https://api.tfl.gov.uk/journey/journeyresults/" + lat + "," + long + "/to/" + postcode , {
      id : '59bfc0c7',
      key: 'a31649c9d972d1c10d263ba9695e4974',
    },

    function(data) {
      console.log(data);
      for(var a=0;a<data.journeys.length;a++) {
        var journey=data.journeys[a].legs;
          for(var b=0;b<journey.length;b++) {
                var mode_check=journey[b].mode.id;
                console.log(mode_check);
                if(mode_check == "walking"){
                  walk.push(journey[b]);
                }

                else if(mode_check == "bus"){
                  bus.push(journey[b]);
                }

                else if(mode_check == "tube"){
                  tube.push(journey[b]);
                }

                else {
                   rail.push(journey[b]);
                }
          
          }
      }
    


    $(".walking").click(function(event) {
      event.preventDefault();
      if(walk.length == 0) {
         $("#walk h3").hide();
        $(".times_records_walk").hide();
        $(".msg").show();
        $(".msg").text("Oops no walking mode to checkout.");
      }
      else {
        $(".msg").hide();
        var hi=$("#tbody_walk tr").index();
      
        for(var k=0; k<walk.length; k++) {
       
          var departure_time = walk[k].departureTime.split("T");
          var arrival_time = walk[k].arrivalTime.split("T");
          rows_walk += '<tr><td>' + (k+1) + '</td><td>' + walk[k].departurePoint.commonName +
          '</td><td>'   + departure_time[1] + '</td><td>' + departure_time[0] + '</td><td>' + walk[k].arrivalPoint.commonName +  '</td><td>' + walk[k].arrivalPoint.lat + '</td><td>' + walk[k].arrivalPoint.lon +'</td><td>' + arrival_time[1] + '</td><td>' + arrival_time[0]+ '</td><td>' +walk[k].distance + '</td><td>' + walk[k].duration + '</td></tr>';
          
        }

      
        $('#tbody_walk').html(rows_walk);
       }
      console.log(walk);
    });

    $(".bus").click(function(event) {
      event.preventDefault();
      if(bus.length == 0) {
         $("#bus h3").hide();
        $(".times_records_bus").hide();
        $(".msg").show();
        $(".msg").text("Oops no buses to checkout.");
      }
      else {
        $(".msg").hide();
        for(var k=0; k<bus.length; k++) {

          
          var departure_time = bus[k].departureTime.split("T");
          var arrival_time = bus[k].arrivalTime.split("T");
          rows_bus += '<tr><td>' + (k+1) + '</td><td>' + bus[k].departurePoint.commonName
          + '</td><td>' + bus[k].arrivalPoint.lat + '</td><td>' + bus[k].arrivalPoint.lon + '</td><td>' + departure_time[1] + '</td><td>' + departure_time[0] + '</td><td>' + bus[k].arrivalPoint.commonName + '</td><td>' + arrival_time[1] + '</td><td>' + arrival_time[0]+ '</td><td>' + bus[k].duration + '</td></tr>';
        }

        $('#tbody_bus').append(rows_bus);
        
      }
      console.log(bus);
    });

    $(".tube").click(function(event) {
      event.preventDefault();
      if(tube.length == 0) {
         $("#tube h3").hide();
        $(".times_records_tube").hide();
        $(".msg").show();
        $(".msg").text("Oops no tube to checkout.")
      }
      else {
        $(".msg").hide();
        for(var k=0; k<tube.length; k++) {
          var departure_time = tube[k].departureTime.split("T");
          var arrival_time = tube[k].arrivalTime.split("T");
        rows_tube += '<tr><td>' + (k+1) + '</td><td>' + tube[k].departurePoint.commonName +
        '</td><td>'   + departure_time[1] + '</td><td>' + departure_time[0] + '</td><td>' + tube[k].arrivalPoint.commonName +  '</td><td>' + tube[k].arrivalPoint.lat + '</td><td>' + tube[k].arrivalPoint.lon + '</td><td>' + arrival_time[1] + '</td><td>' + arrival_time[0]+ '</td><td>'  + tube[k].duration + '</td></tr>';
        }

        $('#tbody_tube').append(rows_tube);
        
      }
      console.log(tube);
    });

    $(".rail").click(function(event) {
      event.preventDefault();
      
      if(rail.length == 0) {
        $("#rail h3").hide();
        $(".times_records_rail").hide();
        $(".msg").show();
        $(".msg").text("Oops no rail to checkout.")
      }
      else {
        $(".msg").hide();
        for(var k=0; k<rail.length; k++) {
          var departure_time = rail[k].departureTime.split("T");
          var arrival_time = rail[k].arrivalTime.split("T");
          rows_rail += '<tr><td>' + (k+1) + '</td><td>' + rail[k].departurePoint.commonName +
        '</td><td>'   + departure_time[1] + '</td><td>' + departure_time[0] + '</td><td>' + rail[k].arrivalPoint.commonName +  '</td><td>' + rail[k].arrivalPoint.lat + '</td><td>' + rail[k].arrivalPoint.lon + '</td><td>' + arrival_time[1] + '</td><td>' + arrival_time[0]+ '</td><td>' + rail[k].duration + '</td></tr>';
         }

        $('#tbody_rail').append(rows_rail);
        
      }
      console.log(rail);
    });
  }
);

  $(document).ajaxError(function(){
    $(".success-alert").text("The request fails, there is no matching data available to this request at this moment");
  });

  });

});

  



