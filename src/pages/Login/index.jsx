import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form, Button, Input, Icon,
} from 'antd';
import action from '../../store/actions';
import 'antd/dist/antd.less';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  form: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    input: {
      width: '400px',
      height: '50px',
      icon: {
        color: 'rgba(0,0,0,.25)',
      },
    },
    button: {
      width: '300px',
      height: '50px',
      backgroundColor: 'rgba(117, 144, 201, 1)',
      borderColor: 'rgba(117, 144, 201, 1)',
      borderRadius: '50px',
    },
  },
  error: {
    color: 'red',
  },
};

function Login({
  form, login, user,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        login({
          username: values.username,
          password: values.password,
        });
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <div className="container" style={styles.container}>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              style={styles.form.input}
              prefix={<Icon type="user" style={styles.form.input.icon} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              style={styles.form.input}
              prefix={<Icon type="lock" style={styles.form.input.icon} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.form.button}>
            Log in
          </Button>
          {user.errorMsg && (
            <div style={styles.error}>
              {user.errorMsg === 'Request failed with status code 404'
                ? '帳號密碼錯誤！'
                : '發生錯誤，請重試！'}
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

Login.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};


const LoginWithForm = Form.create({ name: 'login' })(Login);
const mapStateToProps = store => ({
  user: store.user,
});
export default withRouter(connect(mapStateToProps, action)(LoginWithForm));
