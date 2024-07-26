// locationUtils.js

export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => reject(error),
          { enableHighAccuracy: true }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };
  
  export const fetchCityName = async (latitude, longitude) => {
    const apiKey = '8b3ec60cce114165b8042407b6d316d4'; // Replace with your actual API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const city = data.results[0]?.components?.city || 'Unknown location';
      return city;
    } catch (error) {
      console.error('Error fetching city name:', error);
      return 'Unknown location';
    }
  };
  