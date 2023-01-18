import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

interface News {
  title: string
  article: string
  imgurl: string
}
const News = ({ news }: { news: News }) => {
  console.log(news[0].title)

  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Korean News</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{news[0].title}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {news[0].article}
          </p>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const id = context.params.id
  // const { id } = context.params.query
  // console.log(id)

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://heonpage.com:4000/api/news/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const news = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      news
    },
  }
}
export default News
