import React from 'react'

function GoogleMaps() {
    const mapRef = React.useRef(null);
    React.useEffect(() => {
        let google = window.google;
        let map =mapRef.current;
        let lat = "113.6110408"; //Latitude map
        let lng = "113.6110408"; //Longitude map
        const myLatlng = new google.maps.Latlng(lat, lng);

        

    });

  return (
    <div>GoogleMaps</div>
  )
}

export default GoogleMaps