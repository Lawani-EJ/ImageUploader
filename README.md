# **Uploading Files with UploadThing**  

This project demonstrates how to upload files using **UploadThing** in a **Next.js** application with **TypeScript** and the **App Router**.  

## **Project Setup**  
- ✅ Created the initial setup with **Next.js**  
- ✅ Used **TypeScript** for type safety  
- ✅ Configured **ESLint** for linting  
- ✅ Organized the project using the `src/` directory  
- ✅ Implemented **App Router**  
- ✅ Used **Turbopack** for `next dev`  

## **UploadThing Implementation**  
- ✅ Installed **UploadThing**  
- ✅ Implemented **file upload functionality**  
- ✅ Render the image succesfully on the webpage 
- ✅ Improve UI to show upload progress  

<!-- ## **Challenges & Errors Faced**  

1. **500 Internal Server Error on Upload Request**  
   - Initially, `POST /api/uploadthing?actionType=upload&slug=imageUploader` was failing with a **500 error**.  
   - **Fix**: Ensured `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID` were correctly loaded in `.env.local`.  

2. **Slow Compilation & Middleware Delays**  
   - The server took a long time to start and compile routes (`121.8s for /api/uploadthing`).  
   - **Fix**: Checked for **antivirus interference** and slow filesystem warnings.  

3. **Presigned URL Generation Issue**  
   - UploadThing was not returning a **presigned URL**, preventing uploads.  
   - **Fix**: Verified that `imageUploader` was correctly defined in the `FileRouter`.  

4. **File Not Showing After Upload**  
   - After uploading, the file was not accessible.  
   - **Fix**: Used the correct `ufsUrl` returned from UploadThing to display the uploaded file.  

## **Next Steps** 
- [ ] Store uploaded file metadata in a database  
- [ ] Implement authentication for restricted uploads   -->
