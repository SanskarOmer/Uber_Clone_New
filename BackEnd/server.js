const app = require('./app');
const http = require('http');
const port = process.env.PORT || 8080;
const httpServer = http.createServer(app);


httpServer.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
