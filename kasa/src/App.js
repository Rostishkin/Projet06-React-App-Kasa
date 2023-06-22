import './App.css';
import Router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
