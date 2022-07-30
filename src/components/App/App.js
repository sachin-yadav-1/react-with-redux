import React from "react";
import SongList from "./../SongList/SongList";
import SongDetail from "./../SongDetail/SongDetail";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <SongList />
      <SongDetail />
    </div>
  );
};

export default App;
