interface IProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IProps) {
  return (
    <>
      <button style={{ background: props.isActive ? "yellow" : "" }}>
        {props.title}
      </button>
    </>
  );
}
