import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button, Input, Link } from "@nextui-org/react";
import { IconBrandFacebookFilled, IconEyeFilled, IconEyeOff, IconMailFilled } from "@tabler/icons-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string, minLength, maxLength } from "valibot";
import React from "react";
import logo from "../../../img/icono00.png"


const PropsLogin = object({
  username: string('Tu usuario debe contener solo letras y numeros', [
    minLength(1, 'Ingresa tu usuario'),
    minLength(6, 'Tu usuario debe tener minimo 6 caracteres'),
    maxLength(18, 'Tu usuario no debe tener mas de 18 caracteres'),
  ]),
  password: string('Tu contraseña debe contener solo letras y numeros', [
    minLength(1, 'Ingresa tu contraseña'),
    minLength(6, 'Tu contraseña debe tener minimo 6 caracteres'),
    maxLength(18, 'Tu contraseña no debe tener mas de 18 caracteres'),
  ]),
})


const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: valibotResolver(PropsLogin)
  })

  const onSubmit: SubmitHandler<typeof PropsLogin> = (data) => {
    console.log(data);
  }


  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-row justify-center pt-[10rem]">
      <section>
        <div className="md:w-96 w-full">
          <form className="space-y-5 " onSubmit={handleSubmit(onSubmit as any)} >
            <Input
              errorMessage={errors.name?.message as string}
              validationState={errors.name?.message ? "valid" : "invalid"}
              color={errors.name?.message ? "danger" : "success"}
              isClearable
              type="text"
              label="Usuario"
              variant="bordered"
              placeholder="Ingresa tu usuario"
              onClear={() => console.log("input cleared")}
              {...register("username")}
            />

            <Input
              errorMessage={errors.password?.message as string}
              validationState={errors.password?.message ? "valid" : "invalid"}
              color={errors.password?.message ? "danger" : "success"}
              label="Contraseña"
              variant="bordered"
              placeholder="Ingresa tu contraseña"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <IconEyeFilled className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <IconEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              {...register("password")}
            />

          </form>
        </div>
        <section>
          <div className="flex flex-col items-center space-y-5 pt-6">
            <Button type="submit" className="bg-[#D41790] font-bold text-white md:text-lg  ">
              Iniciar Sesión
            </Button>
            <Link href="/login" underline="always" color="danger">Iniciar Sesion</Link>
          </div>
          <div className="flex flex-row justify-center text-[#D41790] pt-5 gap-5 hover:cursor-pointer">
            <IconMailFilled href="#" />
            <IconBrandFacebookFilled href="#" />
          </div>
        </section>
      </section>
      <div className="h-96 w-96 pb-96 -mt-[4.5rem] lg:block hidden">
        <img src={logo} />
      </div>
    </div >
  )
}

export default Login;
