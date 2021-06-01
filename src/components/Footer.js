import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import FooterStyled from "./styles/FooterStyled";

const { Footer } = Layout;

function PageFooter({ history, index }) {
  const handleLogout = () => {
    localStorage.removeItem("howard_shores");
    history.push("/login");
  };

  return (
    <FooterStyled>
      <div style={{ height: "100%" }}>
        <Footer
          className="site-layout-background"
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <Menu
            defaultSelectedKeys={[index]}
            mode="horizontal"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Menu.Item key="1">
              <Link to="/bots">Боты</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/add-new-bot">Добавить</Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Button danger onClick={() => handleLogout()}>
                Выйти
              </Button>
            </Menu.Item>
          </Menu>
        </Footer>
      </div>
    </FooterStyled>
  );
}

export default PageFooter;
