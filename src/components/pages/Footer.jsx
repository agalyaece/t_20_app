
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='max-w-[2540px] w-full bg-slate-50  sticky inset-x-0 bottom-0 left-0 py-2  border-t-4 mt-50'>
      <footer className='flex items-center m-auto justify-center'>


        <FaCopyright size={20} className="text-gray-800 mr-2" />
        <h3 className='text-xl font-bold text-gray-700'>JRD Tech {year}</h3>
      </footer>
    </div>
  );
};

export default Footer;