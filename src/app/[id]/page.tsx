"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Cat {
  id: string;
  url: string;
  height: number;
  width: number;
}

interface Props{
  params: {
    id: string;
  }
}
export default function CarProfile({params}: Props){
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get<Cat>(
          process.env.NEXT_PUBLIC_API_URL + `/${params.id}` ?? ""
        );

        setCat(response.data);
      } catch (error){
          console.error(error);
      }
    };

    fetchData();
  }, [params.id]);

  return(
    <main>
      <h1 className="text-4xl">Perfil del Gato</h1>
      {
        cat !== null && (
          <Image 
            src={cat.url} 
            alt="Imagen de Gato" 
            width={cat.width} 
            height={cat.height} 
            priority={false}
          />
        )
      }
      <h4 className="text-xl">{`ID: ${params.id}`}</h4>
    </main>
  )
};