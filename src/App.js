import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Circle from './components/Circle';
import Section from './components/Section';
import Cards from './components/Cards';
import Goals from './components/Goals';
import Gradient from './components/Gradient';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
        <Circle/>
        <Section/>
        <Cards/>
        <Goals/>
        <Gradient/>
        <About/>
        <Banner/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
