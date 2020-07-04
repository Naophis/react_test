const express = require("express");

const app = express();

// publicにAngularをビルドした媒体を置く
app.use('/', express.static('res'));

app.listen(3000, () => console.log(`[${new Date()}] server, startup`));