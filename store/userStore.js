import { create } from "zustand";

const useUserStore = create((set) => {
  return {
    name: "",
    setName: (name) => {
      set({
        name: name,
      });
    },

    count: 0,

    increBy1: () => {
      set((state) => {
        return {
          count: state.count + 1,
        };
      });
    },

    decreBy1: () => {
      set((state) => {
        return {
          count: state.count - 1,
        };
      });
    },

    squareCount: () => {
      set((state) => {
        return {
          count: state.count * state.count,
        };
      });
    },

    cubeCount: () => {
      set((state) => {
        return {
          count: state.count * state.count * state.count,
        };
      });
    },

    resetUser: () => {
      set({
        name: "",
        count: 0,
      });
    },
  };
});
export default useUserStore;
