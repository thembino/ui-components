import './App.css';
import Nav from '../src/Components/Nav'
import HeroSection from './Components/HeroSection';
import AnalyticsSection from './Components/AnalyticsSection';
import Newsletter from './Components/Newsletter';
import Cards from './Components/Cards';
import Footer from './Components/footer'


function App() {
  
  return (
    <div>
    <Nav/> 
    <HeroSection/>
    <AnalyticsSection/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;
