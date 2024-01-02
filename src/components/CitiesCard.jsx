// CitiesCard.js
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CitiesCard = () => {
  return (
    <div className="flex justify-center  items-center ">
      <div className="bg-white p-4 md:p-5 lg:p-12 shadow-md rounded-md md:w-7/8 lg:w-6/7 xl:w-5/6 mb-4 overflow-hidden">
      <div id='slider' className='w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth'>
      <img
            src="https://c8.alamy.com/comp/CRC8DM/places-travel-concept-isolated-word-in-vintage-letterpress-wood-type-CRC8DM.jpg"
            
            className=" w-full h-[300px] object-cover"
          />
        <div className="flex space-x-4 overflow-x-auto">
          <img
            src="https://th.bing.com/th/id/R.df09e1d7e3fde9f178b6be3bf0396e8b?rik=57HJaBUKEC1eSw&riu=http%3a%2f%2fevasion-online.com%2fimagearticle%2f2016%2f10%2fcity-view-of-agadir-morocco1.jpg&ehk=88iV7hG7GaF498BB4Rb1Ah%2bn5eVhVIPU8H18gphkfz8%3d&risl=&pid=ImgRaw&r=0.jpg"
            alt="Ville 1"
            className="mb-2 w-full h-40 object-cover"
          />
          <img
            src="https://th.bing.com/th/id/R.f5d4bbb9b687f25a9ff0f91a2d3877fe?rik=7nWPFBIf9hVKGA&riu=http%3a%2f%2fwww.actualites-fr.com%2fwp-content%2fuploads%2f2013%2f06%2fmarrakech.jpg&ehk=xBO9Vvg%2b85Bcpnp8Oi%2fXjBlX8h%2bf0ICqKZrAuXsInXk%3d&risl=&pid=ImgRaw&r=0.jpg"
            alt="Ville 2"
            className="mb-2 w-full h-40 object-cover"
          /> 
          <img
          src="https://riadalkemia.com/wp-content/uploads/2021/02/marrakesh-weather2.jpg"
          alt="Ville 3"
          className="mb-2 w-full h-40 object-cover"
        />
         <img
            src="https://th.bing.com/th/id/R.c4551cf93e30cad7319ca9f4dc3b93fa?rik=rtnXZ%2fzPIyaN8Q&pid=ImgRaw&r=0"
            alt="Ville 4"
            className="mb-2 w-full h-40 object-cover"
          />
           <img
            src="https://th.bing.com/th/id/R.7d39bb802e233571d05ecb06ca66f448?rik=nJNLObhkLmsoYQ&riu=http%3a%2f%2fwww.stars-media.fr%2fwp-content%2fuploads%2f2015%2f03%2fcity-of-dakhla.jpg&ehk=LCUJby5tOv%2fwSAXCv8nVNf0z91BQOMWtDbuLNIX%2bk4M%3d&risl=1&pid=ImgRaw&r=0"
            alt="Ville 5"
            className="mb-2 w-full h-40 object-cover"
          />
           <img
            src="https://4.bp.blogspot.com/-loIwjoRPPA0/V8YOC1yvbjI/AAAAAAAARHw/VTvshs69hJc37Y5Om6JumMTxWrI9vlIJACLcB/s1600/10606485_680957328667100_4695536614997065883_n.jpg"
            alt="Ville 6"
            className="mb-2 w-full h-40 object-cover"
          />
         </div>
        </div>
       
        
      </div>
      
    </div>
   
  );
}

export default CitiesCard;
// CitiesCard.js
/*import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CitiesCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 md:p-5 lg:p-12 shadow-md rounded-md md:w-5/6 lg:w-4/5 xl:w-3/4 mb-4 overflow-hidden">
        <MdChevronLeft size={40} />
        <div id="slider" className="w-full h-full">
          <Slider {...settings}>
            <img
              src="https://th.bing.com/th/id/R.0ca2891c8fad7dad0801dee4dfa8e410?rik=6hYltcLHz6Lomg&riu=http%3a%2f%2fstatic9.depositphotos.com%2f1533960%2f1232%2fi%2f950%2fdepositphotos_12328044-stock-photo-place-word-of-gold-puzzle.jpg&ehk=1FQGHFnc4o6vA7t0NeW5chuXbLv2ERMSDuxIL2nQ3y0%3d&risl=&pid=ImgRaw&r=0"
              alt="Ville 1"
              className="mb-2 w-full h-40 object-cover"
            />
           
          </Slider>
        </div>
        <MdChevronRight size={40} />
      </div>
    </div>
  );
}

export default CitiesCard;*/

