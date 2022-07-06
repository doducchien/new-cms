import { Avatar, Col, List, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { apiService } from "../../../serice/api-service";
import { userService } from "../../../serice/user-service";
import FilterUser from "./FilterUser";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({
    nameOrEmail: "",
    role: null,
    plan: null,
  });

  const userFilter = users.filter((item) => {
    const firstName_ = item.firstName.trim().toLowerCase();
    const lastName_ = item.lastName.trim().toLowerCase();
    const email_ = item.email.trim().toLowerCase();

    const nameOrEmail_ = (filter?.nameOrEmail || "").trim().toLowerCase();
    let condition =
      firstName_.includes(nameOrEmail_) || lastName_.includes(nameOrEmail_) || email_.includes(nameOrEmail_);
    if (filter?.role) condition = condition && item.role == filter?.role;
    if (filter?.plan) condition = condition && item.plan == filter?.plan;

    return condition;
  });
  async function getAllUser() {
    const res = await apiService.get("/api/users");
    setUsers(res.data);
  }
  useEffect(() => {
    getAllUser();
  }, []);

  console.log({ users });
  return (
    <Space direction="vertical" className="w-100p">
      <FilterUser filter={filter} setFilter={setFilter} />
      <div>
        <Row gutter={12}>
          <Col span={8}>
            <List
            style={{height:'70vh', overflow: 'auto'}}
              itemLayout="horizontal"
              dataSource={userFilter}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.firstName + " " + item.lastName}
                    description={item.email}
                    className='cu-po trans-0dot4s hv-gray pd-1rem bd-rad-20'
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={16} className='bd-left-1-sl-gray'>
          </Col>
        </Row>
      </div>
    </Space>
  );
}
