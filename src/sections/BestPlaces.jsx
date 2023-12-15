import React from "react"
import Place from "../components/Place"
const BestPlaces = ({destinations}) => {
  // const places = [
  //   {
  //     id: 1, 
  //     name: "Place1",
  //     image: "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/02/DONE_Camels-rides-amongst-the-Sahara-sand-dunes-of-erg-Chebbi-Morocco_Credit_Alamy_T6JKJG.jpg",
  //     description: "As the sun sets, the square transforms into a captivating night market, where locals and tourists gather to enjoy traditional Moroccan cuisine, live music, and the enchanting energy of this iconic public space."
  //   },{
  //     id: 2, 
  //     name: "Place1",
  //     image: "https://blog.green-acres.com/wp-content/uploads/2017/08/marrakech.jpg",
  //     description: "As the sun sets, the square transforms into a captivating night market, where locals and tourists gather to enjoy traditional Moroccan cuisine, live music, and the enchanting energy of this iconic public space."
  //   },{
  //     id: 3, 
  //     name: "Place1",
  //     image: "https://www.moroccoworldnews.com/wp-content/uploads/2015/03/Rabat-Best-City-to-Live-in-Morocco-Survey-1024x635.jpg",
  //     description: "As the sun sets, the square transforms into a captivating night market, where locals and tourists gather to enjoy traditional Moroccan cuisine, live music, and the enchanting energy of this iconic public space."
  //   },{
  //     id: 4, 
  //     name: "Place1",
  //     image: "https://images.locationscout.net/2021/01/mann-in-chefchaouen-morocco-lt29.webp?h=1400&q=83",
  //     description: "As the sun sets, the square transforms into a captivating night market, where locals and tourists gather to enjoy traditional Moroccan cuisine, live music, and the enchanting energy of this iconic public space."
  //   },{
  //     id: 5, 
  //     name: "Place1",
  //     image: "https://www.tripsavvy.com/thmb/0O2XnCD1D1-MPltQk30kKTEtMHA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/city-walls--lighthouse-and-harbor-in-melilla--925721132-d5365e5eb9964e8daa16e4c414277d8e.jpg",
  //     description: "As the sun sets, the square transforms into a captivating night market, where locals and tourists gather to enjoy traditional Moroccan cuisine, live music, and the enchanting energy of this iconic public space."
  //   }
  // ]
  //an active item have a specific width
  const [activeItem, setActiveItem] = React.useState(3);
  // const wrapperRef = React.useRef<HTMLUListElement | null>(null);
  // React.useEffect(()=>{
  //   //if the ref attribute is not set yet
  //   if(!wrapperRef.current) return; 
  //   wrapperRef.current.style.setProperty(
  //     "--transition",
  //     "600ms cubic-beizer(0.22, 0.61, 0.36, 1)"
  //   )
  // },[activeItem]);
  // {/*ref={wrapperRef}*/}
  return (
    <div className="bg-white p-4">
      <div className="text-3xl font-bold py-10 ml-8">Explore the city by visting its stunning <span className="uppercase">landscapes</span></div>
      <div className="w-full py-6">
        <ul 
          className="w-full flex flex-col gap-3 sm:flex-row justify-center sm:gap-[1.5%] group">
          {destinations.map((place) => (
            <li 
              aria-current={activeItem === place.id}
              className="mx-auto w-[80%] sm:w-[11%] sm:first:w-[8%] sm:last:w-[8%] sm:opacity-90
              sm:hover:w-[14%] overflow-hidden sm:[&[aria-current='true']]:w-[42%]  [&  h-[450px]  hover:opacity-100 sm:transition-[width] sm:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[16%] sm:ease-in" key="place.id"
              onMouseOver={() => setActiveItem(place.id)}
              onMouseOut={() => setActiveItem(3)}
            >
                <Place activeItem={activeItem} id={place.id} name={place.name} image={place.image} description={place.description}
            /></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BestPlaces