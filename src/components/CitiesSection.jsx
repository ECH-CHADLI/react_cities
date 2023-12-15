import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CitiesSection = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <p className="my-8 mx-6 text-2xl text-blue-600 font-bold text-center">
        Discover enchanting destinations grouped by country. Your next adventure
        is just a click away!
      </p>
      <div className="relative flex items-center justify-center mb-32 h-[350px] ">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="cursor-pointer opacity-20 hover:opacity-50"
        />
        <div
          id="slider"
          className=" w-[90%] max-w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {countries.map((country) => (
            <div
              key={country.name}
              className="w-[220px] h-72 inline-block m-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-lg relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              style={{
                backgroundImage: `url('${country.img_url}')`,
                backgroundSize: "cover",
              }}
            >
              <h2 className="float-left text-white text-2xl font-bold pl-2">
                {country.name}
              </h2>
              <button className="absolute bottom-2 right-2 bg-[#F5F5F5] px-3 py-1.5 rounded-xl text-md font-semibold mb-1 mr-2 hover:bg-[steelblue] hover:text-[#F5F5F5] hover:ease-in-out duration-500">
                View
              </button>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="cursor-pointer opacity-20 hover:opacity-50"
        />
      </div>
    </>
  );
};

const countries = [
  {
    name: "Morocco",
    img_url:
      "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1116613160v2.jpg",
  },
  {
    name: "Italy",
    img_url:
      "https://plus.unsplash.com/premium_photo-1676387918563-226b17938d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXRhbGllfGVufDB8fDB8fHww",
  },
  {
    name: "Australia",
    img_url:
      "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVzdHJhbGlhfGVufDB8fDB8fHww",
  },
  {
    name: "France",
    img_url:
      "https://images.unsplash.com/photo-1603378995290-8d4ce0495ddd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "USA",
    img_url:
      "https://images.unsplash.com/photo-1576606970009-7ddc4229ced7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Japan",
    img_url:
      "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGphcGFufGVufDB8fDB8fHww",
  },
  {
    name: "Sweden",
    img_url:
      "https://i.guim.co.uk/img/media/1fe0edeb42874fcf6382f300f0fd95e85f46b818/29_389_5413_3248/master/5413.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=00788cd3e8adf44d799de8f50432d287",
  },
];

export default CitiesSection;
