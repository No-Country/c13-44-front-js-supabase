import { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";

export const useFetchId = (id) => {
  const [myCard, setMyCard] = useState();

  useEffect(() => {
    async function fetchCard(prestacionessub: {
      benefit: string | null;
      id: string;
    }) {
      const { data: publicacion } = await supabaseClient
        .from("publicacion")
        .select("*")
        .eq("id", id);

      console.log(prestacionessub);

      if (publicacion) {
        const data = publicacion.map(({ prestaciones, ...item }) => {
          return {
            ...item,
            prestaciones: prestaciones?.map((prestacion: string) => {
              return (
                prestacionessub.find(
                  (prestacionsub) => prestacionsub.id === prestacion
                )?.benefit || null
              );
            }),
          };
        });
        
        setMyCard(data[0]);
        console.log(data);
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
  return myCard;
};


