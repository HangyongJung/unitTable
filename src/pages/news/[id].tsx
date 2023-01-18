import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

interface News {
  title: string
  article: string
  imgurl: string
}
const News = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: news, error, mutate: mutate } = useSWR<News>(id ? `/news/${id}` : null)

  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Korean News</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{news ? news.title : 'non title'}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {news ? news.article : 'non article'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default News
