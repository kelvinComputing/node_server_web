import express from "express";
import path from "path";

// Forma vieja
// const express = require('express')
// const path = require('path')

export const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  app.use(express.static(public_path));

  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
};

// const startServer = (options) => {
//   const { port, public_path = "public" } = options;

//   const app = express();

//   app.use(express.static(public_path));

//   app.get("*", (req, res) => {
//     const indexPath = path.join(
//       __dirname + `../../../${public_path}/index.html`
//     );
//     res.sendFile(indexPath);
//   });

//   app.listen(port, () => {
//     console.log(`escuchando en el puerto ${port}`);
//   });
// };

// module.exports = {
//   startServer,
// };
