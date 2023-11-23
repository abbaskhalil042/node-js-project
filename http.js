const http = require("http");

//

const fs = require("fs");

const path = require("path");

const PORT = process.env.PORT || 3000;

// const app = http.createServer((req, res) => {
//     console.log(req.url)//used to check where are you basically the route
//   // res.end("<h1>welcome from node js and nodemon</>")

//   fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
//     if (err) {
//       throw err;
//     }
//     res.end(content);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//*let's configure the route in node js

const app = http.createServer((req, res) => {
  // console.log(req.url)//used to check where are you basically the route
  // res.end("<h1>welcome from node js and nodemon</>")
  // res.writeHead(200,{
  //   'content-Type':'text/html'//*htlm file
  // })
  //   res.writeHead(200,{
  //     'content-Type':'text/plain'//*plain file
  //   })
  // if(req.url==='/')
  // {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.end(content);
  //     })}
  //  else if(req.url==='/about'){
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.end(content);
  //     })
  //  }

  //*
  //!le's refactor the code

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let ext = path.extname(filePath);

  let contentType = "text/html";

  if (!ext) {
    filePath += ".html";
  }

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    default:
      contentType = "text/html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(
        path.join(__dirname, "public", "error.html"),
        (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end("error!!!");
          } else {
            res.writeHead(400, {
              "content-Type": contentType,
            });
          }
        }
      );
    } else {
      res.end(content);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
