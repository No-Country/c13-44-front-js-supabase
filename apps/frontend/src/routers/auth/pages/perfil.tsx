import { Avatar, Button, Divider, Input } from "@nextui-org/react";
import { IconPhotoPlus } from "@tabler/icons-react";

const DatosPerfil = [
  {
    name: "Primer Nombre",
    type: "text",
    placeholder: "Ej: Marco",
  },
  {
    name: "Segundo Nombre",
    type: "text",
    placeholder: "Ej: Antonio",
  },
  {
    name: "Nombre de usuario",
    type: "text",
    placeholder: "Ej: Teblelin",
  },
  {
    name: "Mail",
    type: "email",
    placeholder: "Ej: marco.antoni@gmail.com",
  },
  {
    name: "Contrasena",
    type: "password",
    placeholder: "Usa min 1 mayuscula y 4 digitos ",
  },
  {
    name: "Ubicacion",
    type: "text",
    placeholder: "Ej: Pais, Ciudad, Calle, #1234 ",
  },
  {
    name: "Codigo Postal",
    type: "number",
    placeholder: "Ej: 33101",
  },
];

export default function UsuarioPerfil() {

  return (
    <>
      <div className="container">
        <h1 className="font-bold text-2xl">Perfil Usuario</h1>
        <div className="flex flex-row gap-4 justify-between items-center m-4">
          <div className="flex justify-start items-start">
            <Avatar
              isBordered
              color="danger"
              className="w-20 h-20"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <div className="flex flex-col m-[1rem]">
              <h1>Mario Ortiz</h1>
              <p>Correo: Mario.ortiz@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <Button color="primary">
              <IconPhotoPlus />
              <h1>Nueva foto de perfil</h1>
            </Button>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold text-xl mt-[2rem]">Edita tu Perfil</h1>
          <Divider />
          <div className="grid grid-cols-3 gap-4 mt-4">
          {DatosPerfil.map((dato) => {
            return (
              <div
                className="flex flex-row justify-center gap-4"
                key={dato.name}
              >
                <Input
                  type={dato.type}
                  label={dato.name}
                  placeholder={dato.placeholder}
                  labelPlacement="outside"
                  className="w-[25rem]"
                />
              </div>
            );
          })}
            <Button color="primary" className="m-2 mt-7 w-[25rem]">
                Actualizar 
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
