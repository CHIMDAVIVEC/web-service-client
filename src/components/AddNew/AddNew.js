import React, { useContext } from "react";
import { BotContext } from "../../context/bot/botContext";
import { UserContext } from "../../context/user/userContext";
import HOC from "../HOC";
import BotForm from "./AddNewForm";

const index = "2";
function AddNewBot(props) {
  const { addBot } = useContext(BotContext);
  const { me } = useContext(UserContext).state;

  const onFinish = (values) => {
    values.user = me._id;
    addBot(values);
  };

  return (
    <>
      <BotForm onFinish={onFinish} />
    </>
  );
}

export default HOC(AddNewBot, index);
