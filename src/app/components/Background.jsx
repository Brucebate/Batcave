'use client';

const Background = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#121212] flex justify-center items-center">
      {/* New Top Right Ellipse */}
      <div
        className="absolute w-[500px] h-[500px] right-[-100px] top-[-100px]"
        style={{
          background: '#711119',
          filter: 'blur(120px)',
          borderRadius: '50%',
          opacity: 0.7
        }}
      />

      {/* Ellipse 1
      <div
        className="absolute w-[851.95px] h-[753.7px] right-[100px] top-1/2 -translate-y-1/2"
        style={{
          background: 'linear-gradient(180deg, #0E0D0F 0%, #FB3397 100%)',
          filter: 'blur(100px)',
          transform: 'matrix(-0.35, -0.94, -0.94, 0.35, 0, 0)'
        }}
      /> */}

      

      {/* Ellipse 3 */}
      <div
        className="absolute w-[1039.65px] h-[1115.5px] left-[-2421px] top-[-669px]"
        style={{
          background: 'linear-gradient(180deg, #E22B2B 0%, #179FE8 100%)',
          filter: 'blur(100px)'
        }}
      />
      
      {children}
    </div>
  );
};

export default Background;

///hii baby hii baby
