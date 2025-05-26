const events = [
  { 
    title: 'Women in Tech Webinar', 
    date: 'June 10, 2025',
    time: '6:00 PM - 8:00 PM',
    location: 'Virtual',
    description: 'Join us for an inspiring webinar featuring successful women in technology sharing their career journeys and advice.'
  },
  { 
    title: 'Scholarship Fair', 
    date: 'July 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Convention Center',
    description: 'Discover scholarship opportunities for women pursuing STEM degrees from various organizations and universities.'
  },
  { 
    title: 'AI & Machine Learning Workshop', 
    date: 'August 22, 2025',
    time: '1:00 PM - 5:00 PM',
    location: 'Tech Hub',
    description: 'Hands-on workshop introducing AI and machine learning concepts with practical coding exercises.'
  },
  { 
    title: 'Hackathon 2025', 
    date: 'September 12-13, 2025',
    time: 'All Day',
    location: 'Innovation Center',
    description: '24-hour coding competition where teams solve real-world problems. Prizes for winners!'
  },
  { 
    title: 'Cybersecurity Awareness Seminar', 
    date: 'October 5, 2025',
    time: '5:30 PM - 7:30 PM',
    location: 'Virtual',
    description: 'Learn about cybersecurity threats and how to protect yourself in the digital world.'
  },
  { 
    title: 'Networking Meetup', 
    date: 'November 20, 2025',
    time: '6:30 PM - 9:00 PM',
    location: 'Downtown Lounge',
    description: 'Casual networking event to connect with other women in STEM and industry professionals.'
  },
];

export default function Events() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-8 md:px-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 leading-[1.3] pb-2">
  Upcoming Events
</h2>


          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community events to learn, grow, and connect with other women in STEM
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-purple-100"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-purple-800">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{event.description}</p>
                  </div>
                  <button
                    className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold py-2 px-6 rounded-lg shadow hover:from-purple-600 hover:to-pink-500 transition-transform transform hover:scale-105"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}