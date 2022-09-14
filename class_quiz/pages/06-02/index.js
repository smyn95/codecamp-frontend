import styled from "@emotion/styled";
import { Calendar } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

export default function CalendarPage() {
  const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;


  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }
  const [data, setData] = useState("");
  
  function onSelect(value) {
    setData(value.format("YYYY-MM-DD"));
  }

  return (
    <div>
      <MyCalendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}
      />
      <div>{data}</div>
    </div>
  );
}
