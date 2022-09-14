import { Rate } from "antd";
import {useState} from 'react'
import "antd/dist/antd.css";


export default function LibraryStarPage() {
  const desc = ["1점", "2점", "3점", "4점", "5점"];
  const [value, setValue] = useState(3);

  const handleChange = (value) => {

    setValue(value);
    alert(value + "점");
  };

  

  return (
    <span style={{display:'flex',flexDirection: 'column'}}>
      <Rate onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
}
