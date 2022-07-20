import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/authprovider";
import CreateProfileModal from "./CreateProfileModal";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const [showModal, setShowModal] = useState(false);

  let from = location.state?.from?.pathname || "/";
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleSubmit(values) {
    let username = values.username;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  const openCreateModal = () => {
    setShowModal(true);
  };
  const closeCreateModal = () => {
    setShowModal(false);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login-page"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="link" htmlType="button" onClick={openCreateModal}>
          Register with GW.Link
        </Button>
      </Form.Item>
      <CreateProfileModal showModal={showModal} closeModal={closeCreateModal} />
    </Form>
  );
};

export default Login;
