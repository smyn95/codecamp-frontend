import * as S from "../src/commons/styles";
import Link from "next/link";

export default function Home() {
  // const [loding, setLoding] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoding(false);
  //     void router.push("/main");
  //   }, 2800);

  //   return;
  // }, []);

  return (
    <>
      {/* {loding ? (
        <div className={styles.container}>
          <S.Randing>
            <img src="/randing.png" alt="스타벅스로고" />
          </S.Randing>
          <S.Container>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span> ...</span>
          </S.Container>
        </div>
      ) : null} */}
      <body style={{ background: "#000" }}>
        <S.Square>
          <S.Animantion></S.Animantion>
          <S.Animantion></S.Animantion>
          <S.Animantion></S.Animantion>
          <S.ContentRanding>
            <h2>RandingPage</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              voluptas, a, expedita, vel maxime impedit aut saepe sit deserunt
              voluptatem qui deleniti delectus repellat architecto consequatur
              modi debitis molestias optio!
            </p>
            {/* <Link> */}
            <a href="/main">Go Site</a>
            {/* </Link> */}
          </S.ContentRanding>
        </S.Square>
      </body>
    </>
  );
}
