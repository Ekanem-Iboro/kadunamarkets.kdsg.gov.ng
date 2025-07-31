const MainContent = () => {
    return (
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">News</h2>
            <p className="text-gray-600 mb-4">
              Stay up-to-date with the latest news from our school.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Events</h2>
            <p className="text-gray-600 mb-4">
              Check out our upcoming events and get involved.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View all events
            </a>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Featured Teacher</h2>
            <p className="text-gray-600 mb-4">
              Meet one of our amazing teachers and learn about their teaching philosophy.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Meet the teacher
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default MainContent;
  