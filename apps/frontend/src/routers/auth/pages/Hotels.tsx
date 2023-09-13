import { Container } from "postcss";
import { FC } from "react";
import { useLocation, useRoute } from "wouter";
import CardPropiedades from "../../../components/card";
import { Filters } from "../../../components/filters";
import { useFetchCards } from "../../../hooks/Customs/useFetchCards";
export type PropsDestination = {};

const Destination: FC<PropsDestination> = () => {
	const [, setLocation] = useLocation();
	const myCards = useFetchCards("active", true);

	return (
		<>
			<div className="flex justify-center">
				<Filters />
			</div>
			<div className="flex items-center">
				<span>
					<div className="flex flex-wrap">
						{myCards.map((posting, index) => (
							<div className="m-3">
								<CardPropiedades
									onClick={() => setLocation(`/reservacion/${posting.id}`)}
									id={posting.id}
									titulo={posting.titulo}
									precio={posting.precio}
									localizacion={posting.localizacion}
									imagen={posting.imagen}
								/>
							</div>
						))}
					</div>
				</span>
			</div>
		</>
	);
};

export default Destination;
