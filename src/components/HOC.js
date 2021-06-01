import React, { useEffect, useContext } from "react";
import { Layout, message } from "antd";
import { BotContext } from "../context/bot/botContext";
import PageFooter from "./Footer";

function HOC(Component, index) {
  return function DashboardCustomHoc(props) {
    const { BotReset } = useContext(BotContext);
    const {
      error,
      errResponse,
      message: BotMessage,
    } = useContext(BotContext).state;

    useEffect(() => {
      if (error) {
        message.error(errResponse);
        BotReset();
      }
    }, [error]);

    useEffect(() => {
      if (BotMessage) {
        message.success(BotMessage);
        BotReset();
      }
    }, [BotMessage]);

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <div className="container">
            <Component {...props} />
          </div>
          <PageFooter history={props.history} index={index} />
        </Layout>
      </Layout>
    );
  };
}

export default HOC;
