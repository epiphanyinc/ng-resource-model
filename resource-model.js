module.exports = ResourceModel;

ResourceModel.$inject = ['$resource'];

function ResourceModel($resource){
	return {
		create: create
	};

	function create(conf){
		var actions = angular.extend({
			get: {
				method: 'GET'
			},
			query:{
				method: 'GET',
				isArray: true
			},
			put:{
				method: 'PUT'
			},
			post: {
				method: 'POST'
			},
			delete:{
				method: 'DELETE'
			}
		}, conf.actions);

		return $resource(conf.url || '', conf.params || {}, actions);
	}
}