let express = require("express");
let app = express();
let port = 3000;

app.use(express.static('./src'));

app.listen(port, function () {
  console.log(`Executando na porta http://localhost:${port}`);
});