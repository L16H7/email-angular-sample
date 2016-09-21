"use strict";

angular.module("inboxService", [])
.factory("Inbox", ["$http", function($http) {
    //create a new object
    var inboxService = {};

    inboxService.get = function(username) {
        return $http.get('/api/inbox/' + username);
    };

    inboxService.getDetail = function(id) {
        return $http.get('/api/inbox/detail/' + id);
    };

    return inboxService;
}]);