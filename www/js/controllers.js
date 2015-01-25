angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('ChatsCtrl', function ($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function ($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('BigdayCtrl', function ($scope) { })

.controller('AboutUsCtrl', function ($scope) { 
  
  /*
  openFB.api({
      path: '/me',
      params: {fields: 'id,name'},
      success: function(user) {
          $scope.$apply(function() {
              $scope.user = user;
          });
      },
      error: function(error) {
          alert('Facebook error: ' + error.error_description);
      }
  });
  */

})

.controller('MapCtrl', function ($scope, $ionicLoading) {
  $scope.mapCreated = function (map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})
.controller('WishesCtrl', function ($scope, Wishes) {
  $scope.wishes = Wishes.all();
  $scope.fbLogin = function () {
    openFB.login(
        function (response) {
          if (response.status === 'connected') {
            console.log('Facebook login succeeded');
            $scope.closeLogin();
          } else {
            alert('Facebook login failed');
          }
        },
        { scope: 'email,publish_actions' });
  };
})
;
