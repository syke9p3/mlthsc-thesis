import Container from './Container'

const Navbar = () => {
    return (
        <nav className="bg-[#22242B] text-[#EBEFF5] text-center sticky top-0 z-50">
            <Container className="px-6 py-3 flex justify-between">
                <a href='#' className='flex gap-1 items-center'>
                    <svg width="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M99.9999 50C99.9999 77.4045 77.9563 99.6601 50.6346 99.9999V74.9836C59.2988 74.6537 66.8335 69.9142 71.0592 62.9449L92.9376 75.5765L93.6043 74.4217L71.7198 61.7867C73.6003 58.2751 74.6666 54.2621 74.6666 50C74.6666 45.7371 73.5998 41.7233 71.7186 38.2112L93.6025 25.5755L92.9358 24.4207L71.0579 37.053C66.832 30.0848 59.2979 25.3463 50.6346 25.0165V0C77.9563 0.339867 99.9999 22.5954 99.9999 50ZM49.3011 25.0007V0.000839039C31.3202 0.247176 15.6324 9.9857 7.021 24.4328L28.4338 36.7955C32.7874 29.8086 40.4932 25.1269 49.3011 25.0007ZM27.759 37.9456L6.35363 25.5872C2.3071 32.8074 0 41.1342 0 50C0 58.8657 2.30712 67.1926 6.3537 74.4129L27.7586 62.0537C25.788 58.4791 24.6667 54.3705 24.6667 50C24.6667 45.6292 25.7882 41.5204 27.759 37.9456ZM28.4334 63.2039L7.02108 75.5673C15.6325 90.0143 31.3202 99.7527 49.3011 99.9991V74.9994C40.4929 74.8731 32.7869 70.1912 28.4334 63.2039Z" fill="#CF4242" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M93.2355 75.132C84.6714 89.8357 68.8226 99.7737 50.6348 99.9999V74.9836C59.299 74.6537 66.8337 69.9142 71.0593 62.9449L92.9378 75.5765L93.2049 75.1139L93.2355 75.132Z" fill="#FFCC00" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.021 24.433C15.6324 9.98594 31.3202 0.247436 49.3011 0.00109863V25.0009C40.4931 25.1271 32.7874 29.8088 28.4338 36.7957L7.021 24.433Z" fill="#65696C" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.35365 25.5874L27.759 37.9458C25.7882 41.5206 24.6667 45.6294 24.6667 50.0002C24.6667 54.3707 25.788 58.4793 27.7586 62.0539L6.35368 74.4131C2.30712 67.1928 0 58.866 0 50.0002C0 41.1345 2.30711 32.8076 6.35365 25.5874Z" fill="#424BFC" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.02112 75.5673L28.4334 63.204C32.7869 70.1913 40.4929 74.8732 49.3012 74.9994V99.9992C31.3203 99.7528 15.6325 90.0144 7.02112 75.5673Z" fill="#2BCE9A" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M93.1897 75.21C97.5188 67.8082 99.9999 59.1938 99.9999 49.9998C99.9999 40.8875 97.5627 32.3445 93.3047 24.9872L93.2734 25.0054L93.6025 25.5753L71.7186 38.211C73.5998 41.7231 74.6666 45.7369 74.6666 49.9998C74.6666 54.2619 73.6003 58.2749 71.7198 61.7865L93.6043 74.4215L93.1594 75.1922L93.1897 75.21Z" fill="#F09F2E" />
                    </svg>
                    <p className="font-bold">mlthsc.</p>
                </a>
                <ul className='text-sm flex items-center gap-3'>
                    <a href='#'>
                        Home
                    </a>
                    <a href='#'>
                        Saved Posts
                    </a>
                    <a href='#'>
                        Dashboard
                    </a>

                </ul>
            </Container>
        </nav>
    )
}

export default Navbar