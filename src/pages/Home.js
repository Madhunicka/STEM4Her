import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50">
     
      <section className="relative overflow-hidden py-20 px-4 sm:px-8 md:px-16 pt-32 text-center">
     
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-200 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-pulse z-0"></div>
        <div className="absolute bottom-[50px] right-[-80px] w-80 h-72 bg-purple-200 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-pulse z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-100 opacity-20 rounded-full mix-blend-multiply blur-2xl animate-pulse z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 leading-tight">
            Girls Who Code <span className="text-indigo-600"> & Create</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 font-medium px-4">
            Join a sisterhood of future innovators. Learn tech skills, build amazing projects, and launch your STEM career with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/learn')} 
              className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">🚀 Start Learning Free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => navigate('/register')} 
              className="relative overflow-hidden group bg-white border-2 border-purple-500 text-purple-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">💖 Join Our Community</span>
              <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-1"></span>
            </button>
          </div>

        
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center justify-center">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Student" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Student" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/33.jpg" alt="Student" />
              </div>
              <span className="ml-3">Join 5,000+ girls learning with us</span>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 p-2">
              Your STEM Superpowers Await
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed everything to help you succeed in tech - from beginner to boss!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👩‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Learn By Doing</h3>
                <p className="text-gray-700">
                  Build real projects from day one with our step-by-step guided coding adventures.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    Fun & Effective
                  </span>
                </div>
              </div>
            </div>
          
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👭</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-3">Sisterhood Support</h3>
                <p className="text-gray-700">
                  Connect with mentors and peers in our women-only forums and live Q&A sessions.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Always Welcoming
                  </span>
                </div>
              </div>
            </div>
           
            <div className="group relative bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3">Girl-Focused Content</h3>
                <p className="text-gray-700">
                  Courses designed with female learning styles in mind - visual, practical, and relatable.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    Made For You
                  </span>
                </div>
              </div>
            </div>
           
            <div className="group relative bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Celebrate Wins</h3>
                <p className="text-gray-700">
                  Earn beautiful badges and certificates to showcase your growing skills.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                    You Deserve It!
                  </span>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">Career Launchpad</h3>
                <p className="text-gray-700">
                  Exclusive internships and job opportunities with women-friendly tech companies.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    Future-Proof
                  </span>
                </div>
              </div>
            </div>
            
        
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Safe Space</h3>
                <p className="text-gray-700">
                  Ask "silly" questions freely - our community celebrates curiosity and growth.
                </p>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    No Judgement
                  </span>
                </div>
              </div>
            </div>
          </div>
          
       
          <div className="mt-24 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 shadow-inner">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-5xl mb-6">"</div>
              <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
                I went from zero coding experience to building my first website in a month! The supportive community made all the difference when I felt stuck.
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/43.jpg" 
                  alt="Happy student" 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold text-purple-800">Priya K.</p>
                  <p className="text-gray-600">Computer Science Student</p>
                </div>
              </div>
            </div>
          </div>
          
     
          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
              Ready to Unleash Your Inner Tech Genius?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of girls who are changing the face of technology, one line of code at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/register')}
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">🌟 Start For Free Today</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
              </button>
              <button 
                onClick={() => navigate('/learn')}
                className="relative overflow-hidden group bg-white border-2 border-purple-500 text-purple-600 hover:text-white px-10 py-5 rounded-full text-xl font-bold shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">👩‍🏫 Explore Courses</span>
                <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-1"></span>
              </button>
            </div>
            <p className="mt-6 text-gray-500">
              No credit card required · 7-day free trial
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}