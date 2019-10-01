import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

// input like boolean
// output onClick
const Like = props => {
  if (!props.liked) {
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={faHeartBroken}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={faHeart}
      />
    );
  }
};

export default Like;
