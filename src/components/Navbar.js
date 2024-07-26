<<<<<<< HEAD
import React, { useContext, useState, useEffect, useRef } from 'react';
=======
import React, { useContext, useState, useEffect } from 'react';
>>>>>>> origin/main
import { Link, useHistory } from 'react-router-dom';
import Popuplogin from './Popuplogin';
import { UserContext } from '../App';
import image from "../image/work4youlogo.png";
<<<<<<< HEAD
import { FaShoppingCart, FaSearch,FaSun, FaMoon } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md"; // Use new location icon
=======
import { FaShoppingCart, FaSearch, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
>>>>>>> origin/main
import { AiFillDelete } from "react-icons/ai";
import image2 from "../Imagesmall/maidimage.jpg";
import { getUserLocation, fetchCityName } from './locationUtils';
import './styles.css';
<<<<<<< HEAD

=======
>>>>>>> origin/main
import {
  Badge,
  Button,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import { CartState } from "../reducer/Context";

const Navbar = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();

  const { state, dispatchs } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light');
  const [city, setCity] = useState('Fetching location...');
<<<<<<< HEAD
=======
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> origin/main

  useEffect(() => {
    const userHome = async () => {
      try {
        const res = await fetch('/getdata', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const data = await res.json();
        setUserName(data.name);
      } catch (err) {
        console.log(err);
      }
    };

    const updateLocation = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();
        const cityName = await fetchCityName(latitude, longitude);
        setCity(cityName);
      } catch (error) {
        setCity('Error fetching location');
      }
    };

    userHome();
    updateLocation();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme + '-theme';
  };

<<<<<<< HEAD
  
=======
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

>>>>>>> origin/main
  const searchQueryToRouteMap = {
    'driver': '/Driver',
    'babysitter': '/Babysitter',
    'cook': '/Cook',
    'homeservice': '/HomeMaid',
    'pestcontrol': '/PestControl',
    'cleaning': '/Cleaning',
  };
<<<<<<< HEAD
  
  const services = Object.keys(searchQueryToRouteMap);
  
  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestionsRef = useRef(null);
    const history = useHistory();
  
    function handleSearch(e) {
=======

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
>>>>>>> origin/main
      e.preventDefault();
      const route = searchQueryToRouteMap[searchQuery.toLowerCase()];
      if (route) {
        history.push(route);
      } else {
        console.log("Service not found");
        history.push('/notfound');
      }
<<<<<<< HEAD
    }
  
    function handleInputChange(e) {
      const query = e.target.value;
      setSearchQuery(query);
      if (query) {
        const filteredSuggestions = services.filter(service =>
          service.toLowerCase().startsWith(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : ['No match']);
      } else {
        setSuggestions(services);
      }
      setShowSuggestions(true); // Show suggestions when typing
    }
  
    function handleFocus() {
      setSuggestions(services); // Show all services on focus
      setShowSuggestions(true);
    }
  
    function handleBlur() {
      setTimeout(function () {
        setShowSuggestions(false);
      }, 150); // Delay to allow click event on suggestions
    }
  
    function handleSuggestionClick(suggestion) {
      if (suggestion !== 'No match') {
        setSearchQuery(suggestion);
        setSuggestions([]);
        setShowSuggestions(false);
        const route = searchQueryToRouteMap[suggestion.toLowerCase()];
        if (route) {
          history.push(route);
        }
      }
    }
  
    return (
      <form className="d-flex search-bar" onSubmit={handleSearch} style={{ marginRight: '3rem', position: 'relative' }}>
        <div className="input-group" style={{ position: 'relative' }}>
=======
    };

    return (
      <form className="d-flex search-bar" onSubmit={handleSearch} style={{ marginRight: '3rem' }}>
        <div className="input-group">
>>>>>>> origin/main
          <input
            type="text"
            className="form-control"
            placeholder="Search for services..."
            value={searchQuery}
<<<<<<< HEAD
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
=======
            onChange={(e) => setSearchQuery(e.target.value)}
>>>>>>> origin/main
            style={{ width: '150px', height: '20px' }}
          />
          <div className="input-group-append">
            <Button type="submit" variant="outline-success">
              <FaSearch />
            </Button>
          </div>
        </div>
<<<<<<< HEAD
        {showSuggestions && (
          <ul className="suggestions-list" ref={suggestionsRef} style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000, backgroundColor: 'white', border: '1px solid #ddd', padding: 0, margin: 0, listStyle: 'none' }}>
            {suggestions.length > 0 ? suggestions.map(function (suggestion) {
              return (
                <li
                  key={suggestion}
                  onMouseDown={function () { handleSuggestionClick(suggestion); }} // Ensure click event is handled
                  style={{ padding: '8px', cursor: 'pointer', backgroundColor: 'white' }}
                >
                  {suggestion}
                </li>
              );
            }) : (
              <li style={{ padding: '8px' }}>No match</li>
            )}
          </ul>
        )}
      </form>
    );
  };
  
  
  
=======
      </form>
    );
  };
>>>>>>> origin/main

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <form className="d-flex mr-5" style={{ marginRight: "3rem" }}>
            <NavDropdown title={userName.toUpperCase()} variant="text-warning" id="basic-nav-dropdown">
              <NavDropdown.Item href="/"><Link className="dropdown-item" to="/about">Profile</Link></NavDropdown.Item>
              <NavDropdown.Item href="/"><Link className="dropdown-item" to="/logout">Logout</Link></NavDropdown.Item>
            </NavDropdown>
          </form>
        </>
      )
    } else {
      return (
        <>
          <form className="d-flex">
            <Link className="btn btn-outline-warning mx-1" to="/register">REGISTER</Link>
            <Link className="btn btn-outline-warning mx-1" to="/login">LOGIN</Link>
          </form>
        </>
      )
    }
  };

  return (
    <>
<<<<<<< HEAD
       <nav
=======
      <nav
>>>>>>> origin/main
        className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'} nav2`}
        style={{ position: 'fixed', top: '0', width: '100%', zIndex: '9999', fontFamily: 'Poppins' }}>
        <div className="container-fluid">
          <Popuplogin />
<<<<<<< HEAD
          <button
            className={`navbar-toggler ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="margin1">
              <img src={image} alt="error" />
            </Link>
          
            
=======
          <div className="navbar-toggler-container">
            <button
              className={`navbar-toggler ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              style={{ order: 1 }}>
              <FaBars />
            </button>

            {/* {isOpen && (
           <button
           className={`navbar-close ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
           type="button"
           onClick={toggleNavbar}
           style={{
             position: 'absolute',
             right: '20px', // Adjust the spacing from the right
             top: '0',   // Adjust the spacing from the top
             border: 'none',
             background: 'none',
             fontSize: '24px', // Adjust the size as needed
             cursor: 'pointer',
             zIndex: '1000',  // Ensure it appears above other content
             boxShadow: 'none' // Remove box shadow
           }}
         >
           <FaTimes />
         </button>
         
            )} */}
          </div>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent" style={{ order: 2 }}>
            <Link to="/" className="margin1">
              <img src={image} alt="error" />
            </Link>
>>>>>>> origin/main

            <ul className="navbar-nav mx-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active hover-underline-animation margin1 w3-animate-top" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-underline-animation margin w3-animate-top" to="/aboutus">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-underline-animation margin w3-animate-top" to="/homemaid">HOME SERVICE</Link>
              </li>
<<<<<<< HEAD
             
=======

>>>>>>> origin/main
              <li className="nav-item dropdown margin w3-animate-top">
                <Link className="nav-link" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                  APPLY FOR JOB
                </Link>
                <ul className="dropdown center animated2 animatedFadeInUp2 fadeInUp2" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item zoom" to="/contact">Professionals</Link></li>
                  <li><Link className="dropdown-item zoom" to="/locals">Locals</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown hover-underline-animation margin white w3-animate-top">
                <Link className="nav-link" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                  SUPPORT
                </Link>
                <ul className="dropdown center animated2 animatedFadeInUp2 fadeInUp2" aria-labelledby="navbarDropdown" style={{ background: "#c5c3c3" }}>
                  <li><Link className="dropdown-item zoom" to="/contactus">CONTACT US</Link></li>
                  <li><Link className="dropdown-item zoom" to="/touch">FEEDBACK</Link></li>
                </ul>
              </li>
            </ul>
<<<<<<< HEAD
            {/* Location icon with city name */}
            <div className="navbar-location" style={{ display: 'flex', alignItems: 'center', marginRight: '2rem', color: theme === 'dark' ? 'white' : 'black' }}>
              <MdLocationOn size={20} /> {/* Changed icon */}
              <span style={{ marginLeft: '0.5rem' }}>{city}</span>
            </div>
            {/* Include the SearchBar component */}
            <SearchBar />

            

            <Dropdown alignRight>
              <Dropdown.Toggle variant="btn btn-primary mr-3" style={{ width: "4rem", marginRight: "1rem" }}>
=======
            <div className="navbar-location" style={{ display: 'flex', alignItems: 'center', marginRight: '2rem', color: theme === 'dark' ? 'white' : 'black' }}>
              <MdLocationOn size={20} />
              <span style={{ marginLeft: '0.5rem' }}>{city}</span>
            </div>
            <SearchBar />
            <Dropdown alignRight>
              <Dropdown.Toggle variant="btn btn-primary mr-3" style={{ width: "5rem", marginRight: "1rem" }}>
>>>>>>> origin/main
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <div className="d-flex mt-2" key={prod.id}>
                        <div className='mx-4'>
                          <img
                            src={image2}
                            className="card-img-small2 mt-2"
                            alt={prod.name}
                          />
                        </div>
                        <div className="cartItemDetail" style={{ marginLeft: '-2rem' }}>
                          <ul>
                            <li>Name: {prod.name}</li>
                            <li>Service: {prod.service}</li>
                            <li>Price: ₹{prod.price}</li>
                          </ul>
                        </div>
                        <AiFillDelete
                          className='mx-5 mt-4'
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </div>
                    ))}
                    <hr></hr>
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Button
<<<<<<< HEAD
             className={`toggle ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
              variant="transparent"
             onClick={toggleTheme}
           style={{ marginRight: '1rem', width:'50px' }}
>
  {theme === 'dark' ? <FaSun color="#ffffff" /> : <FaMoon color="#000000" />}
</Button>
=======
              className={`toggle ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
              variant="transparent"
              onClick={toggleTheme}
              style={{ marginRight: '1rem', width: '50px' }}
            >
              {theme === 'dark' ? <FaSun color="#ffffff" /> : <FaMoon color="#000000" />}
            </Button>
>>>>>>> origin/main
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
