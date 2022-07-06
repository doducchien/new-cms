import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { authenService } from '../../serice/authen-sercice';

import moment from 'moment'

export default function Profile() {
    const [form] = Form.useForm();
    const authen = useSelector((state) => state.authen);
    //mode is readOnly or editing
    const [mode, setMode] = useState('readOnly')
    const detailData = useRef();
    function getProfileAdmin(res) {
        const { username, firstname, lastname, email, createdAt } = res.data;

        form.setFieldsValue({
            username, firstname, lastname, email,
            createdAt: moment(createdAt)
        })

        detailData.current = {
            ...res.data,
            createdAt: moment(createdAt)
        }
    }
    useEffect(() => {
        if (authen?.user) {
            const data = { username: authen.user };
            authenService.getDetailAdmin(data).then(getProfileAdmin)

        }


    }, [authen])

    const onFinish = (values) => {
        authenService.updateProfileAdmin(values).then(res => {
            authenService.getDetailAdmin(values).then(getProfileAdmin).then(() => setMode('readOnly'))
        })
    }

    const onEdit = () => {
        if (mode == 'readOnly') {
            setMode('editing');
            return;
        }
        form.submit()

    }

    const onCancel = () => {
        form.setFieldsValue(detailData.current)
        setMode('readOnly')
    }
    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Row gutter={12}>
                    <Col span={12}>
                        <Form.Item label='Username' name='username' labelCol={{ span: 24 }}>
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            rules={[
                                {

                                    required: true,
                                    message: 'Email is required'
                                }
                            ]}
                            label={'Email ' + (mode == 'readOnly' ? '' : '- editing')}
                            name='email'
                            labelCol={{ span: 24 }}
                        >
                            <Input readOnly={mode == 'readOnly'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={12}>
                        <Form.Item
                            rules={[
                                {

                                    required: true,
                                    message: 'First name is required'
                                }
                            ]}
                            label={'First name ' + (mode == 'readOnly' ? '' : '- editing')}
                            name='firstname'
                            labelCol={{ span: 24 }}
                        >
                            <Input readOnly={mode == 'readOnly'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            rules={[
                                {

                                    required: true,
                                    message: 'Last name is required'
                                }
                            ]}
                            label={'Last name ' + (mode == 'readOnly' ? '' : '- editing')}
                            name='lastname'
                            labelCol={{ span: 24 }}
                        >
                            <Input readOnly={mode == 'readOnly'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={24}>
                        <Form.Item label='Created At' name='createdAt' labelCol={{ span: 24 }}>
                            <DatePicker showTime style={{ width: '100%' }} disabled />
                        </Form.Item>
                    </Col>

                </Row>

                <Row justify='end' gutter={12}>
                    {mode == 'editing' &&
                        <Col>
                            <Form.Item >
                                <Button type='default' style={{ width: 100 }} onClick={onCancel}>Cancel</Button>
                            </Form.Item>
                        </Col>
                    }
                    <Col>
                        <Form.Item >
                            <Button type='primary' style={{ width: 100 }} className='bg-cl-btn cl white' onClick={onEdit}>{mode == 'readOnly' ? 'Edit' : 'Save'}</Button>
                        </Form.Item>
                    </Col>
                </Row>


            </Form>
        </div>
    )
}
