import React from "react";
import { connect } from "react-redux";
import "./SongDetail.css";

const SongDetail = ({ song }) => {
  return (
    <div className="song-detail">
      <h2>{song.name}</h2>
      <p>{song.length}</p>
    </div>
  );
};

const mapPropsToState = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapPropsToState)(SongDetail);
