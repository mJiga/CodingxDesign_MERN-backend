import { Search } from 'lucide-react';

function SearchForm() {
  return (
    <div className="border-2 border-opacity-60 border-zinc-300 relative flex items-center max-w-4xl h-20 rounded-3xl shadow-lg">
            <div className="flex-1 px-6 border-r border-zinc-300">
                <span className="flex flex-col text-sm font-extrabold">Destination</span>
                <span className="text-xs font-medium text-zinc-500">Where to go?</span>
            </div>
            <div className="flex-1 px-6 border-r border-zinc-300">
            <span className="flex flex-col text-sm font-extrabold">Arrival</span>
            <span className="text-xs font-medium text-zinc-500">-- / -- / --</span>
            </div>
            <div className="flex-1 px-6 border-r border-zinc-300">
                <span className="flex flex-col text-sm font-extrabold">Departure</span>
                <span className="text-xs font-medium text-zinc-500">-- / -- / --</span>
            </div>
            <div className="flex-1 px-6">
            <span className="flex flex-col text-sm font-extrabold">Guests and Rooms</span>
            <span className="text-xs font-medium text-zinc-500">Select amount</span>
            </div>
            <button className="flex bg-blue-800 text-white font-bold text-base px-6 py-2 rounded-full mr-2 hover:bg-blue-700 transition-colors duration-200">
                <Search className='mr-1 w-4 stroke-white'/>
                Search
            </button>
    </div>
  )
}

export default SearchForm
