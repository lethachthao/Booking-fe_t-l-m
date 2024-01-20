import { Modal } from 'antd';
import FormUser from '../form/form-user';

const AccountModal = ({ isOpen, isSubmitting, data, onSubmit, onCancel }) => {
  return (
    <Modal
      open={isOpen}
      title="Edit Account"
      footer={null}
      onCancel={onCancel}
      destroyOnClose
    >
      <FormUser
        defaultData={data}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        destroyOnClose
      />
    </Modal>
  );
};
export default AccountModal;
