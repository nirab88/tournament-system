import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, message, Space, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: values.username, 
          password: values.password 
        }),
      });

      if (response.ok) {
        // You can access the token with data.access if needed
        // Note: localStorage is not available in this environment
        // In a real app, you would store the token like this:
        // localStorage.setItem('access', data.access);
        message.success('Login successful! Redirecting...');
        
        // Simulate navigation (in real app, use navigate('/dashboard'))
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        message.error('Login failed. Please check your credentials.');
      }
    } catch {
      message.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          maxWidth: 400,
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          borderRadius: '12px'
        }}
        bodyStyle={{ padding: '40px 32px' }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              background: 'linear-gradient(45deg, #1890ff, #36cfc9)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px',
              color: 'white'
            }}>
              <LoginOutlined />
            </div>
            <Title level={2} style={{ marginBottom: 8, color: '#1890ff' }}>
              Welcome Back
            </Title>
            <Text type="secondary">
              Sign in to your account
            </Text>
          </div>

          <Form
            name="login"
            onFinish={handleLogin}
            layout="vertical"
            size="large"
            autoComplete="off"
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                { required: true, message: 'Please enter your username!' },
              ]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Enter your username"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please enter your password!' },
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Enter your password"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="#" style={{ color: '#1890ff' }} onClick={(e) => {
                  e.preventDefault();
                  message.info('Forgot password functionality would be implemented here');
                }}>
                  Forgot password?
                </a>
              </div>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0, marginTop: '24px' }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{ 
                  height: '48px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Form.Item>
          </Form>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Text type="secondary">
              Don't have an account? <a href="#" style={{ color: '#1890ff' }} onClick={(e) => {
                e.preventDefault();
                message.info('Would navigate to signup page');
              }}>Sign Up</a>
            </Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default Login;