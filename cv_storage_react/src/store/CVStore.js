import create from 'zustand'
import get_all_cvs from "../API/get_all_cvs.js";

const useStore = create((set, get) => ({
    cvs: [],
    loading: false,

    addCV(new_cv) {
        const cvs = [...get().cvs, new_cv]
        //TODO post & get_all API call
        set({ cvs })
    },
    
    removeCV(id) {
        const cvs = get().cvs.filter((cv) => cv.cv_id !== id)
        //TODO delete & get_all API call
        set({ cvs })
    },

    updateCV(id) {
        const cvs = get().cvs.map((cv) =>
            cv.cv_id === id ? { ...cv, done: !cv.done } : cv
        )
        //TODO patch & get_all API call
        set({ cvs })
    },

    // TODO call this fetch onEffect on 1st render
    async fetchCVs() {
        set({ loading: true })
        set({ cvs: await get_all_cvs()})
        set({ loading: false })
    }
}))

export default useStore;