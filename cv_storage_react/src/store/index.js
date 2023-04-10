import { create } from "zustand";
import { cvs, get_all_cvs } from "../API";

const useStore = create((set, get) => ({
  cvs: [],
  searched_cvs: [],
  loading: false,
  page: 1,
  cv_per_page: 10,
  number_of_pages: 1,

  addCV(new_cv) {
    const cvs = [...get().cvs, new_cv];
    //TODO post & get_all API call
    set({ cvs });
  },

  removeCV(id) {
    const cvs = get().cvs.filter((cv) => cv.cv_id !== id);
    //TODO delete & get_all API call
    set({ cvs });
  },

  updateCV(id) {
    const cvs = get().cvs.map((cv) =>
      cv.cv_id === id ? { ...cv, done: !cv.done } : cv
    );
    //TODO patch & get_all API call
    set({ cvs });
  },

  async fetchCVs() {
    set({ loading: true });

    // set({ cvs: await get_all_cvs() });
    set({ cvs });
    set({ searched_cvs: cvs });
    const page_amount = Math.ceil(get().cvs.length / get().cv_per_page);
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },

  setPage(newPage) {
    set({ page: newPage });
  },

  async searchCVs(str) {
    set({ loading: true });

    str = str.toLowerCase();
    const searched_cvs = get().cvs.filter(
      (cv) =>
        cv.first_name.toLowerCase().includes(str) ||
        cv.last_name.toLowerCase().includes(str) ||
        cv.major.toLowerCase().includes(str)
    );
    const page_amount = Math.ceil(searched_cvs.length / get().cv_per_page);
    set({ searched_cvs: searched_cvs });
    if (str !== "") {
      set({ page: 1 });
    }
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },
}));

export default useStore;
