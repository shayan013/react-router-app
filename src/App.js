import React from "react";
import "./app.css";
import Main from "./components/main-app/Main";
import Sidebar from "./components/sidebar/Sidebar";

import Artistfeed from "./pages/artisfeed/Artistfeed";
import Mymusic from "./pages/mymusic/Mymusic";
import MyactiveVotings from "./pages/myActiveVotings/MyactiveVotings";
import { Routes, Route } from "react-router-dom";
function app() {
  return (
    <div className="app">
      <div className="app_content">
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" component={<Artistfeed />} />
            <Route path="/mymusic" component={<Mymusic />} />
            <Route path="/activeVotings" component={<MyactiveVotings />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

export default app;
