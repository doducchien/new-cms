import { Button, Col, Form, Input, message, notification, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginSuccess } from "../../redux/action/authen-action";
import { authenService } from "../../serice/authen-sercice";



const listAccout = [
  {
    username: 'chien',
    password: '123'
  },
  {
    username: 'admin-prontograde',
    password: 'prontograde@123'
  },
  {
    username: 'admin-prontograde1',
    password: 'prontograde@123xyz'
  },
  {
    username: 'admin-prontograde2',
    password: 'prontograde@123abc'
  }
]


export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    authenService.login(values).then(res=>{
      dispatch(loginSuccess(values.username))
      localStorage.setItem("user", JSON.stringify(values))
      window.location.href = "/"
    }).catch(e=>{
      console.log("eeee", e)
    })

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-100vh">
      <div className="txt-center h-100vh">
        <Row justify="center" className="h-100vh">
          <Col className="bg-img-login" span={16} style={{backgroundImage: 'url(https://prontograde.com/images/learning.png)'}}>
            {/* <img src="https://prontograde.com/images/learning.png" alt="" width='100%'/> */}
          </Col>
          <Col span={8} className='pd-2rem'>
            <img src="https://prontograde.com/images/logo.png" alt="" height={150}/>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="mg-top-1rem"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="User name" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password"/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
