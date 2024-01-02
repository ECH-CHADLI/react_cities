import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cities } from '../data/city';

const SearchBar = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Navigate to the link when the form is submitted
    if (value.trim() !== '') {
      navigate(`/cities/${value}`);
    }
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const [value, setValue] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(value.toLowerCase())
  );

  const clickCard = (cityName) => {
    console.log('yaas')
    setValue(cityName)
    window.location.href =` /cities/${cityName}`; 
  }

  return (
    <div className=" relative flex flex-col  justify-center w-[50%]">
       <form onSubmit={handleFormSubmit} className= 'flex bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-neutral-500 '>
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-2 pr-4 mb-66 py-2 "
        onFocus={toggleDropdown}
        onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)}
        value = {value}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className=" top-2.5 px-2 text-gray-400 hover:text-blue-500"
        onClick={toggleDropdown}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      </form>
      {/* Dropdown list */}
      {isDropdownVisible && (
        <ul className="absolute top-11 z-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md overflow-hidden">
          { value === "" ? 
           cities.map((city) => (
            <li
            key={city.id}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
            <div className='flex items-center justify-between' onClick={() => clickCard(city.name)}>
                  <img src={city.destinations[0].image} alt="city image"
                  className='w-12 h-12'/>
                  <div className=''>{city.name}</div>
              </div>
            </li>
          ))
        :filteredCities.map((city) => (
          <li
            key={city.id}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {/* <Link to={/cities/${city.name}}> 
              <div className='flex items-center justify-between'>
                  <img src={city.destinations[0].image} alt="city image"
                  className='w-12 h-12'/>
                  <div className=''>{city.name}</div>
              </div>
            </Link> */}
            <div className='flex items-center justify-between' onClick={() => clickCard(city.name)}>
                  <img src={city.destinations[0].image} alt="city image"
                  className='w-12 h-12'/>
                  <div className=''>{city.name}</div>
              </div>
          </li>
        ))
        }
        </ul>
      )}
    </div>
  );
};

export default SearchBar;