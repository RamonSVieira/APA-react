import { useState } from "react";

export function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className="block cursor-pointer relative lg:hidden"
    >
      <span
        className={`block bg-white w-9 h-1 mb-2 transition-all duration-300 origin-right ${
          open ? "-rotate-43" : null
        } `}
      ></span>
      <span
        className={`block bg-white w-9 h-1 mb-2 transition-all duration-300 origin-right ${
          open ? "opacity-0" : null
        } `}
      ></span>
      <span
        className={`block bg-white w-9 h-1 transition-all duration-300 origin-right ${
          open ? "rotate-43" : null
        } `}
      ></span>
    </div>
  );
}
