import Card1 from "./Card1"
import Card2 from "./Card2"

export default function Content(){
    return(
        <div className="h-screen">
        <div className="flex justify-around my-20">
           <Card1></Card1>
           <Card1></Card1>
           <Card1></Card1>
        </div>
        <div className="flex justify-around my-20">
        <Card2></Card2>
        <Card2></Card2>
        </div>
        </div>
    )
}