"use client";
import supabase from "../../../supabase";
import { useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";

export default function Recipe() {
    
  const [imageUrl, setImageUrl] = useState(" ");
  const [title, seTitle] = useState("");
  const [recipe, setRecipe] = useState("");
 
  const addRecipe = async (e: Event) => {   
    e.preventDefault();
    const { data, error } = await supabase
      .from("Cakes")
      .insert([{ title: title, image: imageUrl, recipe: recipe }])
      .select();

    seTitle("");
    setImageUrl("");
    setRecipe("");
    alert('Cake recipe was added sucessfully ')
  };

  return (
    <div className="flex min-h-screen flex-col w-full">
      <form
        onSubmit={addRecipe}
        className=" flex flex-col space-between items-center w-full"
      >
        <label
          htmlFor="name"
          className=" text-xl font-sans font-bold text-yellow-950"
        >
          NAME OF THE CAKE:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name of the cake"
          value={title}
          onChange={(e) => seTitle(e.target.value)}
          className=" px-9 py-8 font-mono text-red-800 text-xl mb-3 w-10/12 rounded-lg "
        />
        <label
          htmlFor="image"
          className=" text-xl font-sans font-bold text-yellow-950"
        >
          Image URL(copy the image adress link):
        </label>
        <input
          id="image"
          type="text"
          placeholder="Image Url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className=" p-7 font-mono text-red-800 text-xl mb-3 w-10/12 rounded-lg"
        />
        <label
          htmlFor="recipe"
          className=" text-xl font-sans font-bold text-yellow-950"
        >
          GIVE THE RECIPE:
        </label>
        <textarea
          id="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          className=" w-10/12 mb-2 h-56 rounded-lg text-yellow-900 font-mono font-semibold text-xl p-2"
        />
        <button
          type="submit"
          className=" rounded-xl px-10 py-6 bg-slate-800 hover:bg-slate-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
