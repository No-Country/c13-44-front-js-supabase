import { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";

interface TypeState {
	benefits: string;
}

interface TypesBenefits {
	id: string;
	benefits: string[];
}

export const useFetchCards = (name: string, condition: boolean) => {
	const [myCards, setMyCards] = useState<string[] | TypeState>([]);

	useEffect(() => {
		async function fetchCard(
			benefitsPromise: Promise<{ data: TypesBenefits[] }>,
		) {
			const { data: publicacion } = await supabaseClient
				.from("publicacion")
				.select("*")
				.eq(name, condition);

			if (publicacion) {
				const { data: benefits } = await benefitsPromise;

				const data = publicacion.map(({ prestaciones, ...item }) => {
					return {
						id: item.id,
						publicacion: prestaciones?.map((prestacion: string) => {
							return benefits.find(
								(benefitsub) => benefitsub.id === prestacion,
							)?.benefits as string[];
						}),
					};
				});

				setMyCards(data as any[]);
			}
		}
		async function fetchPrestaciones() {
			const data = supabaseClient.from("benefits").select("*");

			fetchCard(data as unknown);
		}

		fetchPrestaciones();
	}, []);

	return myCards;
};
