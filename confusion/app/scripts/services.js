'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
                this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id",null, {'update':{method:'PUT' }});
                };
    
                // implement a function named getPromotions                                   
                // that returns a selected promotion.
                this.getPromotion = function(){
                    return $resource(baseURL+"promotions/:id",null, {'update':{method:'PUT' }});
                };        
                                
        }])

        .factory('corporateFactory', ['$http', 'baseURL',function($http, baseURL) {

            var corpfac = {};

            // Implement two functions, one named getLeaders,
            corpfac.getLeaders = function(){
                return $http.get(baseURL+"leadership/");
            };
            // the other named getLeader(index)
            corpfac.getLeader = function (index) {
                return $http.get(baseURL+"leadership/"+index);
            };
            // Remember this is a factory not a service
            return corpfac;    
        }])
;
