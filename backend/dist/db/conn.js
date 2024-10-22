"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/db/conn.ts
var conn_exports = {};
__export(conn_exports, {
  default: () => conn_default
});
module.exports = __toCommonJS(conn_exports);
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
