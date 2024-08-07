import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import image from "../image/work4youlogo.png";
import { FaShoppingCart, FaSearch, FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import image2 from "../Imagesmall/maidimage.jpg";
import { getUserLocation, fetchCityName } from './locationUtils';
import './styles.css';
import { Badge, Button, Dropdown, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { CartState } from "../reducer/Context";

const MyNavbar = () => {
  const { state: { cart }, dispatch } = CartState();
  const { state } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('light');
  const [city, setCity] = useState('Fetching location...');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  const history = useHistory();
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null); // Manage which dropdown is open

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

  const searchQueryToRouteMap = {
    'Driver': '/driver',
    'Babysitter': '/babycare',
    'Cooking': '/cooking',
    'Homeservice': '/homemaid',
    'Pest': '/pest',
    'Cleaning': '/clean',
    'Painter': '/paint',
    'Carpenter': '/carpenter'
  };

  const services = Object.keys(searchQueryToRouteMap);

  useEffect(() => {
    // Reset search query when navigating to the home page
    if (history.location.pathname === '/') {
      setSearchQuery('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [history.location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    const route = searchQueryToRouteMap[searchQuery];
    if (route) {
      history.push(route);
    } else {
      history.push('/notfound');
    }
    setIsNavbarCollapsed(true); // Close the navbar after search
  }

  const handleInputChange = (e) => {
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
    setShowSuggestions(true);
  }

  const handleFocus = () => {
    setSuggestions(services);
    setShowSuggestions(true);
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 150);
  }

  const handleSuggestionClick = (suggestion) => {
    if (suggestion !== 'No match') {
      setSearchQuery(suggestion);
      setSuggestions([]);
      setShowSuggestions(false);
      const route = searchQueryToRouteMap[suggestion];
      if (route) {
        history.push(route);
      }
      setIsNavbarCollapsed(true); // Close the navbar after clicking a suggestion
    }
  }

  const handleClearSearch = (e) => {
    e.stopPropagation(); // Prevents the click from bubbling up to parent elements
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    history.push('/'); // Redirect to home page
    setIsNavbarCollapsed(true); // Close the navbar after clearing search
  }

  const handleNavLinkClick = () => {
    setIsNavbarCollapsed(true); // Collapse the navbar when a link is clicked
  };

  const handleDropdownClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleDropdownItemClick = (path) => {
    history.push(path);
    setIsNavbarCollapsed(true); // Close the navbar after clicking a dropdown item
    setOpenDropdown(null); // Close the dropdown
  };

  const RenderMenu = () => {
    if (state) {
      return (
        <NavDropdown title={userName.toUpperCase()} id="basic-nav-dropdown" onClick={handleNavLinkClick}>
          <NavDropdown.Item as={Link} to="/about" onClick={handleNavLinkClick}>Profile</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/logout" onClick={handleNavLinkClick}>Logout</NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
        <>
          <Link className="btn btn-outline-warning mx-1" to="/register" onClick={handleNavLinkClick}>REGISTER</Link>
          <Link className="btn btn-outline-warning mx-1" to="/login" onClick={handleNavLinkClick}>LOGIN</Link>
        </>
      );
    }
  };

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme} expand="lg" fixed="top" expanded={!isNavbarCollapsed}>
      <Navbar.Brand as={Link} to="/" onClick={handleNavLinkClick}>
        <img src={image} alt="logo" style={{ height: '40px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={theme === 'dark' ? 'text-light' : 'text-dark'} onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>HOME</Nav.Link>
          <Nav.Link as={Link} to="/aboutus" onClick={handleNavLinkClick}>ABOUT US</Nav.Link>
          <NavDropdown 
            title="SERVICES" 
            id="basic-nav-dropdown" 
            show={openDropdown === 'services'} 
            onClick={() => handleDropdownClick('services')}
          >
            <NavDropdown.Item onClick={() => handleDropdownItemClick('/homemaid')}>Home Service</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleDropdownItemClick('/book')}>Service for Month</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown 
            title="APPLY FOR JOB" 
            id="basic-nav-dropdown" 
            show={openDropdown === 'apply'} 
            onClick={() => handleDropdownClick('apply')}
          >
            <NavDropdown.Item onClick={() => handleDropdownItemClick('/contact')}>Professionals</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleDropdownItemClick('/locals')}>Locals</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown 
            title="SUPPORT" 
            id="basic-nav-dropdown" 
            show={openDropdown === 'support'} 
            onClick={() => handleDropdownClick('support')}
          >
            <NavDropdown.Item onClick={() => handleDropdownItemClick('/contactus')}>CONTACT US</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleDropdownItemClick('/touch')}>FEEDBACK</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="navbar-location" style={{ display: 'flex', alignItems: 'center', marginRight: '2rem', color: theme === 'dark' ? 'white' : 'black' }}>
          <MdLocationOn size={20} />
          <span style={{ marginLeft: '0.5rem' }}>{city}</span>
        </div>
        <form className="d-flex search-bar" onSubmit={handleSearch} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <FaSearch style={{ position: 'absolute', left: '10px', color: '#888', pointerEvents: 'none' }} />
          <input
            type="text"
            className="form-control"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ width: '200px', height: '30px', paddingLeft: '40px' }} // Adjust padding to avoid overlap with search icon
          />
          {searchQuery && (
            <FaTimes
              style={{ position: 'absolute', right: '10px', color: '#888', cursor: 'pointer' }}
              onClick={handleClearSearch}
            />
          )}
          {showSuggestions && (
            <ul className="suggestions-list" ref={suggestionsRef} style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000, backgroundColor: 'white', border: '1px solid #ddd', padding: 0, margin: 0, listStyle: 'none' }}>
              {suggestions.length > 0 ? suggestions.map(suggestion => (
                <li
                  key={suggestion}
                  onMouseDown={() => handleSuggestionClick(suggestion)}
                  style={{ padding: '8px', cursor: 'pointer', backgroundColor: 'white' }}
                >
                  {suggestion}
                </li>
              )) : (
                <li style={{ padding: '8px' }}>No match</li>
              )}
            </ul>
          )}
        </form>
        <Dropdown align="end">
          <Dropdown.Toggle variant="btn btn-primary" style={{ width: "5rem", marginRight: "1rem" }}>
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
                <hr />
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
          className={`toggle ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
          variant="transparent"
          onClick={toggleTheme}
          style={{ marginRight: '1rem', width: '50px' }}
        >
          {theme === 'dark' ? <FaSun color="#ffffff" /> : <FaMoon color="#000000" />}
        </Button>
        <RenderMenu />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
