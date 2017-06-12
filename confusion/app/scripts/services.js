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
            return $resource(baseURL+"promotions/:id",null, null);
        };    
                            
    }])

    .factory('corporateFactory', ['$resource', 'baseURL',function($resource, baseURL) {

        var corpfac = {};

        // Implement two functions, one named getLeaders,
        corpfac.getLeaders = function(){
            return $resource(baseURL+"leadership/:id",null, null);
        };
        // the other named getLeader(index)
        corpfac.getLeader = function () {
            return $resource(baseURL+"leadership/:id",null, null);
        };
        // Remember this is a factory not a service
        return corpfac;    
    }])

    .factory('feedbackFactory', ['$resource', 'baseURL',function($resource, baseURL) {
        
        var feedfac = {};

        feedfac.postFeedback = function () {
            return $resource(baseURL+"feedback/");
        };
        return feedfac;

    }])
;
