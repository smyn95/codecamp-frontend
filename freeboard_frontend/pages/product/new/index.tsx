import * as S from "../product.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../../src/components/commons/inputs/01";
import { Modal, Tooltip } from "antd";
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
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../src/commons/store";
import DaumPostcodeEmbed from "react-daum-postcode";
import KakaoMapPage from "../../../src/components/commons/kakoMap";

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
}

export default function ProductWritePage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const { register, handleSubmit, watch, formState, getValues, setValue } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  // console.log(typeof watch("price"));
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  // address
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (value: any) => {
    setValue("useditemAddress", { address: value.address });
    onToggleModal();
    // 모달에서 검색한 주소를 동적으로  input value값에 넣어주겠다 (출력)
  };

  const address = getValues("useditemAddress.address");
  // setValue로 가져온 값을

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
              <KakaoMapPage address={address} setValue={setValue} />
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
                  <strong>위도 : </strong>
                  <Input01
                    type="text"
                    register={register("useditemAddress.lat")}
                    placeholder=""
                  />
                  <strong>경도 : </strong>
                  <Input01
                    type="text"
                    register={register("useditemAddress.lng")}
                    placeholder=""
                  />
                </S.Coordinate>

                <S.CoordinateBottom>
                  <S.InputName>주소</S.InputName>
                  <S.Address>
                    <Input01
                      placeholder="주소가 입력됩니다."
                      type="text"
                      register={register("useditemAddress.address")}
                    />
                    <button type="button" onClick={onToggleModal}>
                      주소검색
                    </button>
                    {isOpen && (
                      <Modal
                        visible={true}
                        onOk={onToggleModal}
                        onCancel={onToggleModal}
                      >
                        <DaumPostcodeEmbed onComplete={handleComplete} />
                      </Modal>
                    )}
                  </S.Address>
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
