import { ImageCard } from "./ImageCard";

const contents = [
    {title:"Furniture",subtitle:"Handcrafted pieces from various eras, each with its own story and character"},
    {title:"Jewelry",subtitle:"Exquisite adornments that have stood the test of time, perfect for adding a touch of elegance"},
    {title:"Art",subtitle:"Original paintings, sculptures, and prints from renowned and obscure artists alike"},
    {title:"Decorative Items",subtitle:"Unique pieces that add charm and personality to any space"},
    {title:"Books & Manuscripts",subtitle:"Rare books and historical manuscripts for the avid reader and collector"},
]

export function CardSlider(){
    return(
        <div className="container px-5">
            <div className="flex flex-row gap-4 overflow-x-scroll">
                {contents.map((each,index)=><ImageCard key={index} title={each.title} subtitle={each.subtitle}/>)}
            </div>
        </div>
    )
}