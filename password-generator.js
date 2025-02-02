const generator = require('generate-password');

const password = generator.generate({
	length: 10,
	numbers: true,
    symbols:true,
    uppercase:true,
});

module.exports=password;

