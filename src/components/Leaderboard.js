import React, { useState, useEffect } from "react";
import Header from "./Header";
import Loader from "./leaderboard-components/Loader";
import "../styles/Leaderboard.css";
import { leaderboardDatabase } from "../firebase";

function LeaderboardCard(props) {
  return (
    <div className="Leaderboard-card">
      <div className="Leaderboard-card-place">{props.place}</div>
      <div className="Leaderboard-card-name">{props.name}</div>
      <div className="Leaderboard-card-time">{props.time}</div>
    </div>
  );
}

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(undefined);

  const fetchData = async () => {
    const data = await leaderboardDatabase.orderBy("time").limit(10).get();
    const newLeaderboard = [];

    data.docs.forEach((doc) => {
      newLeaderboard.push(doc.data());
    });

    setLeaderboard(newLeaderboard);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Leaderboard">
      <Header type="leaderboard" />
      <div className="Leaderboard-content">
        <div className="Leaderboard-content-container">
          <h1>Leaderboard</h1>

          <div className="Leaderboard-content-data">
            {leaderboard !== undefined ? (
              leaderboard.map((data, index) => {
                return (
                  <LeaderboardCard
                    key={"Leaderboard-card-" + index}
                    place={index + 1}
                    name={data.name}
                    time={data.time}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
