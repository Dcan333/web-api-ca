import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToUpcomingIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  
  const handleAddToUpcoming = (e) => {
    e.preventDefault();
    context.addToUpcoming(movie);
  };
  
  return (
    <IconButton aria-label="add to upcoming movies" onClick={handleAddToUpcoming}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToUpcomingIcon;