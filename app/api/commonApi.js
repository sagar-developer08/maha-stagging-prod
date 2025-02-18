import API from "./config";

// Packages API

export const fetchPackagesData = () => {
  return API.get("/package");
};

// Slots API

export const fetchSlotData = () => {
  return API.get("/slot");
};

// Passenger API

export const addPassengerData = (formData) => {
  return API.post("/passenger", formData);
};
export const makeBooking = (formData) => {
  return API.post("/booking", formData);
};

export const getallusers = () => {
  return API.get("/users");
};
export const contactUs = (formData) => {
  return API.post("/contacts", formData);
};

export const ReferenceBooking = (id) => {
  return API.get(`/bookpassanger/${id}`);
};
export const CreateEntryBooking = (payload) => {
  return API.post(`/create/entry`, payload);
};
