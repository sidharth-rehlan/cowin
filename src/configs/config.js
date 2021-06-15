export const searchTypes = Object.freeze({
  searchByMap: 1,
  searchByPin: 2,
  searchByDistrict: 3,
});

export const searchFilter = [
  { id: "age18", value: "Age 18+" },
  { id: "age45", value: "Age 45+" },
  { id: "covishield", value: "Covishield" },
  { id: "covaxin", value: "Covaxin" },
  { id: "sputnik", value: "Sputnik V" },
  { id: "free", value: "Free" },
  { id: "paid", value: "Paid" },
];

export const siteConfig = {
  daysInSearchFilter: 28,
  datesPerPage: 7,
};

export const APIConfig = {
  baseUrl: process.env.REACT_APP_API_ENDPOINT,
  fetchStates: "/v2/admin/location/states",
  fetchDistrict: "/v2/admin/location/districts",
  searchByPin: "/v2/appointment/sessions/public/calendarByPin",
  searchByDistrict: "/v2/appointment/sessions/public/calendarByDistrict",
  searchByMap: "/v2/appointment/centers/public/findByLatLong",
};
