import { valibotResolver } from "@hookform/resolvers/valibot";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Image,
	Input,
	Select,
	SelectItem,
	Switch,
	Textarea,
} from "@nextui-org/react";
import { IconPhotoPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	Input as Inputvali,
	array,
	boolean,
	date,
	maxLength,
	maxValue,
	minLength,
	minValue,
	number,
	object,
	string,
} from "valibot";
import { useLocation } from "wouter";
import { AuthContext } from "../../../context/Auth";
import { supabaseClient } from "../../../supabase";
import { PerfilToken } from "../types";
import { Error404 } from "./404";

type TipoVivienda = "casa" | "departamento" | "hotel" | "cabaña";
type Huespedes = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

const PostSchema = object({
	titulo: string(undefined, [minLength(1), maxLength(30)]),
	precio: string(undefined, []),
	ubicacion: string(undefined, [minLength(1), maxLength(50)]),
	prestaciones: string(),
	ingreso: string(undefined, []),
	salida: string(undefined, []),
	tipoVivienda: string(undefined, [minLength(1), maxLength(15)]),
	limite: string(undefined, [minValue(1), maxValue(10)]),
	descripcion: string(undefined, [minLength(1), maxLength(50)]),
	mascotas: string(),
});

const tiposDeVivienda: TipoVivienda[] = [
	"casa",
	"departamento",
	"hotel",
	"cabaña",
];
const huespedes: Huespedes[] = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
];

export function Post() {
	const { isLogged, user } = AuthContext();
	const [prestaciones, setPrestaciones] = useState([]);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: valibotResolver(PostSchema),
		defaultValues: {
			mascotas: false,
		},
	});

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setSelectedImage(imageUrl);
		}
	};

	useEffect(() => {
		console.log("errors", errors);
		console.log("values", getValues());
	}, [errors, getValues]);

	const onSubmit = async (form: Inputvali<typeof PostSchema>) => {
		// try {
		//     const { data, error } = await supabaseClient.from("publicacion").insert([form]);

		//     if (error) throw error;
		//     console.log(data);
		//     setLocation("/perfil");
		// } catch (error) {
		//     alert(error);
		// }
		console.log(form);
	};
	const [, setLocation] = useLocation();

	useEffect(() => {
		(async () => {
			let { data: benefits, error } = await supabaseClient
				.from("benefits")
				.select("*");
			setPrestaciones(benefits);
		})();
	}, []);

	if (isLogged()) {
		return <Error404 />;
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit as any)}>
				{user?.user.user_metadata.user_name}
				<div className="flex flex-row">
					<div>
						<h1 className="font-bold text-6xl m-4">
							Crear
							<span className="text-primary ml-4">Arriendo</span>
						</h1>
						{selectedImage ? (
							<Card className="w-[30rem] h-[30rem] mt-4">
								<CardBody className="flex justify-center items-center">
									<Image
										src={selectedImage}
										alt="Imagen seleccionada"
										className="w-full"
									/>
								</CardBody>
								<CardFooter>
									<div className="flex items-center w-[30rem]">
										<Input type="file" onChange={handleImageChange} />
									</div>
								</CardFooter>
							</Card>
						) : (
							<Card className="w-[30rem] h-[30rem] ">
								<CardBody className="flex justify-center items-center">
									<IconPhotoPlus className="w-10" />
									<p className="font-bold text-lg">
										<span className="text-primary mr-1">Selecciona</span>
										una imagen
									</p>
								</CardBody>
								<CardFooter>
									<div className="w-[30rem]">
										<Input
											type="file"
											className="flex justify-center items-center "
											onChange={handleImageChange}
										/>
									</div>
								</CardFooter>
							</Card>
						)}
					</div>
					<div className="flex flex-col gap-4 justify-start ml-[2rem] mt-[8rem]">
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							<Input
								type="text"
								label="Titulo"
								labelPlacement="outside"
								placeholder="ej: departamento vista al mar"
								className="w-[15rem]"
								{...register("titulo")}
							/>
							<Input
								type="number"
								label="Precio"
								placeholder="0.00"
								labelPlacement="outside"
								className="w-[15rem]"
								startContent={
									<div className="pointer-events-none flex items-center">
										<span className="text-default-400 text-small">$</span>
									</div>
								}
								endContent={<p>USD</p>}
								{...register("precio")}
							/>
							<Input
								type="text"
								label="Ubicacion"
								placeholder="Donde es?"
								labelPlacement="outside"
								className="w-[15rem]"
								{...register("ubicacion")}
							/>
						</div>
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							<Select
								className="mt-0"
								label="Prestaciones"
								labelPlacement="outside"
								placeholder="ej: televicion"
								{...register("prestaciones")}
								selectionMode="multiple"
							>
								{prestaciones.map((prestacion) => {
									return (
										<SelectItem key={prestacion.id}>
											{prestacion.benefit}
										</SelectItem>
									);
								})}
							</Select>
							<Input
								type="date"
								label="Ingreso"
								placeholder="."
								labelPlacement="outside"
								{...register("ingreso")}
							/>
							<Input
								type="date"
								label="Salida"
								placeholder="."
								labelPlacement="outside"
								{...register("salida")}
							/>
						</div>
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							<Select
								className="mt-1 max-w-[15rem]"
								label="Tipo de vivienda"
								labelPlacement="outside"
								placeholder="ej: casa"
							>
								{tiposDeVivienda.map((tipo) => (
									<SelectItem
										key={tipo}
										value={tipo}
										{...register("tiposDeVivienda")}
									>
										{tipo.charAt(0).toUpperCase() + tipo.slice(1)}
									</SelectItem>
								))}
							</Select>
							<Select
								className="mt-1 max-w-[15rem]"
								label="Limite de huéspedes"
								labelPlacement="outside"
								placeholder="ej: 4"
							>
								{huespedes.map((tipo) => (
									<SelectItem key={tipo} value={tipo} {...register("limite")}>
										{tipo.charAt(0).toUpperCase() + tipo.slice(1)}
									</SelectItem>
								))}
							</Select>
							<div className="flex flex-row items-center mt-[1.5rem] ">
								<h1 className="mr-1">No se admiten mascotas</h1>
								<Switch
									onChange={(e) => {
										setValue("mascotas", e.target.checked);
									}}
								/>
							</div>
						</div>
						<div className="flex flex-col ">
							<Textarea
								label="Descripcion"
								variant="bordered"
								color="primary"
								labelPlacement="outside"
								placeholder="ingresa tu descripcion"
								defaultValue="Describe tu propiedad al detalle, para llamar mas la atención."
							/>
							<div className="flex justify-end mt-[1rem]">
								<Button
									type="submit"
									color="primary"
									variant="bordered"
									className="w-[12rem] h-[3rem]"
								>
									Crear aviso
								</Button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
