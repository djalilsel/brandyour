"use client";
import close from "@/public/assets/icons/close.svg";

const AcceptCookies = () => {
  return (
    <div className="fixed bottom-2 left-[calc(50%_-_180px)] z-[200] w-[360px]  overflow-hidden rounded-2xl bg-[rgb(245,245,245,1)] shadow lg:left-2 transform translate-x-0 animate-slide-in transition-transform duration-300">
      <div className="flex max-w-[360px] flex-col gap-4 p-6 sticky bottom-0 ">
        <h3 className="text-body-s font-body-s">
          <div className="space-y-4">
            Cookies make our site work better for you. Clicking 'Accept' lets us
            enhance your experience and show you more relevant content. View our{" "}
            <a
              href="https://brandyour.co/privacy-policy"
              target="_blank"
              className="break-words underline"
            >
              Privacy Policy
            </a>{" "}
            for more information.
          </div>
        </h3>
        <div className="flex gap-2">
          <button
            className="text-body-m font-body-s flex items-center justify-center transition-all duration-300 ease-in-out w-fit rounded-[47px] bg-transparent border border-black px-spacing-m px-4 py-2"
            onClick={(e) => {
              e.preventDefault();
              const parent = e.target.parentElement.parentElement.parentElement;
              parent.style.display = "none";
            }}
          >
            Decline
          </button>
          <button
            className="text-body-m font-body-s flex items-center justify-center transition-all duration-300 ease-in-out w-fit rounded-[47px] bg-main text-black px-spacing-m px-4 py-2"
            onClick={(e) => {
              e.preventDefault();
              const parent = e.target.parentElement.parentElement.parentElement;
              parent.style.display = "none";
            }}
          >
            Accept
          </button>
        </div>
        <button
          className="absolute top-4 right-4"
          onClick={(e) => {
            e.preventDefault();
            const parent = e.target.parentElement.parentElement;
            parent.style.display = "none";
          }}
        >
          <img src={close.src} className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default AcceptCookies;
