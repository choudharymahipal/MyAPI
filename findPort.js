const net = require("net");

function findAvailablePort(startPort) {
  const server = net.createServer();
  return new Promise((resolve, reject) => {
    server.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
    server.on("error", () => resolve(findAvailablePort(startPort + 1)));
  });
}

findAvailablePort(3000).then((port) => {
  console.log(`Available port found: ${port}`);
});