import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";

const Support = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form] = Form.useForm();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Reach Us</h1>
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
          label="Email"
          required
          tooltip={{
            title: "Enter Your Email",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item
          label="Subject"
          required
          tooltip={{
            title: "Enter Subject",
            icon: <InfoCircleOutlined />,
          }}
        >
          <TextArea placeholder="Enter Your Subject" rows={5} />
        </Form.Item>
        <Button type="primary">Send</Button>
      </Form>
    </div>
  );
};

export default Support;
