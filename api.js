const axios = require('axios');

exports.message = msg => {
	axios.get(`https://simsumi.herokuapp.com/api?text=${msg}&lang=id`)
		.then(res => {
			let reply = res.data.success;
			return reply.toString();
		})
		.catch(err => console.log("Data failed to fetch"))
}

