import { create } from "zustand";
import { supabaseClient } from "../../supabase";
import { token } from "./user";

interface useContextType {
	user: token["data"]["session"] | undefined;
	setUser: () => void;
	isLogged: () => boolean;
}

export const AuthContext = create<useContextType>((set, get) => ({
	user: undefined,

	isLogged: () => {
		return !get().user;
	},

	setUser: async () => {
		const token = (await supabaseClient.auth.getSession()) as unknown as token;

		set({ user: token.data.session });
	},
}));
