import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Promise() {
  const [promise, setPromise] = useState([""]);

  const myCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aa.send();
    aa.addEventListener("load", (res) => {
      // console.log(res);
      const num = res.target.response.split(" ")[0];

      const bb = new XMLHttpRequest();
      bb.open("get", `https://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res) => {
        // console.log(res);
        const userId = JSON.parse(res.target.response).UserId;

        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res) => {
          setPromise(JSON.parse(res.target.response));
        });
      });
    });
  };

  const myPromise = () => {
    void axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        // prettier-ignore
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`)
      })
      .then((res) => {
        // setPromise(res.promise);
        setPromise(res.data);
      });
  };

  const myAsyncAwait = () => {
    const result = axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        // prettier-ignore
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`)
      })
      .then((res) => {
        setPromise(res.data);
      });
    // console.log(result);
  };
  return (
    <>
      <Head>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </Head>
      <button onClick={myCallback}>callback</button>
      <button onClick={myPromise}>promise</button>
      <button onClick={myAsyncAwait}>async/await</button>
      <p>
        {promise.map((el) => (
          <div key={el}>{el.title}</div>
        ))}
      </p>
    </>
  );
}
