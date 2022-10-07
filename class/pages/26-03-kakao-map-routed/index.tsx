import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
}; // window = globalthis라고 불리운다

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script> </script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4f0c1b881c4e4d3687061eaa18c7b05f";
    // 쿼리스트링이라고 불린다
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //  지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4f0c1b881c4e4d3687061eaa18c7b05f"
        ></>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
