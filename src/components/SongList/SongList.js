import React from "react";
import "./SongList.css";
import { connect } from "react-redux";
import { selectSong } from "./../../actions";

const SongList = (props) => {
  const { songs } = props;

  return (
    <div className="song-list">
      {songs.map((song) => {
        return (
          <div key={song.id}>
            <h3>{song.name}</h3>
            <p>{song.length}</p>
            <button onClick={() => props.selectSong(song)}>Select Song</button>
          </div>
        );
      })}
    </div>
  );
};

// this state = state of redux store
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// connect to redux store
export default connect(mapStateToProps, { selectSong })(SongList);
