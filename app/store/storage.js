import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Avoid SSR issues by creating a fallback (noop storage) for server-side
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem() {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

// Use localStorage in the browser, and noop storage during SSR
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
