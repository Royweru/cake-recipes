"use client";
import supabase from "../../supabase";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
export default function Home() {
  const [data, setData] = useState<cake[]>([]);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  useEffect(() => {
    const filter = data.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.recipe.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredResults(filter)
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Cakes").select("*");
      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Cards Cakes={data} />
    </main>
  );
}
