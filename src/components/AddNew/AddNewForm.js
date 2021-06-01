import React from "react";
import { Form, Input, Button } from "antd";
import { FontColorsOutlined, InfoOutlined } from "@ant-design/icons";
import BotFormStyled from "../styles/BotFormStyled";

const { TextArea } = Input;

function BotForm({ onFinish }) {
  return (
    <BotFormStyled>
      <Form
        name="bot_details_form"
        className="login-form"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        style={{ clear: "both" }}
      >
        <Form.Item
          name="name"
          label="Название"
          rules={[
            {
              required: true,
              message: "Введите название!",
            },
          ]}
        >
          <Input
            prefix={<FontColorsOutlined className="site-form-item-icon" />}
            placeholder="Название"
          />
        </Form.Item>

        <Form.Item
          name="spec"
          label="Специализация"
          rules={[
            {
              required: true,
              message: "Введите специализацию бота!",
            },
          ]}
        >
          <TextArea
            autoSize
            prefix={<InfoOutlined className="site-form-item-icon" />}
            placeholder="Специализация"
          />
        </Form.Item>

        <div
          className="row justify-content-center align-items-center"
          style={{ marginTop: "5%" }}
        >
          <div className="align-self-center text-center">
            <Form.Item>
              <Button type="primary" htmlType="submit" className="mr-2">
                Создать
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </BotFormStyled>
  );
}

export default BotForm;
