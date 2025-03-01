import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const uploadedFile = acceptedFiles[0];

    if (uploadedFile.size > 20 * 1024 * 1024) {
      setError("File size exceeds 20MB");
      setFile(null);
      return;
    }

    setFile(uploadedFile);
    setError("");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 20 * 1024 * 1024, // 20MB
  });

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file!);
    console.log(formData);

    const res = await fetch(`http://www.werewolf-moral-heavily.ngrok-free.app/upload`, {
      method: "POST",
      body: formData,
    });
    console.log(res);
  };

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-gray-600 p-6">
      <div
        {...getRootProps()}
        className={`cursor-pointer rounded-md border-2 border-dashed p-6 ${
          isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-400"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag & drop a PDF file here, or click to select one</p>
        )}
      </div>

      {file && (
        <div className="text-green-500">
          Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}
      <Button onClick={onSubmit} className="w-full">
        Submit
      </Button>
    </div>
  );
}
