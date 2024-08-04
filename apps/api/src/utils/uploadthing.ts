import { log } from "@repo/logger";
import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter: FileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
  }).onUploadComplete((data) => {
    log("upload completed", data);
  }),
} satisfies FileRouter;
