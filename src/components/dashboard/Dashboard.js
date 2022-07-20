/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Tabs, Avatar, List, Input, Modal, Button, message } from "antd";

const { TabPane } = Tabs;
const { Search, TextArea } = Input;

const currentConnections = [
  {
    userName: "Manjusha Manalel",
  },
  {
    userName: "Mila Griffin",
  },
  {
    userName: "Lawrence Tomek",
  },
  {
    userName: "Subashish Dasgupta",
  },
  {
    userName: "Pari Pandey",
  },
  {
    userName: "Larah Johnson",
  },
  {
    userName: "Chris Gayle",
  },
  {
    userName: "Wei Chen",
  },
  {
    userName: "Brittany Jameson",
  },
];
const pendingConnections = [
  {
    userName: "Alekhya Dara",
  },
  {
    userName: "Vittoria Pagella",
  },
  {
    userName: "Myrah Lee",
  },
  {
    userName: "Mohammod Irfan",
  },
  {
    userName: "Gye Samson",
  },
  {
    userName: "Taylor Richard",
  },
  {
    userName: "Pratyush Sinha",
  },
  {
    userName: "Sichun Zhao",
  },
  {
    userName: "Priya Anand",
  },
];

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [current, setCurrent] = useState(currentConnections);
  const [pending, setPending] = useState(pendingConnections);
  const [currentFilteredItems, setCurrentFilteredItems] =
    useState(currentConnections);
  const [pendingFiltredItems, setPendingFilteredItems] =
    useState(pendingConnections);

  const onChange = (key) => {
    console.log(key);
  };

  const onCurrentConnectionDelete = (item, index) => {
    const _current = [...current];
    _current.splice(index, 1);
    setCurrent(_current);
    setCurrentFilteredItems([..._current]);
  };

  const onMessage = (item, index) => {
    setVisible(true);
    setSelectedUser(item);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedUser(null);
  };

  const sendMessage = () => {
    setVisible(false);
    message.success(`Message sent to the User - ${selectedUser.userName}`);
    setSelectedUser(null);
  };

  const onCurrentConnectionFilter = (event) => {
    const val = event.currentTarget.value;
    setCurrentFilteredItems([
      ...current.filter(
        (item) => item.userName.toLowerCase().indexOf(val.toLowerCase()) >= 0
      ),
    ]);
  };

  const onPendingConnectionFilter = (event) => {
    const val = event.currentTarget.value;
    setPendingFilteredItems([
      ...pending.filter(
        (item) => item.userName.toLowerCase().indexOf(val.toLowerCase()) >= 0
      ),
    ]);
  };

  const onPendingConnectionDelete = (item, index) => {
    const _pending = [...pending];
    _pending.splice(index, 1);
    setPending([..._pending]);
    setPendingFilteredItems([..._pending]);
  };

  const onAccept = (item, index) => {
    const _current = [...current, item];
    const _pending = [...pending];
    _pending.splice(index, 1);
    setPending([..._pending]);
    setCurrent([..._current]);
    setCurrentFilteredItems([..._current]);
    setPendingFilteredItems([..._pending]);
  };

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Current Connections" key="1">
          <div>
            <Search
              placeholder="Search your connections"
              onChange={onCurrentConnectionFilter}
              style={{
                width: "100%",
              }}
            />

            <List
              itemLayout="horizontal"
              dataSource={currentFilteredItems}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      key="connection-list-delete"
                      onClick={(evt) => {
                        evt.preventDefault();
                        onCurrentConnectionDelete(item, index);
                      }}
                    >
                      Delete
                    </a>,
                    <a
                      key="connection-list-message"
                      onClick={(evt) => {
                        evt.preventDefault();
                        onMessage(item, index);
                      }}
                    >
                      Message
                    </a>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.userName}</a>}
                    description="Connection Role...!!!"
                  />
                </List.Item>
              )}
            />
          </div>
        </TabPane>
        <TabPane tab="Pending Connections" key="2">
          <Search
            placeholder="Search your pending connections"
            onChange={onPendingConnectionFilter}
            style={{
              width: "100%",
            }}
          />
          <List
            itemLayout="horizontal"
            dataSource={pendingFiltredItems}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <a
                    key="list-loadmore-more"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onAccept(item, index);
                    }}
                  >
                    Accept
                  </a>,
                  <a
                    key="list-loadmore-edit"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onPendingConnectionDelete(item, index);
                    }}
                  >
                    Delete
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.userName}</a>}
                  description="Please, Add me to your connection...!!!"
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
      <Modal
        visible={visible}
        title="Sent an message"
        footer={[
          <Button key="back" onClick={onClose}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={sendMessage}>
            Send a Message
          </Button>,
        ]}
      >
        <TextArea rows={4} placeholder="maxLength is 250" maxLength={250} />
      </Modal>
    </div>
  );
};

export default Dashboard;
