import { create } from "zustand";
import { cvs, get_all_cvs } from "../API";

export const useStore = create((set, get) => ({
  cvs: [],
  searched_cvs: [],
  loading: false,
  page: 1,
  cv_per_page: 10,
  number_of_pages: 1,

  async fetchCVs() {
    set({ loading: true });

    //// API-on version
    const all_cvs_response = await get_all_cvs();
    set({ cvs: all_cvs_response });
    set({ searched_cvs: all_cvs_response });

    //// API-off version
    // set({ cvs });
    // set({ searched_cvs: cvs });

    const page_amount = Math.ceil(get().cvs.length / get().cv_per_page);
    set({ number_of_pages: page_amount });

    // Case: user deletes last cv on page
    // Behavior: we're moving user to the previous page
    if (get().page > get().number_of_pages) {
      set({ page: get().page - 1 });
    }

    set({ loading: false });
    return get().cvs.length;
  },

  async searchCVs(str) {
    set({ loading: true });

    str = str.toLowerCase();
    const searched_cvs = get().cvs.filter(
      (cv) =>
        (
          cv.first_name.toLowerCase() +
          " " +
          cv.last_name.toLowerCase()
        ).includes(str) || cv.major.toLowerCase().includes(str)
    );
    const page_amount = Math.ceil(searched_cvs.length / get().cv_per_page);
    set({ searched_cvs: searched_cvs });
    if (str !== "") {
      set({ page: 1 });
    }
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },

  setPage(newPage) {
    set({ page: newPage });
  },

  setLoadingOn() {
    set({ loading: true });
  },

  setLoadingOff() {
    set({ loading: false });
  },
}));
