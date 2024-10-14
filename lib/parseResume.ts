import Papa from 'papaparse';

export const parseResume = async (file: File) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        if (results.errors.length) {
          reject(results.errors);
        } else {
          resolve(results.data);
        }
      },
    });
  });
};
