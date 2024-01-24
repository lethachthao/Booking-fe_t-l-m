import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useUploadManual } from '../../_hooks/use-upload-manual';

const MedicalSpecialtyForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const { getUploadProps } = useUploadManual({ maxCount: 1 });

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div className="flex flex-col rounded-xl gap-4 bg-white p-8">
      <Form
        name="basic"
        layout="vertical"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="Tên chuyên khoa"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name medical specialty!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your description medical specialty!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="avatar"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Chọn ảnh của chuyên khoa"
        >
          <Upload {...getUploadProps}>
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Tạo chuyên khoa
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MedicalSpecialtyForm;
