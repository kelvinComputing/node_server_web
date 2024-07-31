import env from "dotenv";
import envvar from "env-var";

env.config();

// forma vieja
// require('dotenv').config();
// const { get } = require('env-var');

export const envs = {
  PORT: envvar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envvar.get("PUBLIC_PATH").default("public").asString(),
};

// const envs = {
//   PORT: get("PORT").required().asPortNumber(),
//   PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
// };

// module.exports = {
//   envs,
// };
