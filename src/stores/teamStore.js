import { create } from "zustand";

const useTeamStore = create((set) => ({
  team: [],
  setTeam: (value) => set({ team: value }),
}));

export default useTeamStore;
