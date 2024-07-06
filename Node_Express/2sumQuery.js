// const http = require("http");
// const express = require("express");
// const fs = require("fs");
// const app = express();
// const port = 8080;

// const sumNum = (req, res, next) => {
//   const { num1, num2 } = req.query;
//   if (num1 && num2) {
//     req.query.num1 = parseFloat(num1) * 2;
//     req.query.num2 = parseFloat(num2) * 2;
//   }
//   next();
// };

// app.get("/", sumNum, (req, res) => {
//   res.send("this is home");
//   const { num1, num2 } = req.query;
//   if (num1 && num2) {
//     const sum = num1 + num2;
//     fs.writeFile("sum.txt", `sum is : ${sum}`, () => {
//       console.log("created");
//     });
//   }
// });

// const server = http.createServer(app);
// server.listen(port, () => {
//   console.log("kk");
//   console.log(`Server connected on http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;

const sumMiddleware = (req, res, next) => {
  const { num1, num2 } = req.query;
  if (num1 && num2) {
    req.query.num1 = parseFloat(num1) * 2;
    req.query.num2 = parseFloat(num2) * 2;
  }
  next();
};

app.get("/", sumMiddleware, (req, res) => {
  try {
    let sum = 0;
    const { num1, num2 } = req.query;
    if (num1 && num2) {
      sum = num1 + num2;
    }
    if (sum) {
      fs.writeFile("text.txt", `sum is : ${sum}`, (err) => {
        if (err) {
          console.log("failed to creating a file ", err);
        } else {
          console.log("file created ");
        }
      });
      res.send(`sum is : ${sum}`);
    } else {
      res.send("please provide numbers as query parameters ");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
