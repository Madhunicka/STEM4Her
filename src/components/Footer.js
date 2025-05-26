export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto">
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-xl">👩</span>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                STEM4Her
              </h2>
            </div>
            <p className="text-white/90">
              Empowering girls and women to excel in STEM fields through education, mentorship, and community support.
            </p>
            <div className="flex space-x-4 pt-2">
            <a 
              href="https://facebook.com/stem4her" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              aria-label="Facebook"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
                alt="Facebook" 
                className="w-5 h-5 filter brightness-0 invert"
              />
            </a>
            <a 
              href="https://twitter.com/stem4her" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              aria-label="Twitter"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
                alt="Twitter" 
                className="w-5 h-5 filter brightness-0 invert"
              />
            </a>
            <a 
              href="https://instagram.com/stem4her" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              aria-label="Instagram"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
                alt="Instagram" 
                className="w-5 h-5 filter brightness-0 invert"
              />
            </a>
            <a 
              href="https://linkedin.com/stem4her" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png" 
                alt="LinkedIn" 
                className="w-5 h-5 filter brightness-0 invert"
              />
            </a>
          </div>

          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Courses', path: '/learn' },
                { name: 'Challenges', path: '/challenges' },
                { name: 'Events', path: '/events' },
                { name: 'Success Stories', path: '/success' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="hover:text-white/80 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@stem4her.org" className="hover:text-white/80 transition-colors duration-200">
                  support@stem4her.org
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-white/80 transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Innovation Lane, Tech City, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-6 mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-white/90 mb-4">
              Subscribe to our newsletter for the latest courses, events, and STEM opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transition-colors duration-300 shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} STEM4Her. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-white/80 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/80 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/faq" className="text-white/80 hover:text-white transition-colors duration-200">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}