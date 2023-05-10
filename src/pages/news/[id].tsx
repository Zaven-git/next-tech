import { getNewsWithId } from "@/utils/requester";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewsItem } from '@/types/index'
import NewsItemSkeleton from "@/components/ui/NewsItemSkeleton";
import { log } from "console";

export default function News() {
  const router = useRouter();
  const [item, setItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function getData() {
      if (router.query['id']) {
        try {
          const news = await getNewsWithId(router.query['id'])
          setItem(news)
        } catch (err) {
          console.log(err);
        }
      }
    }
    getData();
  }, [setItem, router.query['id']])

  if (item) {
    return (
      <div className="py-24 px-6 news-wrapper">
        <h1 className="text-5xl font-700" > {item?.title}</h1>
        <p className="text-xl pt-6 flex justify-between">
          <a href={item?.url} className="md:inline-block hidden">{item?.news_site}</a>
        </p>
        <img
          className="py-8 w-full rounded-xl"
          src={item?.image_url}
          alt={item?.title}
        />
        <p className="text-2xl">{item?.summary}</p>
      </div >
    )
  }
  return (<NewsItemSkeleton />)
}