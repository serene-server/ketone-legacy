import { log } from "@repo/logger";
import { createServer } from "./server";

const port = process.env.API_PORT || 3000;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
