const mongoose = require("mongoose");

const uri = process.env.MONGOOSE_URL;

module.exports = () =>
	mongoose
		.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("DB connected"))
		.catch((e) => console.error("Could not connect", e));
