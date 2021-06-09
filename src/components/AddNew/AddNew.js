import React, { useContext } from "react";
import { BotContext } from "../../context/bot/botContext";
import checkAuth from "../../context/checkAuth";
import HOC from "../HOC";
import BotForm from "./AddNewForm";

const index = "2";
function AddNewBot(props) {
  const { addBot } = useContext(BotContext);

  const onFinish = () => {
    const user = checkAuth();
    const value = { token: user };
    addBot(value);
  };

  return (
    <>
      <BotForm onFinish={onFinish} />
    </>
  );
}

export default HOC(AddNewBot, index);
