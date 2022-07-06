import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Dropdown, Menu, Row, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { localStorageUtil } from "../util/local-storage-util";
const onLogout = () => {
  localStorageUtil.clear();
  window.location.href = "/authen/login";
};

const goToProfile = ()=>{
  window.location.pathname = "/admin/profile";
}

const menu = (
  <Menu
    items={[
      {
        key: "0",
        label: <div onClick={goToProfile}>Profile</div>,
      },
      {
        key: "1",
        label: <div onClick={onLogout}>Logout</div>,
      },

    ]}
  />
);

export default function BaseHeader() {
  const history = useHistory();
  const authen = useSelector((state) => state.authen);

  console.log("authen", authen)
  return (
    <div className="h-60 bg-cl-main">
      <Row justify="end" align="middle">
        <Col className="mg-top-5">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Space>
              <div>
                {" "}
                <Avatar size={50} icon={<UserOutlined />} />
                &nbsp;
                <span className="cl-white">{authen.user}</span>
              </div>
              <DownOutlined />
            </Space>
          </Dropdown>{" "}
        </Col>
      </Row>
    </div>
  );
}
