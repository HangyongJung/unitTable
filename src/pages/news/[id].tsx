import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

interface News {
  title: string
  article: string
  imgUrl: string
}
const News = ({ news }: { news: News }) => {
  const router = useRouter()
  const id = router.query.id
  const { data: data, error, mutate: dataMutate } = useSWR<News[]>(`/news/${id}`)
  console.log(data)
  return (
    <div>
      {
        !data
          ? (
            <div className='dark:bg-gray-900'>
              <div className='flex flex-col items-center justify-center h-screen p-6'>
                <div className='my-4 text-xl'>
                  no News
                </div>
              </div>
            </div>
          )
          : (
            <div>
              {
                data.map((item: News, index) => (
                  <div key={index} className="bg-white py-24 sm:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                      <div className="sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 text-indigo-600">Korean News</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item.title}</p>
                        <div>
                          {item.imgUrl && (
                            <img src={`${item.imgUrl}`} className='mx-auto' />
                          )}
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                          {item.article}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

          )
      }
    </div>
  )
}
export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl
  const res = await axios.get('http://heonpage.com:4000/api/news')
  const data = res.data
  console.log('res', res)
  console.log('data', data)
  return {
    // paths: [
    //     { params: { id: '740' } },
    //     { params: { id: '730' } },
    //     { params: { id: '729' } }
    // ],
    // paths: data.slice(0, 9).map(item => ({
    //   params: {
    //     id: item.id.toString()
    //   },
    // })),
    // fallback: true //없는 페이지 대응을 안함
  }
}
export default News
