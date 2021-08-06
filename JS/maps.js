'use strict';


function initMap(){
    // Point de centrage de la map
    var options = {
      zoom:7.4,
      center:{lat:46.9,lng:8}
    }

    // Nouvelle map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Zone des marqueurs
    var markers = [
      {
        coords:{lat:47.54483413696289,lng:7.589282035827637},
        content:'<p>conetCom AG, 4053 Basel</p>'
      },
      {
        coords:{lat:46.2052469,lng:6.100305},
        content:'<p>conetCom SA, 1219 Le Lignon</p>'
      },
      {
        coords:{lat:46.237762451171875,lng:7.375158786773682},
        content:'<p>conetCom SA, 1950 Sion</p>'
      },
      {
        coords:{lat:47.3971198,lng:8.6034326},
        content:'<p>conetCom ZH, 8600 Dübendorf</p>'
      }
    ];

    // Zoom 
    for(var i = 0;i < markers.length;i++){
      // Ajoute marqueur
      addMarker(markers[i]);
    }

    // Fonction du marqueur
    function addMarker(props){
      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
      });

      // Afficher le contenu
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      }
    }
  }