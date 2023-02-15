import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer';
import{ Header }from './Components/Header';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1> welcome to videop player</h1>
      <br>
      </br>
      <VideoPlayer></VideoPlayer>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
