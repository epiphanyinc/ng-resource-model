(function (angular) {
    'use strict';

    angular.module('ngyResourceModel', [])
        .factory('ngyResourceModel', resourceModel)

    resourceModel.$inject = ['$resource'];

    function resourceModel($resource) {
        return function (conf) {
            var actions = angular.extend({
                get: {
                    method: 'GET'
                },
                query: {
                    method: 'GET',
                    isArray: true
                },
                put: {
                    method: 'PUT'
                },
                post: {
                    method: 'POST'
                },
                delete: {
                    method: 'DELETE'
                }
            }, conf.actions);

            return $resource(conf.url || '', conf.params, actions);
        };
    }
} (window.angular));
