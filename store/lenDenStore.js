import { create } from "zustand";

const useLenDenStore = create((set) => {
  return {
    name: "",
    lena: 0,
    dena: 0,
    entries: [],

    setName: (name) => {
      set({
        name: name,
      });
    },

    addLena: (amount, reason) => {
      set((state) => ({
        lena: state.lena + Number(amount),
        entries: [
          ...state.entries,
          {
            id: crypto.randomUUID(),
            type: "lena",
            reason: reason,
            amount: amount,
          },
        ],
      }));
    },

    addDena: (amount, reason) => {
      set((state) => ({
        dena: state.dena + Number(amount),
        entries: [
          ...state.entries,
          {
            id: crypto.randomUUID(),
            type: "dena",
            amount: amount,
            reason: reason,
          },
        ],
      }));
    },

    resetLenDen: () => {
      set({
        name: "",
        lena: 0,
        dena: 0,
        entries: [],
      });
    },
  };
});
export default useLenDenStore;
