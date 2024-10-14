"use client";

import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';
import { Text, Group, Button, Notification, Box } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

export default function ResumeUpload() {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleUpload = async (files: FileWithPath[]) => {
    setError(null);
    const uploadedFile = files[0];

    if (uploadedFile.size > 5 * 1024 * 1024) {  // 5MB limit
      setError('File is too large. Maximum size is 5MB.');
      return;
    }

    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .upload(`public/${uploadedFile.name}`, uploadedFile);

      if (error) throw error;

      setFile(uploadedFile);
      setSuccess('File uploaded successfully');
    } catch (uploadError: any) {
      setError(uploadError.message);
    }
  };

  return (
    <Box className="p-6 my-8 bg-gray-50 border rounded-lg shadow-sm">
      <Dropzone
        onDrop={handleUpload}
        accept={[MIME_TYPES.pdf, MIME_TYPES.docx]}
        maxSize={5 * 1024 * 1024}
      >
        <Group position="center" spacing="xl">
          <Text>Drag or select a PDF/DOCX resume file (Max 5MB)</Text>
        </Group>
      </Dropzone>

      {file && <Text className="mt-4 font-semibold">Uploaded: {file.name}</Text>}
      
      {error && (
        <Notification color="red" icon={<IconX size={18} />} className="mt-4">
          {error}
        </Notification>
      )}

      {success && (
        <Notification color="green" icon={<IconCheck size={18} />} className="mt-4">
          {success}
        </Notification>
      )}
    </Box>
  );
<<<<<<< HEAD

// Simulate parsing after upload
const parsedData = await parseResume(fileContents); // Assuming file contents are read

=======
>>>>>>> 7eeceacbc6887a200c8c0356e1a2be6fdf8299ed
}
