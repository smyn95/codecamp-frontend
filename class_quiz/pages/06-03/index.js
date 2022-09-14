import ReactPlayer from "react-player";
import "antd/dist/antd.css";
import styled from "@emotion/styled";


const MyYoutube = styled(ReactPlayer)`
  border: 3px solid yellow;
`;


export default function LibraryYoutubePage() {
  return (
    <MyYoutube
      url="https://youtu.be/OgA7wEnsg48"
      width={800}
      height={600}
      muted={true}
      playing={true}
    />
  );
}