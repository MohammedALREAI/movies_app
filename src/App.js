import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";

function App() {
  return (
    <MainContainer>
      <Nav />
      <HomeScreen />
    </MainContainer>
  );
}

export default App;
