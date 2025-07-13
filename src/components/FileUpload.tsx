import React, { useState, useCallback } from 'react';
import { Upload, FileText, FileType, X } from 'lucide-react';

interface FileUploadProps {
  title: string;
  description: string;
  acceptedTypes: string[];
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  title,
  description,
  acceptedTypes,
  onFileSelect,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div
      className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
        isDragOver
          ? 'border-purple-400 bg-purple-500/10 scale-105'
          : 'border-gray-600 hover:border-purple-500/50 hover:bg-gray-700/30'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
            <FileText className="h-8 w-8 text-green-400" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h3 className="text-lg font-medium text-white">{selectedFile.name}</h3>
            <button
              onClick={removeFile}
              className="p-1 text-gray-400 hover:text-red-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-400">
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      ) : (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
            <Upload className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-400 mb-4">{description}</p>
          
          <label className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all cursor-pointer">
            <FileType className="h-4 w-4 mr-2" />
            Choose File
            <input
              type="file"
              className="hidden"
              accept={acceptedTypes.join(',')}
              onChange={handleFileSelect}
            />
          </label>
          
          <p className="text-xs text-gray-500 mt-3">
            Supports: {acceptedTypes.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;