import React, { useEffect, useState } from "react";
import axios from "axios";

import Tiles from "../commons/Tiles";

const Grilla = () => {
  const [guitarList, setGuitarList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/product/guitar")
      .then((res) => res.data)
      .then((data) => {
        setGuitarList(data);
      });
  }, []);

  return (
    <div className="grilla columns is-variable">
      {guitarList.map((producto, i) => (
        <Tiles producto={producto} key={i} />
      ))}
    </div>
  );
};

export default Grilla;
