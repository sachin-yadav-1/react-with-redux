import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { id: 1, name: "Kesariya", length: "03:05" },
    { id: 2, name: "Laado", length: "02:05" },
    { id: 3, name: "Bigadne De", length: "04:07" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
