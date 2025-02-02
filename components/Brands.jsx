import brands from "@/public/assets/brands";

const Brands = () => {
  const shuffledBrands = brands.sort(() => 0.5 - Math.random());
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-16  px-4 py-12 lg:px-10">
      <div className="flex gap-10 w-full overflow-hidden">
        <div className="flex shrink-0 grow-0 animate-marquee items-center gap-10">
          {shuffledBrands.map((brand, index) => (
            <img key={index} src={brand.src} className="h-12 w-32" />
          ))}
        </div>
        <div className="flex shrink-0 grow-0 animate-marquee items-center gap-10">
          {shuffledBrands.map((brand, index) => (
            <img key={index} src={brand.src} className="h-12 w-32" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
