import axios from "axios";
export const baseUrl = "https://myfakeapi.com/api";


export const getRequest = async (endPoint: string) => {
  try {
    const response = await axios({
      url: `${baseUrl}${endPoint}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Connection: "close",
        //  Authorization: "Bearer " + global.authToken,
      },
    });
    return response;
  } catch (error: any) {
    if (error.response && error.response.status === 403) {
      // logout();
    }
    throw error;
  }
};
export const apiRequest = async (
  endPoint: string,
  method: string,
  data?: any
) => {
  // Determine if data is FormData
  const isFormData = data instanceof FormData;
 
  // Set headers based on data type
  const headers: any = {
    // Authorization: "Bearer " + global.authToken,
  };
 
  // Only set Content-Type for non-FormData requests
  // FormData will automatically set the correct Content-Type with boundary
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
 
  const response = await axios({
    url: `${baseUrl}${endPoint}`,
    method: method,
    headers: headers,
    data: data,
  });
 
  return response;
};
