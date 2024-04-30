'use client';

import Button from "@/components/Button";
import CatCard from "@/components/CatCard";
import { parsedEnv } from "@/parseEnv";
import axios from "axios";
import { useEffect, useState } from "react";

interface Cat {
  id: string;
  url: string;
  height: number;
  width: number;
}

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Cat[]>(
        process.env.NEXT_PUBLIC_API_URL+ `${"/search?limit=10"}` ?? '',
        {
          headers: {
            "x-api-key": process.env['NEXT_PUBLIC_API_KEY'],
          },
        }
      );
      setCats(response.data);
    };
    fetchData();
  }, []);
  
//cuando las cosas cambian en tiempo de ejecución se usa un estado
  return (
    <main>
      <h1>Listado de gatos</h1>
      <div>
        {
          cats.map((cat) => (
            <CatCard 
              key={cat.id} 
              id={cat.id} 
              src={{
                url: cat.url,
                height: cat.height,
                width: cat.width,
              }} 
            />
        ))}
      </div>      
    </main>
  );
}
