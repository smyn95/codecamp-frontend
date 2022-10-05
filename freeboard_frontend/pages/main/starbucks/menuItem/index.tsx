export default function MenuItem({ item, onMenu }) {
  const { name } = item;

  return (
    <>
      <li onClick={() => onMenu(name)}>{name}</li>
    </>
  );
}
