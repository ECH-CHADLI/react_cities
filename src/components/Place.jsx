const Place = ({activeItem, id, name, image, description}) => {
  return (
    <>
      <div className="sm:transition sm:duration-700 sm:ease-in-out overflow-hidden w-full h-full rounded-xl relative">
        <img className="object-cover w-full h-full" src={image} alt="image"/>
        <div className="bg-transparent ease-in-out absolute flex flex-col justify-start sm:justify-start w-full top-0 bottom-0 px-3 py-5 sm:invisible">
            
          <div className=" text-neutral-50">
            <p className="text-2xl font-bold tracking-wide uppercase text-primary">{name}</p>
            <p className="text-sm font-medium indent-2 text-ellipsis leading-tight sm:text-medium">{description}</p>
          </div>
        </div>
        
        <div className="invisible sm:visible bg-transparent absolute flex flex-col justify-start w-full top-0 bottom-0 px-3 py-5 ">
          {activeItem === id &&
            <div className=" text-neutral-50">
              <p className="text-2xl font-bold tracking-wide uppercase text-primary">{name}</p>
              <p className="text-sm font-medium indent-2 text-ellipsis leading-tight sm:text-medium">{description}</p>
            </div>
          }
        </div>
      </div>
    </>
      
  )
}

export default Place