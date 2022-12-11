const { port } = require('config-keys');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors({ origin: '*' }));
console.log(path.join(process.cwd(), 'build'));
app.use('*', express.static(path.join(process.cwd(), 'build')));

const httpServer = require('http').createServer(app);

httpServer.listen(port, () => {
	console.info(`Server is listening on port ${port}`);
});
