function showSalary(users, age) {
	let result = users.filter(users => users.age <= age).map(users => `${users.name}, ${users.balance}`).join('\n');
	if (result) return result;
}
