import React from "react";

const Dish = ({ id, name, description, img}) => {
  return (
    <div className="w-[300px] h-[420px] cursor-pointer group perspective preserve-3d bg-transparent">
      <div className="relative preserve-3d  bg-transparent transition-all duration-1000 group-hover:my-rotate-y-180 w-full h-full  inset-0"
      >
        {/**front content */}
        <div className="absolute backface-hidden inset-0 w-full h-full object-fit z-1"
        >
          <img src={img} alt={name} 
            className="w-full h-full object-cover rounded-xl shadow-xl shadow-black/40 z-30"
          />
        </div>
        {/**back content */}
        <div className="absolute inset-0 backface-hidden w-full h-full rounded-xl bg-black/60  px-2 pb-24 overflow-hidden my-rotate-y-180  items-center">
         <div className="text-center flex flex-col items-center justify-center h-full backface-hidden text-gray-100"
         >
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="my-4 px-2 text-ellipsis leading-tight text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dish























// const Dish = ({ id, name, description, img}) => {

//   return (
//     <div className="w-[300px] h-[420px] cursor-pointer group perspective bg-transparent">
//       <div className="relative preserve-3d  bg-transparent transition-all duration-1000 group-hover:my-rotate-y-180 w-full h-full  inset-0"
//       >
//         {/**front content */}
//         <div className="absolute backface-hidden inset-0 w-full h-full object-fit">
//           <img src={img} alt={name} 
//             className="w-full h-full object-cover rounded-xl shadow-xl shadow-black/40"
//           />
//         </div>
//         {/**back content */}
//         <div className="absolute inset-0 backface-hidden w-full h-full rounded-xl bg-black/60  px-2 pb-24 overflow-hidden items-center">
//           <div className="text-center flex flex-col items-center justify-center h-full backface-hidden text-gray-100">
//             <h1 className="text-3xl font-semibold">{name}</h1>
//             <p className="my-4 px-2 text-ellipsis leading-tight text-justify">{description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dish
