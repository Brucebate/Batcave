'use client';
import Image from 'next/image';
import { Oregano } from 'next/font/google';
import MyPic from '/public/best wayne111.png';

const oregano = Oregano({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h1 className={`${oregano.className} text-5xl md:text-6xl lg:text-7xl text-[#F2F2F2] mb-8 leading-tight`}>
              The Batcave isn't a place.<br />It's a warning.
            </h1>
            
            <h2 className={`${oregano.className} text-4xl md:text-5xl lg:text-6xl text-[#F2F2F2] mb-8 leading-tight`}>
              I'm Priyanshu Rangari —<br />aka Brucebate.
            </h2>
            
            <p className={`${oregano.className} text-2xl md:text-3xl lg:text-4xl text-[#737373] leading-relaxed`}>
              By day, I'm a Software Developer.<br />
              By night... also a Software Developer.<br />
              But with more caffeine and darker themes.
            </p>
          </div>
          
          {/* Images */}
          <div className="lg:w-1/2 relative">
            {/* Profile image */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[502px] lg:h-[502px] mx-auto">
              <Image
                src={MyPic}
                alt="Priyanshu Rangari"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            
            {/* Doodle image */}
            <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 lg:w-[254px] lg:h-[254px] opacity-90">
              <Image
                src="/image doodle.png"
                alt="Doodle"
                fill
                className="object-contain rotate-[35deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;