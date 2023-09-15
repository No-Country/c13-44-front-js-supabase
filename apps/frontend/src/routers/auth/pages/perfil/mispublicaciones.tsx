import { Button, Divider } from "@nextui-org/react";
import { Fragment, useEffect, useState } from "react";
import { useLocation } from "wouter";
import CardPropiedades from "../../../../components/card";
import { AuthContext } from "../../../../context/Auth";
import { supabaseClient } from "../../../../supabase";

export function MisPublicaciones() {
  const [myCards, setMycards] = useState([]);
  const [, setLocation] = useLocation();
  const { user } = AuthContext();

  const handlePutActive = async (id, active, index) => {
    const { data, error } = await supabaseClient
      .from("publicacion")
      .update({ active })
      .eq("id", id);
    setMycards((oldState) => {
      const newState = [...oldState];
      newState[index] = { ...oldState[index], active };

      return newState;
    });
    console.log(error);
  };

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
                (prestacionsub) => prestacionsub.id === prestacion
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
        {myCards.map((card, index) => (
          <Fragment key={card.id}>
            <Button
              onClick={() => handlePutActive(card.id, !card.active, index)}
            >
              {card.active ? "Eliminar" : "Activar"}
            </Button>
            <CardPropiedades
              titulo={card.titulo}
              precio={card.precio}
              localizacion={card.ubicacion}
              imagen={card.image}
            />
          </Fragment>
        ))}
      </span>
    </>
  );
}
