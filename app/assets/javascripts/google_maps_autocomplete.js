function onPlaceChanged() {
  var place = this.getPlace();
  var components = getAddressComponents(place);

  var flatAddress = document.getElementById('broker_address');
  flatAddress.blur();
  flatAddress.value = components.address;

}

function getAddressComponents(place) {
  // If you want lat/lng, you can look at:
  // - place.geometry.location.lat()
  // - place.geometry.location.lng()

  if (window.console && typeof console.log === "function") {
  }

  var street_number = null;
  var route = null;
  var zip_code = null;
  var city = null;
  var country_code = null;
  for (var i in place.address_components) {
    var component = place.address_components[i];
    for (var j in component.types) {
      var type = component.types[j];
      if (type === 'street_number') {
        street_number = component.long_name;
      } else if (type === 'route') {
        route = component.long_name;
      } else if (type === 'postal_code') {
        zip_code = component.long_name;
      } else if (type === 'locality') {
        city = component.long_name;
      } else if (type === 'postal_town' && city === null) {
        city = component.long_name;
      } else if (type === 'country') {
        country_code = component.short_name;
      }
    }
  }

  return {
    address: street_number === null ? route : (street_number + ' ' + route + ' ' + zip_code + ' ' + city),
  };
}

document.addEventListener("DOMContentLoaded", function() {
  var flatAddress = document.getElementById('broker_address');

  if (flatAddress) {
    var autocomplete = new google.maps.places.Autocomplete(flatAddress, { types: ['geocode'] });
    google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
    google.maps.event.addDomListener(flatAddress, 'keydown', function(e) {
      if (e.key === "Enter") {
        e.preventDefault(); // Do not submit the form on Enter.
      }
    });
  }
});
