import './App.css';
import Progress from './component/progress';
import Investors from './component/inverstors';
import Market from './component/market';
import Invest from './component/invest';
import ShareSTV from './component/share_stv';
function App() {
  return (
    <div className="bg-full-background-black relative p-8">
      <div className='flex flex-col mx-auto space-y-4 font-mono text-white text-sm font-bold leading-6 max-w-md font-lexend font-thin'>
        <Progress />
        <Investors />
        <Market />
        <Invest />
        <ShareSTV />
      </div>
    </div>
  );
}

export default App;
