import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const DeleteIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <>
      <FontAwesomeIcon
        title="trash"
        role="img"
        icon={faTrash}
        onClick={onClick}
      />
    </>
  );
};

export default DeleteIcon;
