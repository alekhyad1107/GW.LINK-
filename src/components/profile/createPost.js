import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../auth/authprovider";
import TextArea from "antd/lib/input/TextArea";

const CreatePost = ({ showModal, closeModal }) => {
  let navigate = useNavigate();
  let auth = useAuth();

  const handleOk = () => {
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form] = Form.useForm();
  return (
    <Modal
      visible={showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button type="primary" onClick={handleOk}>
          Save Post
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" requiredMark>
        <Form.Item
          label="First Name"
          required
          tooltip={{
            title: "Enter Post Title",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter Post Title" />
        </Form.Item>
        <Form.Item
          label="Post Description"
          required
          tooltip={{
            title: "Enter Post Description",
            icon: <InfoCircleOutlined />,
          }}
        >
          <TextArea placeholder="Enter Post Description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatePost;
