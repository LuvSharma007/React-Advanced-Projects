const Content = () => {
    return (
      <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">
            Welcome to GymFlex
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Unleash your potential with our state-of-the-art fitness facilities and expert coaching.
            Join us today and transform your body and mind.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/services" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition">
              Explore Services
            </a>
            <a href="/signup" className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-gray-900 transition">
              Join Now
            </a>
          </div>
          <div className="mt-12 flex justify-center">
            <img
              src="https://source.unsplash.com/600x400/?gym,fitness"
              alt="Gym Workout"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Content;
  