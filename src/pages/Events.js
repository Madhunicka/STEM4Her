const events = [
  { title: 'Women in Tech Webinar', date: 'June 10, 2025' },
  { title: 'Scholarship Fair', date: 'July 15, 2025' },
  { title: 'AI & Machine Learning Workshop', date: 'August 22, 2025' },
  { title: 'Hackathon 2025', date: 'September 12, 2025' },
  { title: 'Cybersecurity Awareness Seminar', date: 'October 5, 2025' },
  { title: 'Networking Meetup', date: 'November 20, 2025' },
];

export default function Events() {
  return (
    <section className="relative py-16 px-4 sm:px-8 md:px-16 pt-24 min-h-screen bg-gray-50 flex justify-center">
      
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-b from-blue-300 to-blue-100" />

      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-b from-blue-300 to-blue-100" />

      <div className="max-w-3xl mx-auto w-full z-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 border-b-2 border-blue-600 pb-2">
          Upcoming Events
        </h2>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Date: {event.date}</p>
              </div>
              <button
                className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
