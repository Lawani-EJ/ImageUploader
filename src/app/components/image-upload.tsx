"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import Image from 'next/image';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>('')

  return (
    <div>
      <UploadButton endpoint='imageUploader'
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
        setImageUrl(res[0].url)
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
      /> 

      {imageUrl.length ? (
          <Image src={imageUrl} alt="Uploaded Image" width={500} height={500}/>
      ) : null}
    </div>
  );
};

export default ImageUpload
