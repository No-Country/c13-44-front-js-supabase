import { Divider } from "@nextui-org/react";
import { useEffect } from "react";
import { AuthContext } from "../context/Auth";
import { supabaseClient } from "../supabase";

export function MisReservas() {
	const { user } = AuthContext();

useEffect (( ) => {
	const { data: mis_reservaciones, error } = await supabaseClient
	.from('mis_reservaciones')
	.select('*')
	.eq("user_id", user?.user.id);
})


	return (
		<>
			<div>
				<h1 className="font-bold text-2xl mt-[2rem]">Mis Reservaciones</h1>
				<Divider />
			</div>
		</>
	);
}
