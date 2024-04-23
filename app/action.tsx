'use server'

import AnimeCard, { AnimeProp } from "@/components/anime-card"

export const fetchAnime = async (page: number = 1) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)

  const data = await res.json()

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
}
