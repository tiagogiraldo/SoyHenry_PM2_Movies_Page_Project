const app = require('./src/server');
const conDb = require("./src/config/conDb");

const PORT = 3000;
conDb().then((res) => {
    app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));
})
.catch((err) => console.log("DB connection error"));