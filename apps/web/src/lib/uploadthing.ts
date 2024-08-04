import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react";

export const UploadButton = generateUploadButton({
  url: `${process.env.NEXT_API_URL}/upload`,
});
export const UploadDropzone = generateUploadDropzone({
  url: `${process.env.NEXT_API_URL}/upload`,
});
export const Uploader = generateUploader({
  url: `${process.env.NEXT_API_URL}/upload`,
});
export const { useUploadThing, uploadFiles } = generateReactHelpers({
  url: `${process.env.NEXT_API_URL}/upload`,
});
