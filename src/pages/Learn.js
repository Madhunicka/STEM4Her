import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const courses = [
  { 
    title: 'Intro to HTML', 
    level: 'Beginner',
    description: 'Learn the fundamentals of HTML to build your first web pages',
    icon: '📄'
  },
  { 
    title: 'CSS Flexbox & Grid', 
    level: 'Intermediate',
    description: 'Master modern CSS layouts with Flexbox and Grid systems',
    icon: '🎨'
  },
  { 
    title: 'JavaScript Basics', 
    level: 'Beginner',
    description: 'Start your programming journey with JavaScript fundamentals',
    icon: '⚡'
  },
  { 
    title: 'React Fundamentals', 
    level: 'Intermediate',
    description: 'Build interactive UIs with this popular JavaScript library',
    icon: '⚛️'
  },
  { 
    title: 'Node.js & Express', 
    level: 'Intermediate',
    description: 'Create server-side applications with Node.js and Express',
    icon: '🚀'
  },
];

const certifications = [
  { 
    name: 'Frontend Developer Certificate', 
    issuer: 'Tech Academy',
    icon: '🏆',
    description: 'Complete all frontend courses to earn this certification'
  },
  { 
    name: 'Responsive Web Design', 
    issuer: 'FreeCodeCamp',
    icon: '📱',
    description: 'Master responsive design principles and techniques'
  },
  { 
    name: 'JavaScript Algorithms', 
    issuer: 'Codecademy',
    icon: '🧠',
    description: 'Demonstrate your problem-solving skills with JavaScript'
  },
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
      const cardWidth = 320 + 24; // width + margin
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-8 md:px-16 pt-24">
      <div className="max-w-7xl mx-auto">
    
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your STEM journey with these carefully curated courses
          </p>
        </div>

        <div className="relative mb-20">
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 z-20 bg-white text-purple-600 hover:text-white hover:bg-purple-500 rounded-full p-3 shadow-lg transition-all -translate-x-4"
            aria-label="Scroll Left"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar space-x-6 px-2 md:px-12 py-4"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`min-w-[300px] flex-shrink-0 p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer border border-purple-100 ${
                  hoveredIndex === index
                    ? 'scale-105 shadow-xl z-10 border-purple-300'
                    : 'scale-95'
                } scroll-snap-align-start`}
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-purple-800">{course.title}</h3>
                <div className="flex items-center mt-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mt-3">{course.description}</p>
                <button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-transform transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 z-20 bg-white text-purple-600 hover:text-white hover:bg-purple-500 rounded-full p-3 shadow-lg transition-all translate-x-4"
            aria-label="Scroll Right"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
            Earn Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Validate your skills with our recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-purple-100"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-2xl font-bold text-purple-800">{cert.name}</h3>
                <p className="text-purple-600 mt-2">Issued by: {cert.issuer}</p>
                <p className="text-gray-600 mt-3">{cert.description}</p>
                <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-teal-400 text-white py-2 rounded-lg font-medium hover:from-green-600 hover:to-teal-500 transition-transform transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}