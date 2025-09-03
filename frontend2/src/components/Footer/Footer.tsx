import { FaXTwitter, FaDiscord, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-bgPrimaryColor ">

        <div className="flex justify-between items-center pt-8 pb-2 px-24">
          <div className="flex space-x-4">
            <FaXTwitter className="text-2xl text-primaryColor hover:text-[#14171A] cursor-pointer " />
            <FaDiscord className="text-2xl text-primaryColor hover:text-[#7289da] cursor-pointer " />
            <FaInstagram className="text-2xl text-primaryColor hover:text-[#E1306C] cursor-pointer " />
          </div>
          <div className="flex space-x-4 text-white text-sm">
            <span className="hover:text-primaryColor hover:underline cursor-pointer">Términos y condiciones</span>
            <span className="hover:text-primaryColor hover:underline cursor-pointer">Política de privacidad</span>
          </div>
        </div>
        <div className="flex justify-center pt-2 pb-4">
          <span className="text-gray-400 text-sm">&copy; Copyright 2024 | All rights reserved</span>
        </div>
      </div>
    </>
  );
}
