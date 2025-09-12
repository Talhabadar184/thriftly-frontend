import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-black text-sm pt-5 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-2">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="active">
                  Home/About
                </a>
              </li>
              
              <li>
                <a href="/hierarchy">Wardrobe</a>
              </li>
              
              <li>
                <a href="/contact">Get in touch</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold mb-2 text-lg">Our Location</h3>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  className="mt-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                </svg>
                Johar Town, Lahore Pakistan
              </li>
            </ul>
            {/* <p className="mt-4 text-sm">
              Avenue 1 Khayaban-e-Jinnah, Pir Mansur Johar Town,
              <br />
              Lahore, Punjab, Pakistan, 53704
            </p> */}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-[#FFa016] text-2xl mt-4 mb-6">
          <a href="">
            {/* Facebook Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
            </svg>
          </a>

          <a href="">
            {/* Instagram Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>

          <a href="">
            {/* LinkedIn Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 text-center">
          <p className="text-xs font-bold">
            © 2025 Thriftly - Pakistan. All rights
            reserved.
          </p>
          <p className="mt-1 text-xs">
            Developed &amp; Designed By Webmaster{" "}
            <a
              href="https://www.linkedin.com/in/talha-badar-312195253/"
              className="text-black font-bold hover:text-[#FFa016] transition-colors duration-300"
            >
              Talha Badar
            </a>
          </p>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-6">
          <button
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-gray-200"
            title="Back to top"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
