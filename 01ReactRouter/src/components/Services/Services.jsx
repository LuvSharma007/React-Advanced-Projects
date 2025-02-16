const Services = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-lg text-gray-700 mb-6">
            At GymFlex, we offer a variety of services to help you reach your fitness goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Personal Training</h2>
              <p className="text-gray-700">
                Get one-on-one coaching from our expert trainers tailored to your fitness needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Group Classes</h2>
              <p className="text-gray-700">
                Join our fun and engaging group classes including yoga, HIIT, and strength training.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nutrition Guidance</h2>
              <p className="text-gray-700">
                Receive personalized meal plans and nutrition tips to support your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  