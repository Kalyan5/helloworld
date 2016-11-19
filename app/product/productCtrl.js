(function () {

    function productCtrl($scope, productSvc, $rootScope) {
        /*  productSvc.counter()
              .then(function (response) {
              $scope.counter = response;
          }).catch(function(response){
              $scope.counter = response;
          });
          $scope.productList = productSvc.getProducts();*/
        productSvc.getProductsFromApi()
            .then(function (res) {
                $scope.products = res.data.products;
            })
            .catch(function (errorResp) {
                $scope.showError = true;
            });

        $scope.addToCart = function (item) {
            item.selected = true;
            $rootScope.$broadcast("ITEM_ADDED", {
                product: item 
            });
        };
        $scope.removeFromCart = function (item) {
            item.selected = false;
            $rootScope.$broadcast("ITEM_REMOVED", {
                product: item
            });


        };

    }
    angular.module('product')
        .controller("productCtrl", ["$scope", "productSvc", "$rootScope", productCtrl])
})();
