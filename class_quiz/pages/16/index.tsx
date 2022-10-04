export default function HofPage() {
  const onClickButton = (id) => (event) => {
    console.log(id);
  };

  return <button onClick={onClickButton(123)}>클릭</button>;
}
