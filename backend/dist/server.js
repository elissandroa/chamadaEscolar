"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// app.ts
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// src/db/conn.ts
var import_sequelize = require("sequelize");
var sequelize = new import_sequelize.Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql"
  }
);
try {
  sequelize.authenticate();
  console.log(`Sequelize: Conectado ao banco: ${process.env.DATABASE_NAME} `);
} catch (error) {
  console.log("N\xE3o foi poss\xEDvel conectar: ", error);
}
var conn_default = sequelize;

// app.ts
function createApp() {
  const PORT = 5e3;
  const app2 = (0, import_express.default)();
  app2.use(import_express.default.json());
  app2.use((0, import_cors.default)());
  conn_default.sync().then(() => {
    app2.listen(PORT, () => {
      console.log(`Rodando na porta ${PORT}!`);
    });
  }).catch((err) => {
    console.error(`N\xE3o foi poss\xEDvel conectar ao banco: ${err}`);
  });
  return app2;
}
var app_default = createApp;

// src/server.ts
var app = app_default();
