/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link"
export default function NavbarFilter(){
    return(
        <div className="px-0 md:px-2">
<div className="border-b border-gray-200">
<nav className="flex -mb-px text-gray-500 border-transparent dark:text-yellow-50">

<Link href="/" className="px-1 py-2 mr-1 text-sm font-medium leading-5 whitespace-no-wrap border-b-2 group hover:text-gray-700 hover:border-gray-300 dark:hover:text-lime-200 dark:hover:border-lime-300">
today
<span className="px-2 ml-0.5 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black md:inline-block">
26
</span>
</Link>
<Link href="/events" className="px-1 py-2 mr-1 text-sm font-medium leading-5 whitespace-no-wrap border-b-2 group hover:text-gray-700 hover:border-gray-300 dark:hover:text-lime-200 dark:hover:border-lime-300">

<span className="px-1 py-2 mr-1 text-sm font-medium leading-5 text-indigo-600 whitespace-no-wrap border-b-2 border-indigo-500 dark:border-lime-600 dark:text-lime-500">
upcoming
<span className="px-2 ml-0.5 text-xs font-medium text-indigo-800 bg-indigo-300 rounded-full dark:bg-lime-300 dark:text-black md:inline-block">
98
</span>
</span>
</Link>

<Link href="/events/ongoing/" className="px-1 py-2 mr-1 text-sm font-medium leading-5 whitespace-no-wrap border-b-2 group hover:text-gray-700 hover:border-gray-300 dark:hover:text-lime-200 dark:hover:border-lime-300">
ongoing
<span className="px-2 hidden ml-0.5 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black md:inline-block">
228
</span>
</Link>

<Link href="/mints/" className="px-1 py-2 mr-1 text-sm font-medium leading-5 whitespace-no-wrap border-b-2 group hover:text-gray-700 hover:border-gray-300 dark:hover:text-lime-200 dark:hover:border-lime-300">
minting
<span className="px-2 ml-0.5 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black md:inline-block">
27
</span>
</Link>
</nav>
</div>
</div>
    )
}