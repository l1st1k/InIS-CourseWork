import ky from "ky";
// Checked - 100%
export const api = ky.create({
  prefixUrl: import.meta.env.VITE_BACKEND_URL,
});
