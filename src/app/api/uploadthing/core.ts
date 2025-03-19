import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// Debugging: Log environment variables
console.log("UPLOADTHING_SECRET:", process.env.UPLOADTHING_SECRET ? "Loaded ✅" : "Not Found ❌");
console.log("UPLOADTHING_APP_ID:", process.env.UPLOADTHING_APP_ID ? "Loaded ✅" : "Not Found ❌");

const auth = () => ({ id: "user1" });

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const user = auth();
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        console.log("Upload complete for userId:", metadata.userId);
        console.log("File details:", file);
        return { uploadedBy: metadata.userId };
      } catch (error) {
        console.error("Error in onUploadComplete:", error);
        throw new UploadThingError("Upload processing failed");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
