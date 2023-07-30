import React from "react";
import sign_up_mobile from "../images/illustration-sign-up-mobile.svg";
import sign_up_desktop from "../images/illustration-sign-up-desktop.svg";

function Header() {
  return (
    <div>
      <img
        className="object-cover w-96 bg-cover lg:hidden"
        src={sign_up_mobile}
        alt="mobile-illustration"></img>

      <img
        className="hidden lg:block lg:h-full"
        src={sign_up_desktop}
        alt="desktop-illustration"></img>
    </div>
  );
}

export default Header;
