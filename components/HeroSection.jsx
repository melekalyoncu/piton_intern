import Finger from '@/public/svg/Finger';
import Finger1 from '@/public/svg/Finger1';
import Finger2 from '@/public/svg/Finger2';
import Finger3 from '@/public/svg/Finger3';
import Finger4 from '@/public/svg/Finger4';
import Finger5 from '@/public/svg/Finger5';
import Shape from '@/public/svg/Shape';
import Shape1 from '@/public/svg/Shape1';

export default function HeroSection() {
  return (
    <section className="relative bg-yellow-300 overflow-hidden min-h-[500px]">
    {/* BLOB 1: ÜST SOL */}
      <div className="absolute top-[-100px] left-[-150px] w-[600px] h-[600px] opacity-20">
        <Shape className="w-full h-full" />
      </div>

      {/* BLOB 2: ALT SAĞ */}
      <div className="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] opacity-20">
        <Shape1 className="w-full h-full" />
      </div>



      <div className="relative z-10 flex flex-col items-center text-center py-20 px-4">
    <h1 className="text-4xl md:text-6xl font-bold max-w-2xl text-black">
      Let’s create something great together.
    </h1>
  </div>

      {/* Parmak ikonları */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 md:gap-6">
        <Finger className="w-24 h-24 md:w-42 md:h-42" />
        <Finger1 className="w-24 h-24 md:w-42 md:h-42" />
        <Finger2 className="w-24 h-24 md:w-42 md:h-42" />
        <Finger3 className="w-24 h-24 md:w-42 md:h-42" />
        <Finger4 className="w-24 h-24 md:w-42 md:h-42" />
        <Finger5 className="w-24 h-24 md:w-42 md:h-42" />
      </div>
    </section>
  );
}
