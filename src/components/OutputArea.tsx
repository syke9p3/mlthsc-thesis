import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { IoIosSave } from 'react-icons/io';

const labelTocolor = (label: string, probability: number): string => {

    if (probability < 50) return '#CBD5E1'

    let color = ''

    switch (label) {
        case 'Age':
            color = '#EF4444';
            break;
        case 'Gender':
            color = '#F97316';
            break;
        case 'Physical':
            color = '#FEB019';
            break;
        case 'Race':
            color = '#14B8A6';
            break;
        case 'Religion':
            color = '#2563EB';
            break;
        case 'Others':
            color = '#4B5563';
            break;
        default:
            color = '';
            break;
    }

    return color;

}

interface Result {
    text: string;
    labels: { name: string; probability: string; }[];
}

const OutputArea = ({ text, labels }: Result) => {

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
            <div className="max w-lg my-6 mx-6">
                <div className='mb-6'>
                    <h3 className="text-xl font-bold my-2  text-center">Text</h3>
                    <div className='bg-[#EBEFF5] px-2 py-3 rounded-md max-h-[100px] overflow-scroll  text-center'>
                        <h3 className='text-xs  text-[#22242B]/80  text-ellipsis'>{text}</h3>
                    </div>
                </div>
                <div className='grid gap-2'>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-xl font-bold my-2">Labels</h3>
                        <button className='bg-[#22242B] text-white size-8 animate hover:bg-teal-500 hover:text-white text-xs shadow-md rounded-md grid place-items-center'>
                            <IoIosSave size={18} />
                        </button>
                    </div>
                    {/* @ts-ignore */}
                    <div className='relative w-full h-full bg-white bg-gray- bg-'>
                        <ReactApexChart options={config.options} series={config.series} type="bar" />
                    </div>
                </div>

            </div>
        </section>

    )
}

export default OutputArea