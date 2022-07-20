import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../auth/authprovider";

import { Card, Row, Col, Button, Avatar, Upload, Input } from "antd";
import CreatePost from "./createPost";

const { Meta } = Card;
const { TextArea } = Input;

const Profile = () => {
  let navigate = useNavigate();
  let { signout } = useAuth();
  const [edit, setEdit] = useState(false);
  const [showPostModal, setPostModal] = useState(false);
  const [formData, setFormData] = useState({
    Name: "George Washington",
    email: "gwashington@gwu.edu",
    homeState: "Virginia",
    dob: "February 22, 1732",
    gender: "Male",
    dorm: "Thurston Hall",
    academicYear: "1821",
    skills: "Java, Python, SQL, Agile Methodologies, MS Office, HTML5, CSS3",
  });
  const uploadButton = (
    <div style={{ display: "flex", alignItems: "center", width: 200 }}>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload Resume</div>
    </div>
  );
  return (
    <Row>
      <Col span="24">
        <Button
          type="danger"
          style={{ marginBottom: "30px", marginLeft: "20px", float: "right" }}
          onClick={() => {
            signout();
            navigate("/login");
          }}
        >
          Logout
        </Button>
        <Button
          type="primary"
          style={{ marginBottom: "30px", float: "right" }}
          onClick={() => setEdit(!edit)}
        >
          {edit ? <>Save Profile</> : <>Edit Profile</>}
        </Button>
      </Col>
      <Col span={10}>
        <Card
          hoverable={false}
          style={{
            width: "100%",
            height: 500,
          }}
        >
          <Meta
            title="George Washington"
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            description="Under Graduate"
          />
          <div style={{ marginTop: "30px" }}>
            <Button
              type="primary"
              style={{ marginBottom: "30px" }}
              onClick={() => setPostModal(true)}
            >
              Create Post
            </Button>
            <Row>
              <Col span={8}>Name:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.Name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentId: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.Name
                )}
              </Col>

              <Col span={8}>Email:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.email
                )}
              </Col>

              <Col span={8}>Home State:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.homeState}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homeState: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.homeState
                )}
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
      <Col span={12} push={1}>
        <Card
          hoverable={false}
          style={{
            width: "100%",
            height: 500,
          }}
        >
          <Card type="inner" title="General Information">
            <Row>
              <Col span={8}>Birthday:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dob: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.dob
                )}
              </Col>

              <Col span={8}>Gender:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gender: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.gender
                )}
              </Col>

              <Col span={8}>Dorm:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.dorm}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dorm: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.dorm
                )}
              </Col>

              <Col span={8}>Academic Year:</Col>
              <Col span={16}>
                {edit ? (
                  <Input
                    value={formData.academicYear}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        academicYear: e.currentTarget.value,
                      })
                    }
                  />
                ) : (
                  formData.academicYear
                )}
              </Col>
            </Row>
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Skills">
            {edit ? (
              <TextArea
                value={formData.skills}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: e.currentTarget.value,
                  })
                }
              />
            ) : (
              formData.skills
            )}
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Upload Resume
"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              {uploadButton}
            </Upload>
          </Card>
        </Card>
        <CreatePost
          showModal={showPostModal}
          closeModal={() => setPostModal(false)}
        />
      </Col>
    </Row>
  );
};

export default Profile;
