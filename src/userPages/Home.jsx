import React, { useState, useEffect } from "react";

//components
import PhoneTable from "../components/PhoneTable";

//mui
import NativeSelect from "@mui/material/NativeSelect";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//api
import { getCalls, getCallsCustom } from "../utilities/api";

const Home = () => {
  const [filter, setFilter] = useState();
  const [callData, setCallData] = useState([]);
  const [totalCount, setTotalCount] = useState();

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const handleCalls = async () => {
    let response = await getCalls();
    setTotalCount(response.data.totalCount);
    let minutes;
    let remainingSeconds;
    let seconds;
    let temp = response.data.nodes.map((call) => {
      const { duration, ...rest } = call;
      seconds = call.duration;
      minutes = Math.floor(seconds / 60);
      remainingSeconds = seconds % 60;
      return {
        ...rest, // Spread the rest of the properties
        duration: {
          minutes: minutes,
          seconds: remainingSeconds,
          originalDuration: seconds,
        },
      };
    });

    setCallData([...temp]);
    console.log("calls", response);
  };

  const handleCustomCalls = async (e, page) => {
    let response = await getCallsCustom(page * 10);
    setTotalCount(response.data.totalCount);
    let minutes;
    let remainingSeconds;
    let seconds;
    let temp = response.data.nodes.map((call) => {
      const { duration, ...rest } = call;
      seconds = call.duration;
      minutes = Math.floor(seconds / 60);
      remainingSeconds = seconds % 60;
      return {
        ...rest, // Spread the rest of the properties
        duration: {
          minutes: minutes,
          seconds: remainingSeconds,
          originalDuration: seconds,
        },
      };
    });

    setCallData([...temp]);
    console.log("calls", response);
  };
  useEffect(() => {
    handleCalls();
  }, []);

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
          value={filter}
          handleChange={handleChange}
        >
          <option value={10}>Status</option>
          <option value={20}>Missed</option>
        </NativeSelect>
      </span>
      <PhoneTable callData={callData} />

      <Pagination
        onChange={handleCustomCalls}
        id="pagination"
        count={Math.floor(totalCount / 10)}
        color="primary"
        shape="rounded"
      />
    </div>
  );
};

export default Home;
