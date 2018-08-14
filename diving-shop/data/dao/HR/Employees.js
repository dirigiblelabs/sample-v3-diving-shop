var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'DIVING_SHOP_EMPLOYEES',
	'properties': [
		{
			'name': 'Id',
			'column': 'EMPLOYEE_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Name',
			'column': 'EMPLOYEE_NAME',
			'type': 'VARCHAR',
		}, {
			'name': 'JobType',
			'column': 'EMPLOYEE_JOB_TYPE',
			'type': 'INTEGER',
		}, {
			'name': 'Salary',
			'column': 'EMPLOYEE_SALARY',
			'type': 'DOUBLE',
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
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM DIVING_SHOP_EMPLOYEES");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};