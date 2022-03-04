const app = require("./app");
require("./db/db")();

app.listen(app.get("port"), () => {
	console.log(`Server on port ${app.get("port")}`);
});
