import { NewsStoriesData } from "@/data";
import NewsItem from "./NewsItem";
import Link from "next/link";
function NewsStories() {
  return (
    <>
      <section>
        <div className="px-5 my-4 text-right">
          <Link
            className="p-2 text-indigo-600 border border-gray-200 rounded hover:text-indigo-500 bg-gray-50 dark:text-lime-500 dark:hover:text-black dark:bg-zinc-800 dark:hover:bg-lime-500 dark:border-gray-700"
            href=" events/"
          >
            All Upcoming Events →
          </Link>
        </div>
        <h3 className=" mb-2 text-2xl font-semibold text-black md:text-xl dark:text-yellow-50">
          News and Stories
        </h3>
        <div className="grid grid-cols-2">
          {NewsStoriesData?.map((Stories: any) => (
            <NewsItem News={Stories} key={Stories.name}  />
          ))}
        </div>
      </section>
    </>
  );
}
export default NewsStories;
