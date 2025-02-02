import hero_image from "@/public/assets/hero_image_1500.avif";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import stickers from "@/public/assets/reusable/stickers.png";
import CoffeeCup from "@/public/assets/icons/CoffeeCup.svg";

const Hero = () => {
  return (
    <div className="mx-auto flex max-w-max-screen flex-col gap-2 items-stretch px-4 py-6 lg:h-[calc(100vh-150px-36px)] lg:max-h-[648px] lg:px-spacing-xl justify-start lg:flex-row-reverse">
      <div className="relative w-full">
        <div className="relative rounded-full h-[100px] w-[100px] !absolute -left-[50px] top-8 hidden lg:block">
          <img
            src={stickers.src}
            className="w-full h-full  animate-spin-very-slow"
          />
          <img
            src={CoffeeCup.src}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 h-[33px] w-[33px] invert"
          />
        </div>
        <img
          src={hero_image.src}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-6 rounded-2xl px-6 py-8 lg:max-w-[552px] lg:px-10 bg-main w-full">
        <h2 className="text-heading-l heading-l max-w-[310%] lg:max-w-[80%]">
          Make Your Brand The Total Package
        </h2>
        <p className="text-body-l hidden sm:block">
          Be unforgettable with your own fully customisable packaging. Hiqh
          quality, low minimums and delivered pronto. All in just a couple of
          clicks.
        </p>
        <a href="https://brandyour.co/collections/all" target="_blank">
          <button className="gap-[16px] group flex items-center justify-center transition-all duration-300 ease-in-out w-fit rounded-[47px] bg-white py-3 px-spacing-m  mt-2 invert">
            <img
              src={arrowRight.src}
              className="transition-all duration-300 ease-out group-hover:translate-x-1"
            />
            <span className="text-body-m tt-commons">Shop products</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
