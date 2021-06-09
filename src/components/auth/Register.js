import React, { useContext, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { RegistrationContext } from '../../context/registration/regContext';

//Страница регистрации нового пользователя
const RegForm = ({ history }) => {
  const { RegAction, state } = useContext(RegistrationContext);
  const { loading, error, success, errResponse } = state;

  const onFinish = async (values) => {
    await RegAction(values);
  };

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    } else if (success) {
      message
        .success('Успешная регистрация!', 1)
        .then(() => history.push('/login'));
    }
  }, [error, errResponse, success, history]);

  const login = () => {
    history.push('/login');
  };

  return (
    <div className="test">
      <div className="container ">
        <div>
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-4 align-self-center text-center">
              <h2>Добро пожаловать!</h2>
              <p>Заполните поля для регистрации</p>
              <Form
                name="normal_reg"
                className="reg-form"
                initialValues={{
                  remember: true
                }}
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="login"
                  rules={[
                    {
                      required: true,
                      message: 'Введите логин!'
                    }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    type="login"
                    placeholder="Логин"
                    className="rounded-pill"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Введите пароль!'
                    }
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
                    className="reg-form-button"
                    loading={loading}
                  >
                    Зарегистрироваться
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button onClick={login}>Уже есть аккаунт?</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
