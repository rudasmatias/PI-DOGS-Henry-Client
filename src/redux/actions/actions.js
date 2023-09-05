import {
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENTS,
  FILTERED_BY_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  POST_DOG,
  FILTERED_BY_HOSTED,
} from "./type";

import axios from "axios";

export const getDogs = () => {
  const endpoint = "http://localhost:3001/dogs";

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);

      if (!data.length) throw Error("No hay perros");

      return dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const getDogByName = (name) => {
  const endpoint = `http://localhost:3001/dogs/name/?name=${name}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);

      if (!data.length) throw Error("No existe perro con ese nombre");

      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert(`Error:${error.message}, empty search or no dogs exist`);
    }
  };
};

export const getDogById = (id) => {
  const endpoint = `http://localhost:3001/dogs/${id}`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);

      if (!Object.keys(data).length)
        throw Error("No existe perro con ese nombre");

      return dispatch({
        type: GET_DOG_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const getTemperament = () => {
  const endpoint = `http://localhost:3001/temperaments`;

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);

      if (!Object.keys(data).length) throw Error("No existen temperamentos");
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const filterCards = (temperament) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: FILTERED_BY_TEMPERAMENTS,
        payload: temperament,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const filterByHosted = (hosted) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: FILTERED_BY_HOSTED,
        payload: hosted,
      });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const orderNameCards = (order) => {
  return async (dispatch) => {
    try {
      return dispatch({ type: ORDER_BY_NAME, payload: order });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const orderWeightCards = (order) => {
  return async (dispatch) => {
    try {
      return dispatch({ type: ORDER_BY_WEIGHT, payload: order });
    } catch (error) {
      console.log("error:", error.message);
    }
  };
};

export const postDogs = (dogCreate) => {
  const endpoint = `http://localhost:3001/dogs`;

  const { name, height, weight, life_span, image, temperaments } = dogCreate;

  const dog = {
    name,
    height,
    weight,
    life_span,
    image,
    temperaments: temperaments.split(" "),
  };

  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, dog);
      if (!dog.temperaments || dog.temperaments.length === 0) {
        throw new Error("No existen temperamentos");
      }

      return dispatch({
        type: POST_DOG,
        payload: response,
      });
    } catch (error) {
      throw error;
    }
  };
};
