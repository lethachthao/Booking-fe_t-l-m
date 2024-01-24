import { Modal } from 'antd';
import MedicalSpecialtyForm from '../medical-specialty-form/medical-specialty-form';

const MedicalSpecialtyModal = ({ isOpen, onSubmit, onCancel }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      title={null}
      footer={null}
      centered
    >
      <MedicalSpecialtyForm onSubmit={onSubmit} />
    </Modal>
  );
};
export default MedicalSpecialtyModal;
