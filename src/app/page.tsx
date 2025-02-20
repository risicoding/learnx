"use client";
import { Controller, useForm } from "react-hook-form";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FileUploadForm() {
  const { control, handleSubmit, setValue, watch } = useForm<{ file: File }>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("file", acceptedFiles[0]);
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 10 * 1024 * 1024, // 5MB limit
    maxFiles: 1,
  });

  const onSubmit = (data: { file: File }) => {
    console.log("Uploaded file:", data);
  };

  const file = watch("file");

  return (
    <Card className="max-w-md mx-auto my-44 p-4">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <div
                {...getRootProps()}
                className="border-dashed border-2 border-gray-400 p-6 text-center rounded-md cursor-pointer"
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the file here...</p>
                ) : (
                  <p>Drag & drop a file here, or click to select one</p>
                )}
              </div>
            )}
          />
          {file && <p className="mt-2 text-sm">Selected file: {file.name}</p>}
          <Button type="submit" className="mt-4 w-full">
            Upload
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
