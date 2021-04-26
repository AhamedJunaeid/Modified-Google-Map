function initMap(){


map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 23.807251782401035, lng: 90.36357639684208},
  zoom:5,
  mapId: '9ac375eb80026c49'
});


//name,
//Ltitude,
//Longitude,
//Image Url,
//ScaledSize Width,
//scaledSize Height



 const markers = [
   [
     "Junaeid's Castle",
     23.807251782401035,
     90.36357639684208,
     "mystica-Castle-color.svg",
     38,
     31
],
[
  "Adnan's House",
  23.809958612813762,  //23.809958612813762, 90.36899507284119
  90.36899507284119,
  "village-house.svg",
  20,
  15

],
[
  "Salin's House",
  23.836370713609966, //23.836370713609966, 90.36740566430267
  90.36740566430267,
  "Castle-icon.svg",
  1,
  1
],
[
  "Sourov's House",
  23.79124161546062,  //23.79124161546062, 90.37535332567766
  90.37535332567766,
  "nicubunu-Castle.svg",
  10,
  10
]
 ];

 for (let i = 0; i<markers.length;i++){
   const currMarker = markers[i];
   const marker = new google.maps.Marker({
    position: { lat: currMarker[1], lng:currMarker[2] },
    map,
    title: currMarker[0],
    icon:
    {
      url:currMarker[3],
      sacledSize: new google.maps.Size (currMarker[4],currMarker[5])
    },
    animation: google.maps.Animation.DROP
  });
  
  const infowindow = new google.maps.InfoWindow({
    content:currMarker[0],
  });
  
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });


 }




}

//23.807251782401035, 90.36357639684208