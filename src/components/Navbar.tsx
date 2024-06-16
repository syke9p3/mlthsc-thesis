import Container from './Container'

const Navbar = () => {
    return (
        <nav className="bg-[#22242B] text-[#EBEFF5] text-center sticky top-0 z-50">
            <Container className="px-6 py-3 flex justify-between">
                <div className='flex gap-1 items-center'>
                    <span className='relative w-full h-full grid place-items-center'>
                        <img src="/assets/mlthsc-fav.png" className='aspect-square w-full' alt="" />
                    </span>
                    <p className="font-bold">mlthsc.</p>
                </div>
                <ul className='text-sm flex items-center gap-3'>
                    <a href='#'>
                        Home
                    </a>
                    <a href='#'>
                        Home
                    </a>
                    <a href='#'>
                        Home
                    </a>

                </ul>
            </Container>
        </nav>
    )
}

export default Navbar