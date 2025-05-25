import { useNavigate } from 'react-router-dom';
export default function Home() {
   const navigate = useNavigate();


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-8 md:px-16 pt-24">

      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-pulse z-0"></div>
      <div className="absolute bottom-[50px] right-[-80px] w-80 h-72 bg-blue-300 opacity-30 rounded-full mix-blend-multiply blur-2xl animate-pulse z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
      
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left animate-slide-in-left px-2 sm:px-6 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            Empowering Girls in STEM
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Build, learn, and grow with a vibrant coding community. Solve challenges, access resources, and unlock your potential.
          </p>
          <div  className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => navigate('/learn')} className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow transition-transform transform hover:scale-105">
              🚀 Start Learning
            </button>
            <button  onClick={() => navigate('/register')} className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg text-lg shadow transition-transform transform hover:scale-105">
              💡 Join Now
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center animate-slide-in-right">
          <img
            src="/web-developer-4386440-3638116.webp"
            alt="Girls coding"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-xl"
          />

          <div className="hidden md:flex justify-center mt-4 gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="HTML"
              className="w-10 h-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
              alt="CSS"
              className="w-10 h-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JavaScript"
              className="w-10 h-10"
            />
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-4 gap-6 animate-fade-in md:hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="HTML"
          className="w-10 h-10"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
          alt="CSS"
          className="w-10 h-10"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="JavaScript"
          className="w-10 h-10"
        />
      </div>
    </section>
  );
}
