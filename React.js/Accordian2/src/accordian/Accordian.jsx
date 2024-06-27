import React, { useState } from "react";

import data from "./data";
import "./accordian.css";
import Displaydata from "./Displaydata";

const Accordian = () => {
  const [accordianData, seAccordiantData] = useState(data);

  return (
    <div>
      <section className="main-div">
        <h1>Accordian</h1>
        {data.map((elem) => {
          return <Displaydata key={elem.id} {...elem} />;
        })}
      </section>
    </div>
  );
};

export default Accordian;
