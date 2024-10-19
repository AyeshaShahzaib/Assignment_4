export default function Header(){
    return(
       <header className="h-24 w-full bg-amber-400 flex items-center justify-between">
            <div className="w-1/3 flex justify-center">
                <h1 className="text-2xl font-extrabold text-slate-600">Header</h1>
            </div>
            <div className="w-1/2 h-24 bg-amber-400 flex justify-around items-center hidden md:flex">
                <h1 className="text-white font-medium ">Home</h1>
                <h1 className="text-white font-medium ">Pricing</h1>
                <h1 className="text-white font-medium ">About Us</h1>
                <h1 className="text-white font-medium ">Contact US</h1>
                <h1 className="text-white font-medium ">Login</h1>
            </div>
            </header>
    )
}