'use client';

import Button from "@/components/Button";
import CatCard from "@/components/CatCard";
import { parsedEnv } from "@/parseEnv";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(parsedEnv.NEXT_PUBLIC_API_URL,{
        headers: {
          "x-api-key": parsedEnv.NEXT_PUBLIC_API_KEY,
        },
        }
      );
      console.log(response.data)
    }
    fetchData();
  }, []);
  

  return (
    <main>
      <h1>Listado de gatos</h1>
      <div>
        <CatCard 
          id="0XYvRd7oD" 
          src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
        />
      </div>      
    </main>
  );
}
