import { FaWhatsapp } from "react-icons/fa";

const ChatUsWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center group z-50">
      {/* Tooltip */}
      <span className="mr-3 hidden group-hover:block bg-white text-gray-700 text-sm px-3 py-1 rounded-md shadow-md">
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2348165928966?text=Hello%20I%20need%20more%20information"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default ChatUsWhatsApp;
