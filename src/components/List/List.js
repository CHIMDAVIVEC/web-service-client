import React, { useContext, useEffect } from "react";
import { BotContext } from "../../context/bot/botContext";
import { UserContext } from "../../context/user/userContext";
import HOC from "../HOC";
import BotTable from "./Table";
import Loader from "../Loader/Loader";

const index = "1";

function BotList() {
  useEffect(() => {
    async function getBots() {
      await fetchLoggedInUser();
      const id = me ? me._id : 0;
      await fetchBots(id);
    }
    getBots();
  }, []);

  const { bots, loading } = useContext(BotContext).state;
  const { fetchBots } = useContext(BotContext);
  const { fetchLoggedInUser } = useContext(UserContext);
  const { me } = useContext(UserContext).state;
  return <div>{!loading ? <BotTable data={bots} /> : <Loader />}</div>;
}

export default HOC(BotList, index);
