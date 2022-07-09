import React, { useEffect } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import {useSelector} from 'react-redux'
import { authenService } from '../../serice/authen-sercice';

export default function ChangePassword() {
    const authen = useSelector((state) => state.authen);

    const [form] = Form.useForm();

    const currentPassword = Form.useWatch('currentPassword', form);
    const newPassword = Form.useWatch('newPassword', form);
    const reNewPassword = Form.useWatch('reNewPassword', form);

    useEffect(() => {
        console.log(newPassword, reNewPassword)
        // if(password && password == newPassword){
        //     form.setFields([
        //         {
        //             name: 'newPassword',
        //             validating: false,
        //             errors: [String("New password must be different from current password")]
        //         }
        //     ])
        //     return;
        // }
        if (reNewPassword && newPassword != reNewPassword) {
            form.setFields([
                {
                    name: 'reNewPassword',
                    validating: false,
                    errors: [String("Password does not match")]
                }
            ])
            return;
        }

    }, [reNewPassword, newPassword, currentPassword])

    const onFinish = (values) => {
        const data = {...values}
        data.username = authen.user;
        authenService.updatePasswordAdmin(data);
    }

    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Form.Item label='Current password' labelCol={{ span: 24 }} name='currentPassword' rules={[{ required: true, message: 'Current password is required' }]}>
                    <Input.Password placeholder='Enter your current password' />
                </Form.Item>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label='New password' labelCol={{ span: 24 }} name='newPassword' rules={[{ required: true, message: 'New password is required' }]}>
                            <Input.Password placeholder='Enter your new password' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='Re-enter password' labelCol={{ span: 24 }} name='reNewPassword' rules={[{ required: true, message: 'Re password is required' }]}>
                            <Input.Password placeholder='Re-enter new password again' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify='end'>
                    <Col>
                        <Form.Item >
                            <Button htmlType='submit' type='primary' style={{ width: 100 }} className='bg-cl-btn cl white'>Submit</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
