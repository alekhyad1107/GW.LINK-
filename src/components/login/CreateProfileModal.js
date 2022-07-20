import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../auth/authprovider";

const CreateProfileModal = ({ showModal, closeModal }) => {
  let navigate = useNavigate();
  let auth = useAuth();

  const handleOk = () => {
    closeModal();
    auth.signin("test", () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate("/", { replace: true });
    });
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
          Register With GW.Link
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" requiredMark>
        <Form.Item
          label="First Name"
          required
          tooltip={{
            title: "Enter First Name",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter your Firstname" />
        </Form.Item>
        <Form.Item
          label="Middle Name"
          required
          tooltip={{
            title: "Enter Middle Name",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter your MiddleName" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          required
          tooltip={{
            title: "Enter Last Name",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter your Lastname" />
        </Form.Item>
        <Form.Item
          label="GWID"
          required
          tooltip={{
            title: "Enter Your GWID",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter Your GWID" />
        </Form.Item>
        <Form.Item
          label="NETID For Authentication"
          required
          tooltip={{
            title: "Enter Your NETID@gwc.edu",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter Your GWID" />
        </Form.Item>
        <Button type="primary">Send Code</Button>
      </Form>
    </Modal>
  );
};

export default CreateProfileModal;
