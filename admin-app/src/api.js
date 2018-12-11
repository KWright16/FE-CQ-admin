import axios from "axios";

const BASE_URL = "";

export const getAdminByUsername = async username => {
  // const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  const data = {
    user: {
      username: "admin",
      password: "password123"
    }
  };
  return data.user;
};

export const getAllTrails = async () => {
  // const { data } = await axios.get(`${BASE_URL}/topics`);
  const data = {
    trails: [
      {
        route: [
          {
            lat: 53.4781,
            long: -2.2441,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/manc-town-hall",
            name: "Manchester Town Hall"
          },
          {
            lat: 53.4781,
            long: -2.2447,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/library",
            name: "Manchester Central Library"
          },
          {
            lat: 53.4784,
            long: -2.2399,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/chinaTown",
            name: "Chinatown Arch"
          },
          {
            lat: 53.6146,
            long: -2.1623,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/johnBright",
            name: "John Bright Statue"
          },
          {
            lat: 53.4817,
            long: -2.2458,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/stAnn",
            name: "St Ann's Church"
          }
        ],
        region: {
          city: 'Manchester',
          long: -2.2426,
          lat: 53.4808
        },
        duration: 2700000,
        name: "City Trail",
        id: "manchester-city-trail"
      },
      {
        route: [
          {
            lat: 53.4781,
            long: -2.2441,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/manc-town-hall",
            name: "Manchester Town Hall"
          },
          {
            lat: 53.4781,
            long: -2.2447,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/library",
            name: "Manchester Central Library"
          },
          {
            lat: 53.4784,
            long: -2.2399,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/chinaTown",
            name: "Chinatown Arch"
          },
          {
            lat: 53.6146,
            long: -2.1623,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/johnBright",
            name: "John Bright Statue"
          },
          {
            lat: 53.4817,
            long: -2.2458,
            locationRef:
              "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/stAnn",
            name: "St Ann's Church"
          }
        ],
        region: {
          city: 'Manchester',
          long: -2.2426,
          lat: 53.4808
        },
        duration: 9000000,
        name: "Christmas Trail",
        id: "manchester-christmas-trail"
      }
    ]
  };
  return data.trails;
};

export const getTrailByTrailId = async trail_id => {
  // const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  const data = {
    trail: {
      route: [
        {
          lat: 53.4781,
          long: -2.2441,
          locationRef:
            "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/manc-town-hall",
          name: "Manchester Town Hall"
        },
        {
          lat: 53.4781,
          long: -2.2447,
          locationRef:
            "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/library",
          name: "Manchester Central Library"
        },
        {
          lat: 53.4784,
          long: -2.2399,
          locationRef:
            "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/chinaTown",
          name: "Chinatown Arch"
        },
        {
          lat: 53.6146,
          long: -2.1623,
          locationRef:
            "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/johnBright",
          name: "John Bright Statue"
        },
        {
          lat: 53.4817,
          long: -2.2458,
          locationRef:
            "projects/Tresure-hunt/databases/treasure-hunt-dcd8e/documents/locations/stAnn",
          name: "St Ann's Church"
        }
      ],
      region: {
        city: 'Manchester',
        long: -2.2426,
        lat: 53.4808
      },
      duration: 2700000,
      name: "City Trail",
      id: "manchester-city-trail"
    }
  };
  return data.trail;
};
