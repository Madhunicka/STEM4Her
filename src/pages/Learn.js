import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const courses = [
  { title: 'Intro to HTML', level: 'Beginner' },
  { title: 'CSS Flexbox & Grid', level: 'Intermediate' },
  { title: 'JavaScript Basics', level: 'Beginner' },
  { title: 'React Fundamentals', level: 'Intermediate' },
  { title: 'Node.js & Express', level: 'Intermediate' },
];

const certifications = [
  { name: 'Frontend Developer Certificate', issuer: 'Tech Academy' },
  { name: 'Responsive Web Design', issuer: 'FreeCodeCamp' },
  { name: 'JavaScript Algorithms', issuer: 'Codecademy' },
];

export default function Learn() {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  
useEffect(() => {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    navigate("/login");
  }
}, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
     
      const cardWidth = 300 + 16; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="relative py-16 px-4 sm:px-8 md:px-16 pt-24 min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #f0f9ff, #dbeafe)',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Courses Section */}
        <h2 className="text-4xl font-bold text-blue-800 mb-4 border-b-4 border-blue-600 pb-2 text-left">
          Courses
        </h2>

        <div className="relative flex items-center mb-16">
         
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 z-20 bg-blue-700 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
            aria-label="Scroll Left"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            &#8592;
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar space-x-4 px-12"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`min-w-[300px] flex-shrink-0 p-6 my-6 bg-white shadow-lg rounded-lg transition-transform duration-300 cursor-pointer ${
                    hoveredIndex === index
                    ? 'scale-110 shadow-2xl z-10'
                    : 'scale-90 opacity-70'
                } scroll-snap-align-start`}
                style={{ transformOrigin: 'center center' }}
>

                <h3 className="text-2xl font-semibold text-blue-900">{course.title}</h3>
                <p className="text-blue-700 mt-2">Level: {course.level}</p>
                <button className="mt-4 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition-transform transform hover:scale-105">
                  Enroll
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-20 bg-blue-700 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
            aria-label="Scroll Right"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            &#8594;
          </button>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 mb-4 border-b-4 border-blue-600 pb-2 text-left">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-900">{cert.name}</h3>
              <p className="text-blue-700 mt-2">Issuer: {cert.issuer}</p>
              <button className="mt-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg shadow transition-transform transform hover:scale-105">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
