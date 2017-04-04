var app = angular.module('petitsMonstres', ['ngRoute', 'ngLocalize', 'slick']);

app.value('localeConf', {
    basePath: 'lang',
    defaultLocale: 'fr-FR',
    sharedDictionary: 'common',
    fileExtension: '.lang.json',
    persistSelection: true,
    cookieName: 'COOKIE_LOCALE_LANG',
    observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
    delimiter: '::'
});

app.value('localeSupported', [
    'fr-FR',
    'jp-JP'
])

/* Controllers */
// app.controller('MainCtrl', function ($scope, $location, locale/*, localeEvents*/) {
app.controller('MainCtrl', function ($scope, $location, $timeout, locale) {
	/*$scope.strings = {};
	locale.ready('common').then(function() {
		$scope.strings.name = locale.getString('common.name');
	});*/

	$scope.locale = locale;
	// $scope.setLocale = $scope.locale.setLocale;


	$scope.setLocale = function Test(loc) {
		$scope.locale.setLocale(loc);

		// $scope.locale.setLocale = $scope.locale.getLocale();
		// $scope.setLocale = loc;
		console.log("Take from JSON:" + $scope.locale);
		console.log("Take from JSON:" + locale.getString('common.about', false));
		var line1 = $scope.locale.getString('common.typed-line-1');
		var line2 = $scope.locale.getString('common.typed-line-2');
		var line3 = $scope.locale.getString('common.typed-line-3');
		var typedValues = [line1, line2, line3];

		var typedValue = [];
		typedValue['jp-JP'] = ["おばんざい", "家庭料理", "多国籍料理"];
	    typedValue['fr-FR'] = ["Cuisine JP", "Cuisine FR", "Espace"];
	    typedValue['en-US'] = ["Japanese", "Western", "Espace"];

		// startTyped(typedValue[$scope.locale.getLocale()]);
	}

  $scope.baseImagesUrl = 'images/';
  $scope.baseImagesUrlRamses = 'ramses/';
  $scope.baseImagesUrlFreddy = 'freddy/';
  $scope.baseImagesUrlUlala = 'ulala/';

  $scope.selectedImages = [];

  $scope.displayRamses = function() {

    $scope.selectedImages = [
      { id: 1, name:'Freddy1', url: $scope.baseImagesUrl + $scope.baseImagesUrlRamses + '2014-06-19 (1).jpg' },
      { id: 1, name:'Freddy1', url: $scope.baseImagesUrl + $scope.baseImagesUrlRamses + '2014-06-19.jpg' },
    ];

    $scope.rebuildSlick();
  };

  $scope.displayFreddy = function() {

    $scope.selectedImages = [
      { id: 1, name:'Freddy1', url: $scope.baseImagesUrl + $scope.baseImagesUrlFreddy + 'IMG_0968.JPG' },
      { id: 2, name:'Freddy2', url: $scope.baseImagesUrl + $scope.baseImagesUrlFreddy + 'IMG_0974.JPG' },
      { id: 3, name:'Freddy3', url: $scope.baseImagesUrl + $scope.baseImagesUrlFreddy + 'IMG_0982.JPG' },
      { id: 4, name:'Freddy4', url: $scope.baseImagesUrl + $scope.baseImagesUrlFreddy + 'IMG_0989.JPG' },
      { id: 5, name:'Freddy5', url: $scope.baseImagesUrl + $scope.baseImagesUrlFreddy + 'IMG_1005.JPG' },
      { id: 6, name:'Freddy6', url: $scope.baseImagesUrl + $scope.baseImagesUrlFreddy + '2016-07-27.jpg' },
    ];

    $scope.rebuildSlick();
  };

  $scope.displayUlala = function() {
    $scope.selectedImages = [
      { id: 1, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0138.JPG' },
      { id: 2, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0139.JPG' },
      { id: 3, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0206.JPG' },
      { id: 4, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0235.JPG' },
      { id: 5, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0281.JPG' },
      { id: 6, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0328.JPG' },
      { id: 7, name:'Ulala', url: $scope.baseImagesUrl + $scope.baseImagesUrlUlala + 'IMG_0357.JPG' },
    ];

    $scope.rebuildSlick();
  };

  $scope.rebuildSlick = function() {
    $scope.numberLoaded = false; // disable slick
    $timeout(function () {
      $scope.numberLoaded = true;

      $scope.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: false,
        autoplaySpeed: 3000,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
              console.log("milka");
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
              console.log("milka");
            }
        }
    };
    }, 1000);
  };



  $scope.numberLoaded = true;

  $scope.displayFreddy();

	// $scope.setLocale('jp-JP');


	/*$scope.$on(localeEvents.localeChanges, function() {
		locale.ready('common').then(function(){
			$scope.strings.name = locale.getString('common.name');
		})
	});*/

	/*$scope.setRoute = function(route) {
		$location.path(route);
	};*/

  /*$(window).resize(function() {
    $('.js-slider').slick('resize');
  });

  $(window).on('orientationchange', function() {
    $('.js-slider').slick('resize');
  });*/

});
