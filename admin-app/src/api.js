import axios from "axios";

const BASE_URL = "https://city-quest-game.herokuapp.com/api/";

export const getAdminByUsername = async username => {
  const { data } = await axios.get(`${BASE_URL}/admins/${username}`);
  return {username, password: data.password};
};

export const getAllTrails = async () => {
  const { data } = await axios.get(`${BASE_URL}/trails`);
  return data.trails;
};

export const getTrailByTrailId = async trail_id => {
  const { data } = await axios.get(`${BASE_URL}/trails/${trail_id}`);
  return data.trail;
};

export const addTrail = async (newTrail, username) => {
  const {name, id, region} = newTrail
  console.log(newTrail)
  console.log(username)
  const { data } = axios.post(`${BASE_URL}/admins/${username}/trails`, {
    name, id, region
  })
  console.log(data)
  return data
}
