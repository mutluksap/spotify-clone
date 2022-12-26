import Header from "./components/Header";
import Player from "./components/Player";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div className="h-full relative">
      <div className="flex">
        <Header/>
        <main className="w-full">
          <MainHeader/>
        </main>
      </div>
      <Player/>
    </div>
  );
}

export default App;
