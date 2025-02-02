"use client";
import close from "@/public/assets/icons/close.svg";
import logos from "@/public/assets/logos";
import chevronDown from "@/public/assets/icons/chevron-down.svg";
import account from "@/public/assets/icons/account.svg";
import search from "@/public/assets/icons/search.svg";
import BespokePage from "@/public/assets/icons/BespokePage.svg";
import BurgerBox from "@/public/assets/icons/BurgerBox.svg";
import CoffeeCup from "@/public/assets/icons/CoffeeCup.svg";
import IceCream from "@/public/assets/icons/IceCream.svg";
import PaperBag from "@/public/assets/icons/PaperBag.svg";
import Sticker from "@/public/assets/icons/Sticker.svg";

import { useEffect, useRef, useState } from "react";

const Header = () => {
  const offreRef = useRef();
  const linksRef = useRef();
  const searchButtonRef = useRef();
  const [logoIndex, setLogoIndex] = useState(0);
  const searchIndex = useRef(0);
  useEffect(() => {
    const rotateSearch = () => {
      if (!searchButtonRef.current) return;

      const children = searchButtonRef.current.children;
      if (searchIndex.current === 0) {
        children[searchButtonRef.current.children.length - 1]?.classList.remove(
          "translate-y-[-100%]"
        );
        children[searchButtonRef.current.children.length - 1]?.classList.add(
          "translate-y-full"
        );
      } else {
        children[searchIndex.current - 1]?.classList.remove(
          "translate-y-[-100%]"
        );
        children[searchIndex.current - 1]?.classList.add("translate-y-full");
      }

      children[searchIndex.current].classList.add(
        "translate-y-[-100%]",
        "opacity-0"
      );
      children[searchIndex.current].classList.remove(
        "translate-y-0",
        "opacity-100"
      );

      searchIndex.current =
        (searchIndex.current + 1) % searchButtonRef.current.children.length;

      children[searchIndex.current].classList.remove("translate-y-full");
      children[searchIndex.current].classList.add(
        "opacity-100",
        "translate-y-0"
      );
    };
    const searchInterval = setInterval(rotateSearch, 2000);
    return () => {
      clearInterval(searchInterval);
    };
  }, []);
  return (
    <div className="flex flex-col border-b border-border-grey bg-white sticky top-0 z-50">
      <div className="bg-main min-h-1">
        <div
          ref={offreRef}
          className="mx-auto text-body-s font-body-s w-full max-w-max-screen flex justify-between gap-3 py-spacing-xs px-spacing-s lg:px-spacing-xl lg:max-h-[36px] "
        >
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
              offreRef.current.parentElement.classList.add("aboslute");
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
      <div>
        <div className="max-w-max-screen mx-auto">
          <div className="border-b border-border-grey mx-spacing-s lg:mx-spacing-xl flex justify-between">
            <button type="button" className="flex items-center gap-4 lg:hidden">
              <div className="relative h-6 w-6 flex-col">
                <span className="absolute left-0 top-[3.5px] h-[2.25px] w-6 rounded-lg bg-black transition-all duration-500 ease-in-out"></span>
                <span className="absolute left-0 top-1/2 h-[2.25px] w-6 -translate-y-1/2 rounded-lg bg-black transition-all duration-700 ease-in-out"></span>
                <span className="absolute left-0 top-1/2 h-[2.25px] w-6 -translate-y-1/2 rounded-lg bg-black transition-all duration-700 ease-in-out"></span>
                <span className="absolute bottom-[3.5px] left-0 h-[2.25px] w-6 rounded-lg bg-black transition-all duration-500 ease-in-out"></span>
              </div>
            </button>
            <div className="flex gap-4 lg:gap-8">
              <a href="/" className="py-spacing-s ml-4 lg:ml-0">
                <img
                  src={logos.logos[logoIndex].src}
                  alt="logo"
                  onMouseOver={() => {
                    setLogoIndex((prev) => (prev + 1) % logos.logos.length);
                  }}
                />
              </a>
              <ul
                ref={linksRef}
                className="hidden lg:flex text-body-m font-[600] group"
              >
                <li
                  className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 py-spacing-s px-spacing-s cursor-pointer"
                  // onMouseEnter={(e) => focusLink(linksRef.current, e)}
                >
                  Shop All
                </li>
                <li
                  className="transition-opacity duration-300 ease-in-out hover:!opacity-100 py-spacing-s px-spacing-s flex items-center gap-2 cursor-pointer group-hover:opacity-50"
                  // onMouseEnter={(e) => focusLink(linksRef.current, e)}
                >
                  <span>Industry</span>{" "}
                  <img src={chevronDown.src} className="size-4" />
                </li>
                <li
                  className="transition-opacity duration-300 ease-in-out hover:!opacity-100 py-spacing-s px-spacing-s flex items-center gap-2 cursor-pointer group-hover:opacity-50"
                  // onMouseEnter={(e) => focusLink(linksRef.current, e)}
                >
                  <span>Learn</span>{" "}
                  <img src={chevronDown.src} className="size-4" />
                </li>
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <button className="flex items-center gap-2 lg:border-b border-border-grey lg:pb-1 lg:w-[250px] overflow-hidden">
                <img src={search.src} />
                <div className="gap-1 text-body-s font-body-s hidden lg:flex">
                  <div>Search for</div>
                  <div ref={searchButtonRef} className="relative h-full">
                    <div className="absolute left-0 top-0 w-full transition-all duration-1000 ease-in-out translate-y-0 opacity-100 text-nowrap">
                      burger box
                    </div>
                    <div className="absolute left-0 top-0 w-full transition-all duration-1000 ease-in-out translate-y-full opacity-0 text-nowrap">
                      coffee cup
                    </div>
                    <div className="absolute left-0 top-0 w-full transition-all duration-1000 ease-in-out translate-y-full opacity-0 text-nowrap">
                      ice cream
                    </div>
                    <div className="absolute left-0 top-0 w-full transition-all duration-1000 ease-in-out translate-y-full opacity-0 text-nowrap">
                      paper
                    </div>
                    <div className="absolute left-0 top-0 w-full transition-all duration-1000 ease-in-out translate-y-full opacity-0 text-nowrap">
                      paper bag
                    </div>
                  </div>
                </div>
              </button>
              <img
                src={account.src}
                className="cursor-pointer hidden lg:block"
              />
              <div className="flex gap-2 cursor-pointer">
                <div className="text-body-m font-body-s">Cart</div>
                <span className="flex h-5 w-5 bg-main items-center justify-center rounded-full text-xs">
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 hidden lg:flex group">
            <button className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 flex gap-2 p-spacing-s items-center body-m font-body-m tt-commons">
              <img src={CoffeeCup.src} className="size-4" />
              <span>Drinks</span>
            </button>
            <button className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 flex gap-2 p-spacing-s items-center body-m font-body-m tt-commons">
              <img src={BurgerBox.src} className="size-4" />
              <span>Mains</span>
            </button>
            <button className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 flex gap-2 p-spacing-s items-center body-m font-body-m tt-commons">
              <img src={IceCream.src} className="size-4" />
              <span>Desserts</span>
            </button>
            <button className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 flex gap-2 p-spacing-s items-center body-m font-body-m tt-commons">
              <img src={PaperBag.src} className="size-4" />
              <span>Bags</span>
            </button>
            <button className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 flex gap-2 p-spacing-s items-center body-m font-body-m tt-commons">
              <img src={Sticker.src} className="size-4" />
              <span>Accessories</span>
            </button>
            <button className="transition-opacity duration-300 ease-in-out hover:!opacity-100 group-hover:opacity-50 flex gap-2 p-spacing-s items-center body-m font-body-s">
              <img src={BespokePage.src} className="size-4" />
              <span>Bespoke</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
