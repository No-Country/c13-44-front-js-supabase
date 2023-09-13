import { useEffect, useState } from "react";
import { supabaseClient } from "../../supabase";


interface TypeState {
  benefits: string
}

interface TypesBenefits {
  id: string;
  benefits: string[]
}


export const useFetchCards = () => {
  const [myCards, setMyCards] = useState<string[] | TypeState>([]);

  useEffect(() => {
    async function fetchCard(benefits: TypesBenefits[]) {
      const { data: publicacion } = await supabaseClient
        .from("publicacion")
        .select("*")
        .eq("active", true);

      if (publicacion) {
        const data = publicacion.map(({ prestaciones, ...item }) => {
          return {
            id: item.id,
            publicacion: prestaciones?.map((prestacion: string) => {
              return (
                benefits.find((benefitsub) => benefitsub.id === prestacion)?.benefits as string[]
              );
            }),
          };
        });

        setMyCards(data as any[]);
      }
    }
    async function fetchPrestaciones() {
      const { data } = await supabaseClient.from("benefits").select("*");

      fetchCard(data as any);
    }

    fetchPrestaciones();
  }, []);

  return myCards;
};
