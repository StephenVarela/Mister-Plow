class MapView extends React.Component {

  componentDidMount(e){
    console.log("DOM fully loaded and parsed");
    var mymap = L.map('mapid').setView([43.6532, -79.3832], 15);
    console.log("HEEEEELPPP")
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic3RlcGhlbnZhcmVsYSIsImEiOiJjam85a2VkaHgwMXRjM2xvMzN2bXprMDI4In0._pTIvoLYIVcIFPRQIQjKHA'
    }).addTo(mymap);



    var findButton = document.querySelector('#GeoFind')

    findButton.addEventListener('click', function(){

      var output = document.getElementById("out");

      if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
      }

      function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
        var marker = L.marker([latitude, longitude]).addTo(mymap);
      }

      function error() {
        output.innerHTML = "Unable to retrieve your location";
      }

      output.innerHTML = "<p>Locating…</p>";

      navigator.geolocation.getCurrentPosition(success, error);

    })

    }

  render() {
    return (
    <div>
      <h1>Hello Map</h1>
      <div id="mapid">
      </div>

      <p><button id="GeoFind">Show my location</button></p>
      <div id="out"></div>
    </div>
    )
  }
}
