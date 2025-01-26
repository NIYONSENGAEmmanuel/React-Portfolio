const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat bg-gray-100 sm:min-h-screen h-[10vh] py-12 px-4 flex justify-center items-center md:py-16 md:px-6"
      style={{
        backgroundImage: `url('src/assets/DALL·E 2025-01-09 12.08.53 - A young man wearing a sharp business suit, seated confidently on a modern chair with a sleek laptop in hand. The background features a luxurious offic.webp')`,
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Personal Information</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Name:</strong> Niyonsenga Emmanuel</li>
              <li><strong>Email:</strong> <a href="mailto:niyonsengaemmy60@gmail.com" className="text-blue-500 hover:underline">niyonsengaemmy60@gmail.com</a></li>
              <li><strong>Phone/WhatsApp:</strong> <a href="tel:+250786104974" className="text-blue-500 hover:underline">0786104974</a></li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Social Media</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>GitHub:</strong> <a href="https://github.com/NIYONSENGAEmmanuel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">NIYONSENGAEmmanuel</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/niyonsenga-emmanuel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">NIYONSENGA Emmanuel</a></li>
              <li><strong>Twitter:</strong> <a href="https://twitter.com/NiyonsengaEmmy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Niyonsenga Emmy</a></li>
              <li><strong>Facebook:</strong> <a href="https://www.facebook.com/niyonsenga.emmanuel.58323/followers" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Niyonsenga Emmanuel</a></li>
              <li><strong>Instagram:</strong> <a href="https://www.instagram.com/nemmypracide/followers/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Niyonsenga Emmanuel</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
