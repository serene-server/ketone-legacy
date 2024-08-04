import { json, urlencoded } from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import morgan from "morgan";
import { createRouteHandler } from "uploadthing/express";
import { errorHandler } from "./middleware/error";
import { uploadRouter } from "./utils/uploadthing";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(compression())
    .use(cookieParser())
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        credentials: true,
        origin: [
          process.env.NEXT_PUBLIC_URL ?? "",
          process.env.VITE_PUBLIC_URL ?? "",
        ],
      }),
    )
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    })
    .use(
      "/api/uploadthing",
      createRouteHandler({
        router: uploadRouter,
        config: {
          uploadthingId: process.env.UPLOADTHING_APP_ID,
          uploadthingSecret: process.env.UPLOADTHING_SECRET,
        },
      }),
    )
    .use(errorHandler);

  return app;
};
