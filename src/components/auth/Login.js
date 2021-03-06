import React, { useContext, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/auth/authContext";
import checkAuth from "../../context/checkAuth";

const LoginForm = ({ history }) => {
  const { LoginAction, state, AuthReset } = useContext(AuthContext);
  const { token, loading, error, errResponse } = state;
  const onFinish = (values) => {
    LoginAction(values);
  };

  useEffect(() => {
    AuthReset();
  }, []);

  useEffect(() => {
    const token = checkAuth();
    if (token !== null && token !== false) {
      history.push("/bots");
    }
  }, [token, history]);

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  const registration = () => {
    history.push("/reg");
  };

  return (
    <div className="test">
      <div className="container ">
        <div>
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-4 align-self-center text-center">
              <h2>Добро пожаловать!</h2>
              <p>Введите свои данные, чтобы продолжить</p>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="login"
                  rules={[
                    {
                      required: true,
                      message: "Введите логин!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Логин"
                    className="rounded-pill"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Введите пароль!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Пароль"
                    className="rounded-pill"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    Войти
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button onClick={registration}>
                    Вы ещё не зарегистрировались?
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
