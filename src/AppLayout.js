import { Layout, Menu } from "antd";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth/authprovider";

const { Header, Content } = Layout;
const menuItems = [
  {
    label: "Connections",
    path: "/",
  },
  {
    label: "Posts",
    path: "/post",
  },
  {
    label: "Support",
    path: "/support",
  },
  {
    label: "FAQ's",
    path: "/faq",
  },
  {
    label: "Profile",
    path: "/profile",
  },
];

const AppLayout = (props) => {
  let navigate = useNavigate();
  let { user, signout } = useAuth();
  console.log(user);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <div className="logo" />
        {user && (
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            items={menuItems.map((item, index) => {
              return {
                key: item.path,
                label: `${item.label}`,
              };
            })}
            onClick={({ item, key, keyPath, domEvent }) => {
              console.log(keyPath, item, key);
              if (key === "/logout") {
                signout();
                navigate("/login");
              } else {
                navigate(key);
              }
            }}
            className="pull-right"
          />
        )}
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
