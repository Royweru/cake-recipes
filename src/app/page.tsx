"use client";
import supabase from "../../supabase";
import { useState, useEffect } from "react";
import Searchbox from "./components/Searchbox";
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
    setFilteredResults(filter.reverse())
  },[data,search]);

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
      <Searchbox search={search} setSearch={setSearch} />
      <Cards Cakes={filteredResults} />
    </main>
  );
}
