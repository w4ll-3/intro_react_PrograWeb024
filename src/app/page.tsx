'use client';

import Button from "@/components/Button";
import CatCard from "@/components/CatCard";
import { parsedEnv } from "@/parseEnv";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env['NEXT_PUBLIC_API_URL'] ?? '',{
        headers: {
          "x-api-key": process.env['NEXT_PUBLIC_API_KEY'],
        },
        }
      );
      setCats(response.data);
    };
    fetchData();
  }, []);
  
//cuando las cosas cambian en tiempo de ejecucion se usa un estado
  return (
    <main>
      <h1>Listado de gatos</h1>
      <div>
        {
          cats.map((cat) => (
            <CatCard key={cat.id} id={cat.id} src={cat.url} 
            />
        ))}
      </div>      
    </main>
  );
}
