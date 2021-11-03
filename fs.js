const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/index") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3>Ana Sayfaya hosgeldiniz</h3>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3>Bizimle Iletishimi bu adresler uzerinden kurabilirsiniz</h3>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3>Hakkimizda bilgi edinebileceginiz sayfamiza hosgeldiniz</h3>");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3>404, Not Found</h3>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
