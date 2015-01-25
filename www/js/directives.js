angular.module('starter.directives', [])
.directive('map', function () {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {
        var theLocation = new google.maps.LatLng(8.5039814, 124.6133038);
        var mapOptions = {
          center: theLocation,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map($element[0], mapOptions);

        var marker = new google.maps.Marker({
          position: theLocation
        });

        marker.setMap(map);

        $scope.onCreate({ map: map });

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});