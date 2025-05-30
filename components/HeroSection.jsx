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
<div
  className="
    absolute -top-24 left-1/3 -translate-x-1/2
    w-[500px] h-[500px] md:w-[600px] md:h-[600px]
    opacity-30 text-[#d97706]
    drop-shadow-[0_35px_45px_rgba(0,0,0,0.25)]
  "
>
  <Shape className="w-full h-full" />
</div>


<div className="
  absolute -bottom-28 left-2/3 -translate-x-1/2
  w-[600px] h-[600px] sm:w-[700px] sm:h-[700px]
  opacity-30 text-[#78350f]   /* amber-900 */
">
  <Shape1 className="w-full h-full" />
</div>


      <div className="relative z-10 flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl text-black">
          Let’s create something great together.
        </h1>
      </div>

      <div className="absolute bottom-0 inset-x-0 flex justify-center gap-4 md:gap-6">
        {[Finger, Finger1, Finger2, Finger3, Finger4, Finger5].map((Icon, i) => (
          <Icon key={i} className="w-24 h-24 md:w-42 md:h-42" />
        ))}
      </div>
    </section>
  );
}
