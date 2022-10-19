import Lazyload from "react-lazyload";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ImageLazyLoadPage() {
  return (
    <Wrapper>
      Scroll to load images.
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="/선넘는 빵빵이.png" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="/하지말라고빵빵이.png" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="/14.jpeg" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="/15.png" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="17.png" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="/web.webp" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/23/17/16/cascade-7152189__340.jpg" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280__340.jpg" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/04/11/09/32/glacier-7125359__340.jpg" />
      </Lazyload>
      <div className="filler" />
      <Lazyload width={500} height={500}>
        <img src="https://cdn.pixabay.com/photo/2022/03/30/15/52/gerbera-7101430__340.jpg" />
      </Lazyload>
    </Wrapper>
  );
}
