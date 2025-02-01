"use client";
import close from "@/public/assets/icons/close.svg";
import { useRef } from "react";

const Header = () => {
  const offreRef = useRef();
  return (
    <div className="flex flex-col">
      <div className="bg-main flex justify-center" ref={offreRef}>
        <div className="text-body-s font-body-s w-full max-w-[1440px] flex justify-between px-spacing-s py-spacing-xs lg:max-h-[36px] lg:px-spacing-xl">
          <div className="space-y-4">
            <p>
              {"🍕 "}
              <a
                href="https://brandyour.co/products/pizza-boxes"
                target="_blank"
                rel="noreferrer"
                className="underline break-words"
              >
                New Pizza Box options! Lower minimums, improved pricing
              </a>
              !
            </p>
          </div>
          <button
            className="shrink-0"
            onClick={() => {
              offreRef.current.style.display = "none";
            }}
          >
            <img
              src={close.src}
              alt="close"
              className="size-[10px] cursor-pointer"
            />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
