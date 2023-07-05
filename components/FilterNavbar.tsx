import NavbarFilter from "./NavFilter";

interface props{
    pageName:string;
}
export default function  FilterNavbar({pageName}:props){
    return(
        <>
        <div className="flex flex-wrap items-center px-2  md:justify-between mb-8">
<h1 className="text-3xl font-semibold text-black dark:text-yellow-50 md:text-2xl"> {pageName}</h1>
<NavbarFilter />

</div>
        </>
    )
}