/* eslint-disable @typescript-eslint/no-var-requires */
const commander = require("commander");
const dotenvFlow = require("dotenv-flow");
const path = require("path");
const child_process = require("child_process");
const mode = process.env.NODE_ENV || "development";
console.log(`Mode=${mode}`);

const env = dotenvFlow.config({ node_env: mode, default_node_env: mode });
if (env.error) {
  throw new Error(env.error.message);
} else {
  console.log(env.parsed);
}

commander.option("-u, --url <url>,", "API URL", process.env.API_URL);
commander.option(
  "-s, --scheme <scheme>,",
  "HTTP/HTTPS",
  process.env.API_SCHEME
);
commander.parse(process.argv);

const options = commander.opts();
console.log(`url=${options.url}`);
console.log(`scheme=${options.scheme}`);

if (!options.url) {
  throw new Error("url is required");
}

if (!options.scheme) {
  throw new Error("scheme is required");
}

function onComplete(error: any | null, stdout: string, stderr: string): void {
  if (stdout !== "") {
    console.log(stdout);
  }

  if (stderr !== "") {
    console.error(stderr);
  }

  if (error != null) {
    throw error;
  }
}

const nswagPath = path.join("node_modules", ".bin", "nswag");
const variables = `/variables:API_URL=${options.url},SCHEME=${options.scheme}`;
const command = `${nswagPath} run ./config/ArticlibClient.nswag /runtime:Net60 ${variables}`;
child_process.exec(command, onComplete);
