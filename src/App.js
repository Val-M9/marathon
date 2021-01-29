import "./App.css";
import bg from "./assets/bg3.jpg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = (props) => {
  return (
    <div>
      <Header
        title="Let's play the game"
        descr="Some kind of game, you can't win"
      />
      <Layout id="1" title="First Stage" desc="Here will be rules" urlBg={bg} />
      <Layout
        id="2"
        title="Second Stage"
        desc="And here too"
        colorBg="yellow"
      />
      <Layout
        id="3"
        title="The Last One"
        desc="No rules on the last stage ;)"
        urlBg={bg}
      />
      <Footer />
    </div>
  );
};
export default App;
