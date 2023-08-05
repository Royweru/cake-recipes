/* eslint-disable @next/next/no-img-element */
import React from 'react'
type props = {
    Cakes:cake[]
}
const Cards = ({Cakes}:props) => {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
    <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
            CAKE RECIPES❤️❤️🎂🍰🍰
        </h1>
        <p className="mt-3 text-gray-500">
            The cakes that you love
        </p>
    </div>
    <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {
            Cakes.map((items, key) => (
                <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                    <a href={'/'}>
                        <img src={items.image} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                            <div className="ml-3">
                                
                                <span className="block text-gray-400 text-sm">{items.created_at.toISOString()}</span>
                            </div>
                        </div>
                        <div className="pt-3 ml-4 mr-2 mb-3">
                            <h3 className="text-xl text-gray-900 font-bold">
                                {items.title}
                            </h3>
                            <p className=" text-base text-gray-500 font-mono font-semibold  mt-1">{items.recipe}</p>
                        </div>
                  </a>
                </article>
            ))
        }
    </div>
</section>
  )
}

export default Cards