(function () {
    angular.module('ngResourceModel', [])
        .factory('ngResourceModel', resourceModel)

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

            var _resource = $resource(conf.url || '', conf.params, actions);

            _resource.findById = function (id) {
                return _resource.get({ id: id });
            };

            return _resource;
        };
    }
} ());
