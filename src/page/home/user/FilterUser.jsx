import { Col, Row, Input, Select, Form, Button } from "antd";
import React from "react";
const { Search } = Input;
const { Option } = Select;
export default function FilterUser({filter, setFilter}) {
  const onSearch = (value) => console.log(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onFinish = (value)=>{
    setFilter(value);
  }
  const onReset = (values)=>{
    setFilter(values);
  }
  return (
    <div>
      <Form onFinish={onFinish} onReset={onReset}>
        <Row justify="end" gutter={16}>
          <Col flex={1}>
            <Form.Item name="nameOrEmail">
              <Input
                defaultValue=''
                placeholder="Input name or email"
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="role">
              <Select
                defaultValue={null}
                style={{ width: "100%" }}
                placeholder="Select the role"
                size="large"
              >
                <Option value={1}>Student</Option>
                <Option value={2}>Teacher</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="plan">
              <Select
                defaultValue={null}
                style={{ width: "100%" }}
                placeholder="Select the plan"
                size="large"
              >
                <Option value="BASIC">BASIC</Option>
                <Option value="PREMIUM">PREMIUM</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className="bg-cl-btn">
                Filter
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button size="large" type="default" htmlType="reset" >
                Reset filter
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
