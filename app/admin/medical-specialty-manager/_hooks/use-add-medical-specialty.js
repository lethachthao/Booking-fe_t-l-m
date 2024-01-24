import { useMutation } from '@tanstack/react-query';
import { addMedicalSpecialty } from '../_service/medical-specialty-service';
import { App } from 'antd';

export const useAddMedicalSpecialty = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationFn: (data) => {
      return addMedicalSpecialty(data);
    },
    onSuccess: () => {
      message.success('Tạo chuyên khoa thành công');
    },
    onError: () => {
      message.error('Tạo chuyên khoa thất bại');
    },
  });
};
