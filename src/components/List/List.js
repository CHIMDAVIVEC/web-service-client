import React, { useContext, useEffect } from "react";
import { BotContext } from "../../context/bot/botContext";
import HOC from "../HOC";
import BotTable from "./Table";
import Loader from "../Loader/Loader";
import checkAuth from "../../context/checkAuth";

const index = "1";

function BotList() {
  useEffect(() => {
    async function getBots() {
      const login = checkAuth();
      await fetchBots(login);
    }
    getBots();
  }, []);

  const { bots, loading } = useContext(BotContext).state;
  const { fetchBots } = useContext(BotContext);
  return <>{!loading ? <BotTable data={bots} /> : <Loader />}</>;
}

export default HOC(BotList, index);
