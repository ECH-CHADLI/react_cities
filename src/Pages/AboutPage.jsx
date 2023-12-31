import React from 'react'

const AboutPage = () => {
  const data = [
    {
    title: "Our Mission" ,
    description: "At [Your Website Name], our mission is to create a virtual gateway to the world's cities, allowing users to embark on a digital expedition filled with information, insights, and shared experiences. We believe that travel is not just a destination; it's a kaleidoscope of cultures, histories, and stories waiting to be unveiled."
    },
    {
    title: "City Information at Your Fingertips" ,
    description: "Our user-friendly interface puts comprehensive city information at your fingertips. Whether you're planning your next adventure or simply curious, discover everything from historical facts and local traditions to must-visit attractions and insider tips. We strive to be your one-stop resource for all things related to the cities that spark your curiosity."
    },
    {
    title: "Community-Crafted Insights" ,
    description: "What sets us apart is our vibrant community of globetrotters who generously share their experiences and insights. Read firsthand accounts, travel anecdotes, and practical tips from fellow users who have traversed the streets you're dreaming of. Their authentic perspectives transform travel planning into a collaborative and enriching experience."
    },
    {
    title: "Comment, Connect, Contribute" ,
    description: "At [Your Website Name], our mission is to create a virtual gateway to the world's cities, allowing users to embark on a digital expedition filled with information, insights, and shared experiences. We believe that travel is not just a destination; it's a kaleidoscope of cultures, histories, and stories waiting to be unveiled."
    },
  ];
  const dataReturned = data.map((e) => (
    <div key={e.title}
    className='flex justify-around items-center gap-8 mb-12'>
      <div className="flex flex-col justify-center gap-10">
        <div>
          <div class="text-2xl font-bold mb-5 relative inline-block">
              {e.title}
              <div class="absolute bg-blue-500 h-1 w-2/5 bottom-[-5px]"></div>
          </div>
          <p className="text-gray-900 text-small">
           {e.description}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="w-11/12 md:w-[60%]  mx-auto">
      <div className="flex flex-col items-center my-10">
        <div className="text-4xl font-bold mb-6 relative inline-block">
          About Us
        </div>
          <p classNameName="text-gray-900 leading-loose text-center">
          Engage with the global community by adding your own comments, sharing your adventures, or seeking advice. Whether you're a seasoned traveler or a first-time explorer, your voice matters here. Reply to comments, foster connections, and be a part of a network that transcends borders, uniting individuals with a shared passion for discovery.
          </p>
      </div>
      {dataReturned}
      <div className="text-lg text-center my-10">
        Embark on a virtual odyssey with us &ndash; your gateway to the world awaits. [Your Website Name] is where your global adventure begins. <span className='bold italic'>Bon voyage!</span>
      </div>
    </div>

  )
}

export default AboutPage