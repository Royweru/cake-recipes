"use client"
import Image from 'next/image'
import Nav from './components/Nav'
import supabase from '../../supabase'
import { useState, useEffect } from "react"
import Cards from './components/Cards'
export default function Home() {
  const [ data, setData] = useState<cake[]>([])
  useEffect(()=>{
    const fetchData =async () => {
      const{data, error} = await supabase.from('Cakes').select('*')
      if(error){
        console.error('Error fetching recipes:', error)
      }else{
        setData(data)
        console.log(data)
      }
    }
    fetchData()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <Cards Cakes={data} />
    </main>
  )
}
