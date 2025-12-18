// import axios from "axios";
// import {
//     Car,
//     User,
// } from "../@types/ApiResponses";
// import { ApiNames } from "../constants/ApiNames";
// import { apiRequest, getRequest } from "./NetworkService";
// export const baseUrl = "https://myfakeapi.com/api";

// export const getCar = async () => {
//   const { data } = await axios.get(`${baseUrl}/${ApiNames.car}`);
//   return data;
// };






// export const getUser = async () => {
//   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return data;
// };

// services/GlobalService.ts
import axios from "axios";
import { Car, User } from "../@types/ApiResponses";
import { ApiNames } from "../constants/ApiNames";
import { apiRequest, getRequest } from "./NetworkService";

export const baseUrl = "https://myfakeapi.com/api";

export const getCar = async (): Promise<{ cars: Car[] }> => {
  try {
    const { data } = await axios.get(`${baseUrl}/${ApiNames.car}`);
    return data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const getUser = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Optional: Add more specific car-related functions
export const getCarsByType = async (type: string): Promise<Car[]> => {
  try {
    const response = await getCar();
    return response.cars.filter(car => 
      car.car_type?.toLowerCase() === type.toLowerCase()
    );
  } catch (error) {
    console.error("Error filtering cars by type:", error);
    throw error;
  }
};

export const getCarsByCapacity = async (capacity: number): Promise<Car[]> => {
  try {
    const response = await getCar();
    return response.cars.filter(car => 
      car.capacity === capacity
    );
  } catch (error) {
    console.error("Error filtering cars by capacity:", error);
    throw error;
  }
};