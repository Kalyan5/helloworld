(
    function () {
        function productSvc($q,$http) {
         
//            this.counter = function(){
//                
//                var dfd = $q.defer();
//                setTimeout(function(){
//                    dfd.resolve(1000000);
//                },5000);
//               
//                return dfd.promise;
//                
//            };
            
            
            
             
            this.getProductsFromApi=function(){
                var dfd= $q.defer();
                $http.get("app/api/products.json")
                .then(function(res){
                    dfd.resolve(res);
                })
                .catch(function(err){
                    dfd.reject(err);
                });
                
                return dfd.promise;
            };
        }
        angular.module("product")
            .service("productSvc",
                     ["$q","$http",productSvc]);

    })();
