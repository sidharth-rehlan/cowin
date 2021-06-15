import axios from "axios";
import { APIConfig } from "../configs/config";

export const fetchSlotByPin = async (pincode, date) => {
  const response = await axios.get(
    `${APIConfig.baseUrl}${APIConfig.searchByPin}?pincode=${pincode}&date=${date}`
  );
  return response.data;
};

export const fetchStates = async () => {
  const response = await axios.get(
    `${APIConfig.baseUrl}${APIConfig.fetchStates}`
  );
  return response.data;
};

export const fetchDistricts = async (stateId) => {
  const response = await axios.get(
    `${APIConfig.baseUrl}${APIConfig.fetchDistrict}/${stateId}`
  );
  return response.data;
};

export const fetchSlotsByDistrict = async (districtId, date) => {
  const response = await axios.get(
    `${APIConfig.baseUrl}${APIConfig.searchByDistrict}?district_id=${districtId}&date=${date}`
  );
  return response.data;
};
