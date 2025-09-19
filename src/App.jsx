import Header from './components/Header.tsx';
import FanusAgency from './components/FanusAgency.tsx';
import OurServices from './components/OurServices.tsx';
import WorkProgress from './components/WorkProgress.tsx';
import Portfolio from './components/Portfolio.tsx';
function App() {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat min-h-screen h-screen w-full m-0 p-0 relative"
      style={{ 
        backgroundImage: 'url(/background1.png)',
        height: '200vh'
      }}
    >
      <Header />
      <FanusAgency/>
      <OurServices/>
      <WorkProgress/>
      <Portfolio/>
    </div>
  )
}

export default App
