import React, { useEffect, useState } from 'react';
import { Button, Input, Card, Typography, Select, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLoginFormik } from '../Setup/formikSetup';
import { getBranchData, handleBranchChange, handleCycleChange } from '../Utils/ApiCalls';

const { Title } = Typography;
const { Option } = Select;

export function LogIn() {
  const [Branch, setBranch] = useState([]);
  const [Cycles, setCycles] = useState([]);
  const [Year, setYear] = useState([]);

  useEffect(() => {
    getBranchData(setBranch);
  }, []);

  const formik = useLoginFormik();

  return (
<div>
<header style={{ marginBottom: "-30%" }}> 
  <h3 style={{ marginBottom: "-5%" }}>Hello</h3>
  <p>Enter your email and password</p>
</header>
<Card
  title={<Title level={3} style={{ textAlign: 'center' }}><UserOutlined /> Log In</Title>}
  style={{ width: 300, margin: 'auto', marginTop: '100px' }}
>
<Form onFinish={formik.handleSubmit}>
<Form.Item
  name="cycle"
  validateStatus={formik.errors.cycle && formik.touched.cycle ? 'error' : ''}
  help={formik.errors.cycle && formik.touched.cycle ? formik.errors.cycle : null}
>
  <label className="form-label">The Branch</label>
  <Select
    placeholder="Select Cycle"
    onChange={(value) => handleBranchChange(value, formik, setCycles)}
    value={formik.values.cycle}
  >
    {Branch.map((branch) => (
      <Option key={branch.id} value={branch.id}>
        {branch.name}
      </Option>
    ))}
  </Select>
</Form.Item>
<Form.Item
  name="year"
  validateStatus={formik.errors.year && formik.touched.year ? 'error' : ''}
  help={formik.errors.year && formik.touched.year ? formik.errors.year : null}
>
  <label className="form-label">The Cycle</label>
  <Select
    placeholder="Select Year"
    onChange={(value) => handleCycleChange(value, formik, setYear)}
    value={formik.values.year}
  >
    {Cycles.map((cycle) => (
      <Option key={cycle.id} value={cycle.id}>
        {cycle.name}
      </Option>
    ))}
  </Select>
</Form.Item>
<Form.Item
  name="term"
  validateStatus={formik.errors.term && formik.touched.term ? 'error' : ''}
  help={formik.errors.term && formik.touched.term ? formik.errors.term : null}
>
<label className="form-label">The Term</label>
<Select
placeholder="Select Term"
value={formik.values.term}
onChange={(value) => formik.setFieldValue('term', value)}
onBlur={formik.handleBlur}
>
  {Array.isArray(Year) && Year.map((year) => (
    <Option key={year.id} value={year.id}>
      {year.name}
    </Option>
  ))}
</Select>
</Form.Item>
<Form.Item
  name="username"
  validateStatus={formik.errors.username && formik.touched.username ? 'error' : ''}
  help={formik.errors.username && formik.touched.username ? formik.errors.username : null}
>
  <label className="form-label">The Username</label>
  <Input
    prefix={<UserOutlined />}
    placeholder="Username"
    {...formik.getFieldProps('username')}
  />
</Form.Item>
<Form.Item
  name="password"
  validateStatus={formik.errors.password && formik.touched.password ? 'error' : ''}
  help={formik.errors.password && formik.touched.password ? formik.errors.password : null}
>
  <label className="form-label">The Password</label>
  <Input.Password
    placeholder="Password"
    {...formik.getFieldProps('password')}
  />
</Form.Item>
<Form.Item>
  <Button type="primary" htmlType="submit">
    Log In
  </Button>
</Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LogIn;
