import { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";

export const useFetchCards = () => {
  const [myCards, setMyCards] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCard(benefits) {
      const { data: publicacion } = await supabaseClient
        .from("publicacion")
        .select("*")
        .eq("active", true);

      if (publicacion) {
        const data = publicacion.map(({ prestaciones, ...item }) => {
          return {
            ...item,
            prestaciones: prestaciones?.map((prestacion: string) => {
              return (
                benefits.find(
                  (benefitsub) => benefitsub.id === prestacion
                )?.benefit || null
              );
            }),
          };
        });

        setMyCards(data);
      }
    }
    async function fetchPrestaciones() {
      const { data } = await supabaseClient.from("benefits").select("*");

      fetchCard(data);
    }
    fetchPrestaciones();
  }, []);

  return myCards;
};
