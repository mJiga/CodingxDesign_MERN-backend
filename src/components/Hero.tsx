import SearchForm from "./SearchForm"

function Hero() {
  return (
    <div>
        <div className='container mx-auto px-20 py-20'>
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-8xl font-bold mb-6">
              PLACEHOLDER HERO
            </h1>
            <h2 className="text-xl mb-6 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
            <SearchForm/>
          </div>
        </div>
    </div>
  )
}

export default Hero
