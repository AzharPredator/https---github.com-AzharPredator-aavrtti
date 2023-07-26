import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

const DataInof = ({ title, body }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={show ? "post-card-open" : "post-card"}
      onClick={() => setShow(!show)}
    >
      <div className="collapse-option">
        <h6>{title}</h6>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="description">{show ? <p>{body}</p> : null}</div>
    </div>
  );
};

export default DataInof;
