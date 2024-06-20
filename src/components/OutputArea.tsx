import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { IoIosSave } from 'react-icons/io';
import { addSavedPost, deleteAllSavedPost } from '../api/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';


interface Result {
    text: string;
    labels: { name: string; probability: string; }[];
}

const OutputArea = ({ text, labels }: Result) => {

    const queryClient = useQueryClient();

    const doSavePost = useMutation({
        mutationFn: addSavedPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['savedPosts'] })
            toast.success('Post saved successfully');
        },
        onError: (error) => {
            console.log('error:', error.message);
            toast.error('Post failed to save');

        }
    })


    const handleSavePost = ({ text, labels }: Result) => {
        doSavePost.mutate({ text, labels })
    }


    const [processedLabels, setProcessedLabels] = useState<{ name: string; probability: number; }[]>([]);

    useEffect(() => {
        const newLabels: { name: string; probability: number; }[] | undefined = labels.map(label => ({
            ...label,
            probability: parseFloat(label.probability.replace('%', ''))
        }));

        setProcessedLabels(newLabels || []);
    }, [text]);


    const config = {
        series: [{
            data: processedLabels.map(label => label.probability)
        }],
        options: {
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    distributed: true,
                    startingShape: "flat",
                    endingShape: "rounded",
                    dataLabels: {
                        position: 'bottom',
                    },
                },
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: processedLabels.map(label => label.name),
            },
            // fill: {
            //     colors: processedLabels.map(label => labelTocolor(label.name, label.probability))
            // }


        },

    }

    return (
        <section className="py-6 px-2 ">
            <Toaster position='top-right' />
            <div className="max w-lg my-6 mx-6">
                <div className='mb-6'>
                    <h3 className="text-xl font-bold my-2  text-center opacity-0">Text</h3>
                    <div className='bg-[#EBEFF5] px-2 py-3 rounded-md max-h-[100px] overflow-scroll  text-center'>
                        <h3 className='text-xs  text-[#22242B]/80  text-ellipsis'>{text}</h3>
                    </div>
                </div>

                <div className='grid gap-2 mb-6'>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-xl font-bold my-2">Labels</h3>
                        <button
                            onClick={() => { handleSavePost({ text, labels }) }}
                            className='bg-[#22242B] text-white px-3 py-2 animate hover:bg-teal-500 hover:text-white text-xs font-bold shadow-md rounded-md flex gap-2'>
                            <IoIosSave size={18} />
                            Save
                        </button>
                    </div>
                    {/* @ts-ignore */}
                    <div className='relative w-full h-full bg-white bg-gray- bg-'>
                        <ReactApexChart options={config.options} series={config.series} type="bar" />
                    </div>
                </div>

                <div className=''>
                    <h3 className="text-xl font-bold my-2 ">Recent</h3>
                    <div className='space-y-2'>
                        <div className='bg-[#EBEFF5] px-2 py-3 rounded-md max-h-[100px] overflow-scroll'>
                            <h3 className='text-xs text-[#22242B]/80  text-ellipsis'>{text}</h3>
                        </div>
                        <div className='bg-[#EBEFF5] px-2 py-3 rounded-md max-h-[100px] overflow-scroll'>
                            <h3 className='text-xs text-[#22242B]/80  text-ellipsis'>{text}</h3>
                        </div>
                        <div className='bg-[#EBEFF5] px-2 py-3 rounded-md max-h-[100px] overflow-scroll'>
                            <h3 className='text-xs text-[#22242B]/80  text-ellipsis'>{text}</h3>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default OutputArea