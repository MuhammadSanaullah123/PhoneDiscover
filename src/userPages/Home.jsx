import React, { useState } from "react";

//components
import PhoneTable from "../components/PhoneTable";

//mui
import NativeSelect from "@mui/material/NativeSelect";
const Home = () => {
  const [age, setAge] = useState();
  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div id="home">
      <p id="mainp">Turing Technologies Frontend Test</p>
      <span id="filterSpan">
        <p id="subp">Filter by: </p>

        <NativeSelect
          id="dropdown"
          /*     defaultValue="Status" */
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          value={age}
          handleChange={handleChange}
        >
          <option value={10}>Status</option>
          <option value={20}>Missed</option>
        </NativeSelect>
      </span>
      <PhoneTable />
    </div>
  );
};

export default Home;
