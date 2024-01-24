import { axiosInstance } from '@/lib/http/axios-instance';

export const addMedicalSpecialty = (data) => {
  return axiosInstance.post('/createMedicalSpecialty', data, {
    headers: {
      'Content-Type': 'multipart-formdata',
    },
  });
};
