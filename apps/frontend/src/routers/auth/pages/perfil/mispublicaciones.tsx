import { Button, Divider } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import CardPropiedades from "../../../../components/card";
import { AuthContext } from "../../../../context/Auth";
import { supabaseClient } from "../../../../supabase";

export function MisPublicaciones() {
	const [MyCards, setMycards] = useState([]);
	const [, setLocation] = useLocation();
	const { user } = AuthContext();

	useEffect(() => {
		async function fetchCard(prestacionessub: {
			benefit: string | null;
			id: string;
		}) {
			const { data: publicacion } = await supabaseClient
				.from("publicacion")
				.select("*")
				.eq("user", user?.user.id);

			console.log(prestacionessub);

			if (publicacion) {
				const data = publicacion.map(({ prestaciones, ...item }) => {
					return {
						...item,
						prestaciones: prestaciones.map((prestacion) => {
							return prestacionessub.find(
								(prestacionsub) => prestacionsub.id === prestacion,
							).benefit;
						}),
					};
				});

				setMycards(data);
			}
		}
		async function fetchPrestaciones() {
			const { data } = await supabaseClient.from("benefits").select("*");

			fetchCard(data);
		}

		(async () => {
			await fetchPrestaciones();
		})();
	}, []);

	return (
		<>
			<div className="flex justify-between">
				<h1 className="font-bold text-2xl mt-[2rem]">Mis Avisos</h1>
				<Button
					color="primary"
					variant="bordered"
					className="m-4 w-[15rem]"
					onClick={() => setLocation("/postvivienda")}
				>
					Crear Aviso
				</Button>
			</div>
			<Divider />
			<span>
				{MyCards.map((card) => (
					<CardPropiedades
						key={card.id}
						titulo={card.titulo}
						precio={card.precio}
						localizacion={card.ubicacion}
						imagen={card.image}
					/>
				))}
			</span>
		</>
	);
}
