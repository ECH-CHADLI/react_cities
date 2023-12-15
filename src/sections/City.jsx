const City = ({id, name, country,  currency, timezone, language, culture1, culture2}) => {
  return (
    <div className="p-4 shadow-lg   bg-neutral-100">
      <div className="w-full inset-0 p-6  flex flex-col gap-3 items-center justify-evenly  text-black">
          <div className="text-xl
           font-bold my-6"><span className="text-4xl">{name}</span> <span className="mr-3">,</span> <span className="text-4xl">{country}</span></div>
          <p className="font-base mx-auto indent-4 decoration-1 font-semibold">Welcome to <span className="text-lg italic ">{name}</span>, where tradition meets modernity in a dynamic blend. The <span className="text-lg italic">{currency}</span> fuels a bustling economy, and the city's heartbeat follows its unique <span className="text-lg italic ">{timezone}</span>, ensuring a constant buzz from dawn till dusk and beyond.
          In this cosmopolitan hub, <span className="text-lg italic">{language}</span> resonates, creating a rich tapestry of communication. The local tongue weaves through the air, reflecting the city's inclusive identity.

          Cultural diversity is not just celebrated; it's lived. <span className="text-lg italic">{name}</span> boasts a kaleidoscope of cultures, each contributing to a unique blend that defines the city. From <span className="text-lg italic">{culture1}</span> to <span className="text-lg italic">{culture2}</span>, every aspect tells the story of a city that cherishes its heritage while embracing change.
          Step into <span className="text-lg italic">{name}</span>, and you step into a living entity, pulsating with the energy of its people and the fusion of traditions and innovation. It's an invitation to explore a compact world that packs a punch of history, culture, and contemporary flair.</p>
      </div>
    </div>
  )
}

export default City