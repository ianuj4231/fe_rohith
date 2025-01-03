import comp2rightx from '../assets/comp2rightx.png';  
import skyxhero100left from '../assets/skyxhero100left.jpg';

function Comp2() {
  return (
    <div className="w-full bg-white p-6">
      <div className="flex w-full h-[350px] gap-6">
        <a href="https://example.com/left" className="w-3/10 h-full">
          <img src={skyxhero100left} alt="Sky Hero Left" className="w-full h-full object-cover" />
        </a>

        <a href="https://example.com/right" className="w-7/10 h-full">
          <img src={comp2rightx} alt="Comp2 Right" className="w-full h-full object-cover" />
        </a>
      </div>
    </div>
  );
}

export default Comp2;
