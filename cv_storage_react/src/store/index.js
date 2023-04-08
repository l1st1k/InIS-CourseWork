import { create } from "zustand";
import { cvs, get_all_cvs } from "../API";

const useStore = create((set, get) => ({
  cvs: [],
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
    set({ cvs: cvs });
    const page_amount = Math.ceil(get().cvs.length / get().cv_per_page);
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },

  setPage(newPage) {
    set({ page: newPage });
  },
}));

export default useStore;
