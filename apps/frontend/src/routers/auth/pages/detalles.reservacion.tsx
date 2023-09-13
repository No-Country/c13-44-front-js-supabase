import { valibotResolver } from "@hookform/resolvers/valibot";
import {
	Button,
	Chip,
	Divider,
	Image,
	Input,
	Tab,
	Tabs,
} from "@nextui-org/react";
import {
	IconCooker,
	IconDeviceTv,
	IconHeart,
	IconParking,
	IconShare,
	IconStar,
	IconWifi,
} from "@tabler/icons-react";
import { useEffect, useId, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
	Input as Inputvali,
	date,
	maxLength,
	minLength,
	object,
	string,
} from "valibot";
import Huespedes from "../../../components/huespedes.dropdown";
import { AuthContext } from "../../../context/Auth";
import { useFetchId } from "../../../hooks/Customs/useFetchId";
import { supabaseClient } from "../../../supabase";
import { Error404 } from "./404";

const ReservaSchema = object({
	ingreso: date(undefined, []),
	salida: date(undefined, []),
	huespedes: string(undefined, [minLength(1), maxLength(10)]),
});

const defaultValues = {
	ingreso: undefined,
	salida: undefined,
	huespedes: 0,
};

const tarifa = 0.1;

export default function Reservar({ id }) {
	const [total, setTotal] = useState({
		noches: null,
		total: null,
		tarifaReal: null,
		precioTotalNoches: null,
	});
	const { isLogged, user } = AuthContext();
	const myCard = useFetchId(id);

	console.log("carta", myCard);

	const {
		getValues,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: valibotResolver(ReservaSchema),
		defaultValues: {
			...defaultValues,
		},
	});

	useEffect(() => {
		const fechaIngreso = getValues("ingreso");
		const fechaSalida = getValues("salida");
		const tiempoDeEstadia = fechaSalida - fechaIngreso;
		const noches = tiempoDeEstadia / (1000 * 60 * 60 * 24);
		const precioTotalNoches = myCard.precio ?? 2 * noches;
		const tarifaReal = precioTotalNoches * tarifa;
		const total = precioTotalNoches + tarifaReal;
		setTotal({ total, noches, tarifaReal, precioTotalNoches });
	}, [getValues("ingreso"), getValues("salida")]);

	console.log(total);

	const user_id = user?.user.id;

	const onSubmit: SubmitHandler<Inputvali<typeof ReservaSchema>> = async (
		form,
	) => {
		const { data, error } = await supabaseClient
			.from("mis_reservaciones")
			.insert([{ ...form, user_id }]);

		console.log(data);

		console.log("send", error);
	};

	if (isLogged()) {
		return <Error404 />;
	}

	return (
		<>
			<div className="flex flex-col">
				<form onSubmit={handleSubmit(onSubmit as unknown)}>
					<div className="flex flex-row">
						<div className="m-1 mt-[4rem]">
							<Image
								removeWrapper
								alt="Card example background"
								className="z-0 w-[40rem]  "
								src="https://a0.muscache.com/im/pictures/95ecec03-f383-4f01-88e9-29519f65e630.jpg?im_w=1200"
							/>
						</div>
						<div className="flex flex-col mt-[2rem] ml-[2rem]">
							<div className="flex flex-row justify-end">
								<Chip className="bg-primary text-white m-[0.25rem]">
									<IconStar className="w-4" />
								</Chip>
								<Chip className="text-red-500 m-[0.25rem]">
									<IconHeart className="w-4" />
								</Chip>
								<Button className="h-7 w-4 m-[0.25rem]">
									<IconShare className="w-4" />
								</Button>
							</div>
							<h1 className="font-bold text-lg text-primary">
								Cabaña, Colombia, Medellin
							</h1>
							<Divider className="w-[50rem] h-[0.1rem]" />
							<div className="flex flex-row justify-center">
								<Input
									className="w-[20rem] m-[1rem]"
									type="date"
									label="Ingreso"
									placeholder="Ingreso"
									{...register("ingreso", { valueAsDate: true })}
								/>
								<Input
									className="w-[20rem] m-[1rem]"
									type="date"
									label="Salida"
									placeholder="Salida"
									{...register("salida", { valueAsDate: true })}
								/>
							</div>
							<div className="flex flex-row ml-[4rem] mt-[1rem]">
								<Huespedes />
								<div className="ml-[2rem] ">
									<ul>
										<li className="flex flex-row text-end justify-between">
											Precio por Noche:
											<div className="flex flex-row text-end">
												<span className="flex text-end text-primary ">$</span>
												{myCard?.precio}
											</div>
										</li>
										<li className="flex flex-row text-end justify-between">
											${myCard?.precio} USD X {total.noches} noches:
											<div className="flex flex-row text-end">
												<span className="flex text-end text-primary ml-[8rem]">
													{" "}
													$
												</span>
												{total.precioTotalNoches}
											</div>
										</li>
										<li className="flex flex-row text-end justify-between">
											Tarifa por servivio:
											<div className="flex flex-row text-end">
												<span className="flex text-end text-primary ">$</span>
												{total.tarifaReal}
											</div>
										</li>
									</ul>
								</div>
							</div>
							<Divider className="w-[50rem] h-[0.1rem] mt-[1rem]" />
							<div className="flex flex-row">
								<Button
									type="submit"
									className="mt-[1rem] ml-[4rem] h-[3.5rem] w-[20rem] text-xl"
									color="primary"
								>
									Reservar
								</Button>
								<h1 className="flex flex-row text-end font-bold text-5xl mt-[1rem] ml-[2rem] justify-between">
									Total :
									<div className="flex flex-row text-end justify-end">
										<span className="flex text-end text-primary ml-[4rem] justify-end">
											$
										</span>
										{total.total}
									</div>
								</h1>
							</div>
						</div>
					</div>
				</form>
				<Tabs variant={"underlined"} aria-label="Tabs variants">
					<Tab title="Descripcion">
						<div className="m-[1rem]">
							<h1 className="font-bold mb-[1rem]">Descripcion</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Accusamus ex totam voluptatibus ad, minus quo veritatis, a quas
								porro cum vel sit libero non in quasi! Nostrum provident
								repellendus sunt. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ut commodi incidunt iusto maiores, ex expedita
								eligendi assumenda facere voluptate dolorum molestiae neque
								asperiores temporibus, veritatis quod voluptates. Molestias,
								fugit voluptatem.
							</p>
							<h1 className="font-bold mt-[2rem]">
								Las prestaciones disponibles
							</h1>
							<ul>
								<li>
									<IconWifi className="" />
								</li>
								<li>
									<IconCooker />
								</li>
								<li>
									<IconDeviceTv />
								</li>
								<li>
									<IconParking />
								</li>
							</ul>
						</div>
					</Tab>
					<Tab title="Reseñas">
						<div>
							<h1>Proximamente</h1>
						</div>
					</Tab>
				</Tabs>
			</div>
		</>
	);
}
