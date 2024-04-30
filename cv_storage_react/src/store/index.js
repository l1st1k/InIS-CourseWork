import { create } from "zustand";
import { get_all_cvs, get_managers } from "../API";

export const useStore = create((set, get) => ({
  is_auth: false,
  cvs: [],
  searched_cvs: [],
  managers: [],
  searched_managers: [],
  vacancies: [],
  searched_vacancies: [],
  loading: false,
  page: 1,
  items_per_page: 10,
  number_of_pages: 1,

  async fetchCVs() {
    set({ loading: true });

    const all_cvs_response = await get_all_cvs();
    set({ cvs: all_cvs_response });
    set({ searched_cvs: all_cvs_response });

    const page_amount = Math.ceil(get().cvs.length / get().items_per_page);
    set({ number_of_pages: page_amount });

    // Case: user deletes last cv on page
    // Behavior: we're moving user to the previous page
    if (get().page > get().number_of_pages) {
      set({ page: get().page - 1 });
    }

    set({ loading: false });
    return get().cvs.length;
  },

  async fetchManagers() {
    set({ loading: true });

    const managers_response = await get_managers();
    set({ managers: managers_response });
    set({ searched_managers: managers_response });

    const page_amount = Math.ceil(get().managers.length / get().items_per_page);
    set({ number_of_pages: page_amount });

    // Case: user deletes last manager on page
    // Behavior: we're moving user to the previous page
    if (get().page > get().number_of_pages) {
      set({ page: get().page - 1 });
    }

    set({ loading: false });
    return get().managers.length;
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
    const page_amount = Math.ceil(searched_cvs.length / get().items_per_page);
    set({ searched_cvs: searched_cvs });
    if (str !== "") {
      set({ page: 1 });
    }
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },

  async searchManagers(str) {
    set({ loading: true });

    str = str.toLowerCase();
    const searched_managers = get().managers.filter(
        (manager) =>
            manager.email.includes(str)
    );
    const page_amount = Math.ceil(searched_managers.length / get().items_per_page);
    set({ searched_managers: searched_managers });

    if (str !== "") {
      set({ page: 1 });
    }
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },

  async searchVacancies(str) {
    set({ loading: true });

    str = str.toLowerCase();
    const searched_vacancies = get().vacancies.filter(
        (vacancy) =>
           vacancy.skills.toLowerCase().includes(str) || vacancy.major.toLowerCase().includes(str)
    );
    const page_amount = Math.ceil(searched_vacancies.length / get().items_per_page);
    set({ searched_vacancies: searched_vacancies });

    if (str !== "") {
      set({ page: 1 });
    }
    set({ number_of_pages: page_amount });

    set({ loading: false });
  },

  setPage(newPage) {
    set({ page: newPage });
  },

  setAuthState(state) {
    set({ is_auth: state });
  },

  setLoading(flag) {
    set({ loading: flag });
  },
}));
