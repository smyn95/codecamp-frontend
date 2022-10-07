import * as S from "../product.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../../src/components/commons/inputs/01";
import { Tooltip } from "antd";
import { EnvironmentOutlined, PlusOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { ErrorModal, SuccessModal } from "../../../src/commons";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM } from "../product.queries";
import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string(),
  contents: yup.string().required("상품설명을 입력해주세요."),
  price: yup.number().required("판매가격을 입력해주세요."),
  tags: yup.string(),
});
interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string;
  address: string;
  addressDetail: string;
}

export default function ProductWritePage() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  // console.log(typeof watch("price"));

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ea4a320c694c22dfa06c939a797eb783";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.486739, 126.900467), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          37.486739,
          126.900467
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // const message =
            //   "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // const resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  const { onClickMoveToPage } = useMoveToPage();

  const onClickSubmit = async (data: IFormData) => {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: data,
        },
      });
      SuccessModal("상품등록이 완료되었습니다.");
      void router.push(`/product/${data.createUseditem._id}`);
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  return (
    <>
      <S.Box>
        <S.Title>Product registration</S.Title>

        <form onSubmit={handleSubmit(onClickSubmit)}>
          <S.InputBox>
            <S.InputName>상품명</S.InputName>
            <Input01
              type="text"
              placeholder="상품명을 작성해주세요."
              register={register("name")}
            />
            <S.InputError>{formState.errors.name?.message}</S.InputError>
          </S.InputBox>

          <S.InputBox>
            <S.InputName>한줄요약</S.InputName>
            <Input01
              type="text"
              placeholder="한줄요약을 작성해주세요."
              register={register("remarks")}
            />
            <S.InputError>{formState.errors.remarks?.message}</S.InputError>
          </S.InputBox>

          <S.InputBox className="contentsBox">
            <S.InputName>상품설명</S.InputName>
            <S.Contents
              placeholder="상품설명을 작성해주세요."
              {...register("contents")}
            />
            <S.InputError>{formState.errors.contents?.message}</S.InputError>
          </S.InputBox>

          <S.InputBox>
            <S.InputName>판매가격</S.InputName>
            <Input01
              type="number"
              placeholder="판매가격을 입력해주세요."
              register={register("price")}
            />
            <S.InputError>{formState.errors.price?.message}</S.InputError>
          </S.InputBox>

          <S.InputBox>
            <S.InputName>태그입력</S.InputName>
            <Input01
              type="text"
              placeholder="#태그 #태그 #태그"
              register={register("tags")}
            />
            <S.InputError>{formState.errors.tags?.message}</S.InputError>
          </S.InputBox>

          <S.AddressBox>
            <S.MapBox>
              <S.InputName>거래위치</S.InputName>
              <div id="map" style={{ width: 400, height: 200 }}></div>
            </S.MapBox>

            <S.MapAddressBox>
              <S.InputName>
                GPS &nbsp;&nbsp;
                <Tooltip color={"lime"}>
                  <EnvironmentOutlined />
                </Tooltip>
              </S.InputName>

              <S.MapFlex>
                <S.Coordinate>
                  <li>위도(LAT)</li>
                  <li>경도(LNG)</li>
                </S.Coordinate>

                <S.CoordinateBottom>
                  <S.InputName>주소</S.InputName>
                  <Input01
                    placeholder="주소가 입력됩니다."
                    type="text"
                    register={register("useditemAddress.address")}
                  />
                  <Input01
                    placeholder="상세주소가 입력됩니다."
                    type="text"
                    register={register("useditemAddress.addressDetail")}
                  />
                </S.CoordinateBottom>
              </S.MapFlex>
            </S.MapAddressBox>
          </S.AddressBox>

          <S.InputBox>
            <S.InputName>사진첨부</S.InputName>
            <S.Imgbx>
              <div>
                <PlusOutlined />
                <span>Upload</span>
              </div>
            </S.Imgbx>
            <S.Imgbx>
              <div>
                <PlusOutlined />
                <span>Upload</span>
              </div>
            </S.Imgbx>
            <S.Imgbx>
              <div>
                <PlusOutlined />
                <span>Upload</span>
              </div>
            </S.Imgbx>
          </S.InputBox>
          <S.Setting>
            <S.InputBox>
              <S.InputName style={{}}>메인설정</S.InputName>
              <div className="radio">
                <input type="radio" id="youtube" name="youtube" />
                <label htmlFor="youtube">사진 (1)</label>
              </div>

              <div className="radio">
                <input type="radio" id="picture" name="youtube" />
                <label htmlFor="picture">사진 (2)</label>
              </div>
            </S.InputBox>
          </S.Setting>
          <S.Submit>
            <S.Cancel onClick={onClickMoveToPage("/mainㄴ")}>취소하기</S.Cancel>

            <S.SubmitBtn>등록하기</S.SubmitBtn>
          </S.Submit>
        </form>
      </S.Box>
    </>
  );
}
