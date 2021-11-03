import MenuNav from "./components/MenuNav";
import Routes from "./routes";
import GlobalStyle from "./styles/globalstyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuNav />
      <Routes />
    </div>
  );
}

export default App;
