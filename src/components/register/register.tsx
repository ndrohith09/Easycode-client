import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import Logo from "assets/images/logo-easy-code.png"
import instance from 'axiosInstance';
import Swal from 'sweetalert2';
type FieldType = {
  username?: string;
  password?: string; 
  email? : string
};

const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  console.log('Success:', values);
  const {email , password ,username} = values;

  try {
    await instance({ 
      url: "register/",
      method: "POST",
      data : {
        name :  username, 
        email :  email, 
        password :  password, 
      }
    }).then((res:any) => { 

      Swal.fire({  
        icon: "success", 
        text: `Register Sucessfull!`,
        showConfirmButton: false,
        timer: 2000
      }); 
      window.location.href = "/login";
      console.log(res);
  
    });
  } catch (e) {
    // handle error
    Swal.fire({  
      icon: "error", 
      text: `Error in Regster!`,
      showConfirmButton: false,
      timer: 2000
    }); 
    console.error(e);
  }

};

 
const Register: React.FC = () => (
    <div className="container"
    style={{
        // border: '1px solid slategray',
        padding : '3rem',
        borderRadius : '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '6rem',  
        marginLeft: 'auto',
        marginRight: 'auto',
      
    }}
    >
        <img src={Logo} alt="Logo" />
 
        <h3 className="custom-title"> Register Your Account</h3>
    <br/>
    <br/>
     
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ width: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish} 
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Fullname"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

 
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="default" htmlType="submit">
        Register
      </Button>
    </Form.Item>
  </Form>
  </div>
);

export default Register;