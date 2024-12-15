import Paragraph from "../components/Paragraph";
import Word from "../components/Word";
import Character from "../components/Character";

const paragraph =
  "You don't know, how it means to me. Don't leave me, you stole my life, now I disagree, bring it back, bring it back, don't take away from me becasue you don't know how it means to me.";

export default function Home() {
  return (
    <main>
      <div style={{ height: "100vh" }}></div>
      {/*<Paragraph paragraph={paragraph} />*/}
      {/*<Word value={paragraph} />*/}
      <Character value={paragraph} />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
