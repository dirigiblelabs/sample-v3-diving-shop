var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'DIVING_SHOP_EMPLOYEE_JOB_TYPES',
	'properties': [
		{
			'name': 'Id',
			'column': 'JOB_TYPE_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Name',
			'column': 'JOB_TYPE_NAME',
			'type': 'VARCHAR',
		}]
});
exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM DIVING_SHOP_EMPLOYEE_JOB_TYPES");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};