import { useEffect, useState } from "react";
import { getNews } from '@/utils/requester'
import Card from '@/components/ui/Card'
import { NewsItem } from '@/types/index'
import Link from 'next/link'
import CardSkeleton from "@/components/ui/CardSkeletion";
import { v4 as uuid } from 'uuid'

export default function News() {
    const [data, setData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const news = await getNews()
                setData(news)
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [setData])

    return (
        <div className="news-wrapper">
            <h1 className="pt-32 text-center text-5xl text-white">Breaking News</h1>
            <div className="relative flex md:p-24 md:pt-2 p-10 md:flex-row flex-col flex-wrap justify-between">
                {data.length ? data.map(item => {
                    return (
                        <Link
                            className="md:w-[31%] w-full"
                            href={`/news/${item.id}`}
                            prefetch={false}
                            key={item.id}
                        >
                            <Card fullscreen={true} path={item.image_url} title={item.title} summary={item.summary} />
                        </Link>
                    )
                }) : [1, 2, 3, 4, 5, 6].map(e => {
                    return <CardSkeleton key={uuid()} />
                })}
            </div>
        </div>
    )
}