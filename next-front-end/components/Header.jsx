import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import logo from "../src/images/logo.png";

const Header = () => {
    return (
      
        <div class="container mx-auto bg-black w-full">
          <div class="navbar flex flex-col items-center md:flex-row justify-between">
            <div class="logo flex items-center">
              <img
                src={logo.src}
                alt="Nodes hunter logo"
                className="ml-2 md:ml-5 h-10 md:h-40"
              />
              <div class="container">
                <p class="font-cursive text-xl md:text-3xl font-bold uppercase tracking-wider text-yellow-300 text-glow ml-2 md:ml-5">
                  Help me code
                </p>
              </div>
            </div>
            <div class="sm:px-6 lg:px-8 mb-5 text-center mt-5 md:mt-0">
              <a
                target="_blank"
                href="https://github.com/soos3d/help-me-code-ai-backend"
                class="github-button bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-3 md:px-4 rounded-full mr-2 md:mr-5"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/web3Dav3"
                class="twitter-button bg-gray-800 hover:bg-gray-900 border border-zinc-50 text-white font-bold py-2 px-3 md:px-4 rounded-full mr-2 md:mr-5"
              >
                <i class="fab fa-twitter"></i>{" "}
              </a>
            </div>
          </div>
        </div>

       
  );
};

export default Header;