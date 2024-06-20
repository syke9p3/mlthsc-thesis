import Container from "./Container"
import { BsThreeDots } from "react-icons/bs"
import { IoTrash } from "react-icons/io5";
import { SavedPost } from "../types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteAllSavedPost, fetchSavedPosts } from "../api/api";

const SavedPosts = () => {

    const queryClient = useQueryClient();

    const { data: posts } = useQuery({
        queryKey: ['savedPosts'],
        queryFn: fetchSavedPosts,
    });

    const doDeleteAllPosts = useMutation({
        mutationFn: deleteAllSavedPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['savedPosts'] })
        },
        onError: (error) => {
            console.log('error:', error.message);
        }
    })

    const handleDeleteAllPost = () => {
        doDeleteAllPosts.mutate()
    }


    return (
        <section id="saved-posts">
            <Container>
                <div className="m-2 overflow-hidden rounded-xl border border-gray-300  bg-red-500 mx-8">
                    <div className="bg-[#22242B] py-4 px-6 flex justify-between ">
                        <h1 className="uppercase text-[#FAFFFF] font-bold">Saved Posts</h1>

                        <button
                            onClick={handleDeleteAllPost}
                            className="bg-[#22242B] text-[#FAFFFF] px-2 py-1 rounded-lg">
                            <BsThreeDots />
                            <div className="text-left">
                                <h1 className="text-[#FAFFFF] font-bold text-xs">(download all)</h1>
                                <h1 className="text-[#FAFFFF] font-bold text-xs">(clear history)</h1>
                            </div>
                        </button>
                    </div>
                    <div className="py-4 px-6 bg-white">
                        {posts ? posts.map((post: SavedPost) => (
                            <Post key={post.id} post={post} />
                        )) :
                            <EmptyPosts />
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SavedPosts

const Post = ({ post }: { post: SavedPost }) => {

    // TODO: delete confirmation modal

    return (
        <div className="mb-6 ,">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-bold">{post.id}</h1>
                <button
                    className="text-[#22242B] px-2 py-1 rounded-lg flex gap-1 items-center">
                    <IoTrash size={24} className="text-red-500" />
                </button>
            </div>
            <p className="text-xs">{post.text}</p>
            <div className="">
                <ul className="flex flex-wrap items-center gap-1 mt-4">
                    {/* {
                        post.labels.map((label, i) => {
                            let labelName = label.name.toLowerCase();
                            let bgColor = 'bg-' + labelName

                            return (
                                <span key={label.name + Date.now().toString()} className={twMerge(`text-xs font-bold text-white rounded-md py-1 px-2`, bgColor)}>
                                    {label.name} {label.probability}
                                </span>
                            );
                        })
                    } */}
                    {/* <span className="text-xs font-bold bg-red-500 text-white rounded-md py-1 px-2">Age 33%</span>
                    <span className="text-xs font-bold bg-orange-500 text-white rounded-md py-1 px-2">Gender 45%</span>
                    <span className="text-xs font-bold bg-yellow-500 text-white rounded-md py-1 px-2">Physical 32%</span>
                    <span className="text-xs font-bold bg-teal-500 text-white rounded-md py-1 px-2">Race 8.23%</span>
                    <span className="text-xs font-bold bg-blue-600 text-white rounded-md py-1 px-2">Religion 95.2%</span>
                    <span className="text-xs font-bold bg-gray-600 text-white rounded-md py-1 px-2">Others 2%</span> */}
                </ul>
            </div>
        </div>
    )
}

const EmptyPosts = () => {
    return (
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