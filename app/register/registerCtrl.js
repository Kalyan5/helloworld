(function () {
    function registerCtrl($scope, lookupSvc) {
        var states = [{
            "name": "Telangana",
            code: "TS",
            countryCode: "IN"
}, {
            "name": "Andhra Pradesh",
            code: "AP",
            countryCode: "IN"
}, {
            "name": "NewYork",
            code: "NY",
            countryCode: "US"
}, {
            "name": "Texas",
            code: "TX",
            countryCode: "US"
}];
        $scope.user = {};
        $scope.register = function () {
            console.log($scope.user);
        };
       // $scope.countries = lookupSvc.getCountries();

        lookupSvc.getCountriesFromApi()
        .then(function(response){
            //console.log(response);
            $scope.countries = response.data.countries;
        })
        .catch(function(errorResponse){
            console.log(errorResponse);
        });
        
        $scope.loadStatesByCountry = function () {
            var countryCode = $scope.user.country.code;
            $scope.states = getStateByCountry(countryCode);
        };



        function getStateByCountry(code) {
            var stateList = _.where(states, {
                countryCode: code
            });
            return stateList;
        }
    }
    angular.module("register").controller("registerCtrl", registerCtrl);

})();
