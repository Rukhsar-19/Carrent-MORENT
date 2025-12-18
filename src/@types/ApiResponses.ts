// import { ReactNode } from "react";

// export interface Car {
//   isFavorite: any;
//   img: string | undefined;
//   fuel: ReactNode;
//   discountPrice: any;
//   name: ReactNode;
//   type: ReactNode;
//   imageUrl: string | undefined;
//   fuelCapacity: ReactNode;
//   transmission: ReactNode;
//   capacity: ReactNode;
//   id: number;
//   car: string;
//   car_model: string;
//   car_model_year: number;
//   car_vin: string;
//   price: string;
//   availability: boolean;
// }
// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone?: string;
//   website?: string;
//   company?: {
//     name: string;
//     catchPhrase?: string;
//     bs?: string;
//   };
//   address?: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//   };
// }

// @types/ApiResponses.ts
export interface Car {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
  // Add these if your API returns them, or keep optional
  car_type?: string;
  capacity?: number;
  fuel_capacity?: string;
  transmission?: string;
  discount_price?: string;
  isFavorite?: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}