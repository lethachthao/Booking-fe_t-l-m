'use client';

import { Button, Table } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import MedicalSpecialtyList from './_components/medical-specialty-list/medical-specialty-list';
import { useToggle } from '@/hooks/use-toggle';
import MedicalSpecialtyModal from './_components/medical-specialty-modal/medical-specialty-modal';
import { useAddMedicalSpecialty } from './_hooks/use-add-medical-specialty';

const MedicalSpecialty = () => {
  const {
    toggleState,
    open: openMedicalSpecialty,
    close: closeMedicalSpecialty,
  } = useToggle(false);

  const { mutate: addMedicalSpecialty } = useAddMedicalSpecialty();

  const addMedicalSpecialtyHandler = (data) => {
    const formData = new FormData();

    for (let i in data) {
      if (i === 'avatar' && Array.isArray(data[i])) {
        const [avatar] = data[i];
        formData.append('file', avatar);

        continue;
      }
      formData.append(i, data[i]);
    }

    addMedicalSpecialty(formData);
  };

  return (
    <div>
      <div className="mb-8">
        <Button
          type="primary"
          icon={<FileAddOutlined />}
          onClick={openMedicalSpecialty}
        >
          thêm chuyên khoa
        </Button>
      </div>
      <MedicalSpecialtyList />

      <MedicalSpecialtyModal
        isOpen={toggleState}
        // defaultValue={{}}
        onSubmit={addMedicalSpecialtyHandler}
        onCancel={closeMedicalSpecialty}
      />
    </div>
  );
};
export default MedicalSpecialty;
