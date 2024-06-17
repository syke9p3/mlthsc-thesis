import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface Label {
    name: string;
    probability: string;
}

interface ClassifierResultsProps {
    labels?: Label[];
    text?: string;
}


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


const OutputLabels = ({ labels, text }: ClassifierResultsProps) => {

    const [processedLabels, setProcessedLabels] = useState<{ name: string; probability: number; }[]>([]);

    useEffect(() => {
        const newLabels: { name: string; probability: number; }[] | undefined = labels?.map(label => ({
            ...label,
            probability: parseFloat(label.probability.replace('%', ''))
        }));

        setProcessedLabels(newLabels || []);
    }, [labels]);


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
            fill: {
                colors: processedLabels.map(label => labelTocolor(label.name, label.probability))
            }


        },

    }

    return (
        <div className="my-6 mx-6">


            <div>
                <h3 className="text-xl font-bold my-2">Labels</h3>
                {/* @ts-ignore */}
                <div className='relative w-full h-full bg-white bg-gray- bg-'>
                    <ReactApexChart options={config.options} series={config.series} type="bar" />
                </div>
            </div>
            <div className='mb-6'>
                <h3 className="text-xl font-bold my-2">Text</h3>
                <div className='bg-[#EBEFF5] px-2 py-3 rounded-md max-h-[100px] overflow-scroll'>
                    <h3 className='text-xs  text-[#22242B]/80  text-ellipsis'>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default OutputLabels