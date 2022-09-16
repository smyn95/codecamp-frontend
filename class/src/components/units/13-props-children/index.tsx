interface IProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IProps) {
  return (
    <>
      <div>ㅇㄴㅎㅅㅇ ㅇㅎㅇㄴㄷ</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>ㅇㄴㅎㅅㅇ ㅁㄱㅇㄴㄷ</div>
    </>
  );
}
