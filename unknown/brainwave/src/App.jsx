import ButtonGradient from "../public/assets/svg/ButtonGradient";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
