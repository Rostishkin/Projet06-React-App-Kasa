import './App.css';
import Router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
