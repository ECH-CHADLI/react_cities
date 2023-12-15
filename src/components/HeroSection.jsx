export default function HeroSection() {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_10px_40px_-7px] mb-12">
      <div className="flex bg-white h-96 container mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl mb-4">
              Welcome to <span className="text-blue-600">Trippy</span>
            </h2>
            <p className="mt-2 text-lg text-gray-500">
              Welcome to our enchanting world of exploration! Embark on a
              journey of discovery with our app, where the wonders of diverse
              cities and captivating destinations await. Immerse yourself in the
              rich tapestry of global cultures, effortlessly navigating through
              countries to unveil a treasure trove of information, making each
              search a step closer to your next unforgettable adventure
            </p>
            <div className="flex justify-center lg:justify-start mt-6"></div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url('https://familyvacationist.com/wp-content/uploads/2020/09/rv-road-trip-shutterstock.jpg')`,
              backgroundSize: "cover",
            }}
          >
            <div className="h-full bg-black opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
