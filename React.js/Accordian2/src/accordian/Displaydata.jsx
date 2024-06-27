import React, { useState } from "react";

const Displaydata = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="main-heading">
        <p onClick={handleShow}>{show ? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers">{answer}</p>}
    </div>
  );
};

export default Displaydata;
