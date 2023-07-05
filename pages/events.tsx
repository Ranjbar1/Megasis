import FilterNavbar from "@/components/FilterNavbar"
import NavbarFilter from "@/components/NavFilter"
import SlideBar from "@/components/SlideBar"
import { EventsData } from "@/data/events"
import Head from "next/head"
import Image from "next/image"
export default function Events(){
    return(
        <>
        
        <div>
      <Head>
        <title>Megasis</title>

        <meta name="description" content="a demo for roxo.ir/blog" />

        <meta name="keywords" content="web development, programming" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <div className="my-12 grid lg:grid-cols-3 grid-cols-1 gap-12">
        <div className="lg:col-span-2 ">
        <FilterNavbar pageName=" Upcoming NFT Collections" />
        <div className="flex flex-wrap" >
            
            {EventsData?.map((NFT: any) => (
         <div key={NFT.title} className="flex mx-5 flex-wrap p-4 bg-white dark:bg-zinc-800 dark:border-gray-700 my-1 md:my-0 border-gray-200 w-full
         border-l border-r border-b
         ">
 <div className="w-full md:w-2/5">
 <a href="/event/thebigfoot/">
 <Image className="rounded-sm" loading="lazy" src={NFT.image} alt={""}/>
 </a>
 </div>
 <div className="w-full px-2 py-3 md:w-3/5 md:py-5 md:px-8">
 <a href="/event/thebigfoot/">
 <h2 className="text-2xl font-bold leading-tight text-black hover:text-indigo-700 dark:text-yellow-100 dark:hover:text-lime-200">TheBigfoot</h2>
 </a>
 <div className="flex items-center justify-between md:block md:justify-start">
 <div className="py-2 text-black text-normal dark:text-yellow-50 md:text-lg">
 {NFT.date}
 </div>
 </div>
{NFT.verified &&  <div className="flex flex-wrap items-center pt-0 pb-0 md:pb-2">
<svg version="1.1" className="w-6 h-6 text-indigo-500 fill-current dark:text-lime-500" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512">
<path d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256
                        s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98
                        C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139
                        c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213
                        c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0
                        C384.164,179.718,384.164,189.215,378.306,195.073z"></path>
</svg>
<span className="px-1 text-sm font-medium text-black dark:text-lime-200">verified</span>
</div>}
 <div className="pb-0 text-black md:pb-2 text-normal dark:text-yellow-50">
 <p>{NFT.description}</p><p></p>
 </div>
 <div className="pt-4 pb-0 text-right md:pt-2 md:pb-2 md:text-left">
 <a href="/event/thebigfoot/" className="px-4 py-4 text-sm text-gray-800 bg-gray-200 rounded dark:bg-stone-900 dark:text-gray-200 md:py-3 md:px-5 hover:bg-gray-300 hover:text-black">
 Read More
 </a>
 </div>
 </div>
 </div>
       ))}
        
         </div>
        </div>
        <SlideBar />
      </div>
    </div>
       
        </>
    )
}