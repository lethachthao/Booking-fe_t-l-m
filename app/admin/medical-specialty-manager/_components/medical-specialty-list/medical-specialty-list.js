'use client';
import React from 'react';
import { Avatar, Button, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (text) => <Avatar src={text} size="default" shape="circle" />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },

  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => {
      return (
        <div className="flex items-center gap-2">
          <Button
            type="primary"
            size="small"
            icon={<DeleteOutlined />}
            danger
            onClick={console.log}
          >
            Delete
          </Button>

          <Button
            type="primary"
            size="small"
            icon={<DeleteOutlined />}
            onClick={console.log}
          >
            Update
          </Button>
        </div>
      );
    },
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',

    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
];
const MedicalSpecialtyList = () => (
  <Table columns={columns} pagination={false} dataSource={data} />
);
export default MedicalSpecialtyList;
