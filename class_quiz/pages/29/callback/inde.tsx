import axios from "axios";
import { listenerCount } from "process";
import { useState } from "react";

const Callback = () => {
  const [data, setData] = useState([]);
  // const [data, setData] = useState();





  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200%22)
      .then((res) => parseInt(res.data))
      .then((num) => axios.get(https://koreanjson.com/posts/${num}))
      .then((res) => res.data.UserId)
      .then((UserId) =>
        axios.get(https://koreanjson.com/posts?userId=${UserId})
      )
      .then((res) => setData(res.data));
  };












  
  const onClickAsyncAwait = async () => {
    const { data: num } = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );
    const {
      data: { UserId },
    } = await axios.get(https://koreanjson.com/posts/${num});

    const { data } = await axios.get(
      https://koreanjson.com/posts?userId=${UserId}
    );

    setData(data);

    // axios.getparseInt(result.data);
  };
  return (
    <>
      결과:<button onClick={onClickCallback}>Callback</button>
      <br />
      결과:<button onClick={onClickPromise}>Promise</button>
      <br />
      결과:<button onClick={onClickAsyncAwait}>Async/Await</button>
      <br />
      <ul style={{ listStyle: "none" }}>
        {data && data.map((el) => <li>{el.title}</li>)}
      </ul>
    </>
  );
};

export default Callback;