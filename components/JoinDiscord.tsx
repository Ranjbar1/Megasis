import Image from "next/image";
import Link from "next/link";

/* eslint-disable jsx-a11y/alt-text */
export default function JoinDiscord(){
    return(
        <>
        <div className="p-4 rounded bg-gray-50 border-gray-200 w-2/3 border  mb-4">
<Link href="https://discord.com/invite/nft-calendar" target="_blank" rel="nofollow">
<Image 
 src="/assets/images/joinour.webp"
 alt="My Image"
 width={500}
 height={500}
/>
</Link>
</div>
        </>
    )
}