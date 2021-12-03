import React from 'react'
import { Form, Input, Button, Checkbox, Pagination } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Switch, Route, Redirect} from 'react-router-dom'
import axios from 'axios';
export default function Login() {
  let temp = false
  const onFinish = async(values) => {
    console.log('values', values);
    axios.get('http://localhost:9527/users').then((data) => {
      temp = true;
    })
  };
  return (
    temp ? <Redirect to="http://localhost:3000/#/list"></Redirect>
      : <div><Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
          忘记密码
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
          登录
          </Button>
          <a href=""> 注册 </a>
        </Form.Item>
      </Form></div>
  )
}
