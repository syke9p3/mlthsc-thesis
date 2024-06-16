import { useEffect, useState } from "react"
import Container from "./Container"
import { BsThreeDots } from "react-icons/bs"

const SavedPosts = () => {

    const [posts, setPosts] = useState(true)

    useEffect(() => {
        // Fetch saved posts from the localstorage
        try {
            const savedPosts = localStorage.getItem('savedPosts')
            if (savedPosts) {
                // Set the saved posts to the state
                setPosts(JSON.parse(savedPosts))
            }
        } catch (error) {
            console.error(error)
        }

    }, [])

    return (
        <section id="saved-posts">
            <Container>
                <div className="m-2 overflow-hidden rounded-xl border border-gray-300">
                    <div className="bg-[#22242B] py-4 px-6 flex justify-between">
                        <button>
                            <h1 className="uppercase text-[#FAFFFF] font-bold">Saved Posts</h1>
                        </button>
                        <button onClick={() => setPosts((prevPost) => !prevPost)} className="bg-[#22242B] text-[#FAFFFF] px-2 py-1 rounded-lg">
                            <BsThreeDots />
                        </button>
                    </div>
                    <div className="py-4 px-6">
                        {posts && (
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h1 className="text-lg font-bold">Post 1</h1>
                                    <button className="text-[#22242B] px-2 py-1 rounded-lg">
                                        <BsThreeDots />
                                    </button>
                                </div>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio esse dicta adipisci eos expedita beatae molestias, voluptatem ut vero saepe.</p>
                                <div className="">
                                    <div className="flex flex-wrap items-center gap-1 mt-4">
                                        <span className="text-xs font-bold bg-red-500 text-white rounded-md py-1 px-2">Age 33%</span>
                                        <span className="text-xs font-bold bg-orange-500 text-white rounded-md py-1 px-2">Gender 45%</span>
                                        <span className="text-xs font-bold bg-yellow-500 text-white rounded-md py-1 px-2">Physical 32%</span>
                                        <span className="text-xs font-bold bg-teal-500 text-white rounded-md py-1 px-2">Race 8.23%</span>
                                        <span className="text-xs font-bold bg-blue-600 text-white rounded-md py-1 px-2">Religion 95.2%</span>
                                        <span className="text-xs font-bold bg-gray-600 text-white rounded-md py-1 px-2">Others 2%</span>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                        {
                            !posts && (
                                <div className="grid place-items-center w-full h-full bg-red-">
                                    <div className="max-w-sm text-center p-4">
                                        <img src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/ResponseCode/404%20NotFound.png"
                                            alt="404"
                                            className="" />
                                        <h3 className="text-lg my-1 opacity-70">
                                            No saved posts yet
                                        </h3>
                                        <h4 className="opacity-50 mb-2">
                                            Please save a post to view it here
                                        </h4>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SavedPosts