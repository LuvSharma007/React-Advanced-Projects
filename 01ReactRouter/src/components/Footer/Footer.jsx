const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} GymFlex. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  