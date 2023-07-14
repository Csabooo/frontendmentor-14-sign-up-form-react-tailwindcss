import React from "react";

function Header() {
  return (
    <div>
      <img
        className="object-cover w-96 bg-cover lg:hidden"
        src="../images/illustration-sign-up-mobile.svg"
        alt="mobile-illustration"></img>

      <img
        className="hidden lg:block lg:h-full"
        src="../images/illustration-sign-up-desktop.svg"
        alt="desktop-illustration"></img>
    </div>
  );
}

export default Header;
