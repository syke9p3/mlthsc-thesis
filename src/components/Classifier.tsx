import { useState } from 'react'
import InputArea from './InputArea'
import OutputArea from './OutputArea'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Container from './Container'
import { fetchOutput } from '../api/api'

interface Result {
    text: string;
    labels: { name: string; probability: string; }[];
}

const Classifier = () => {

    const [result, setResult] = useState<Result>({ text: '', labels: [] });

    const mutation = useMutation({
        mutationFn: fetchOutput,
        onSuccess: (res) => {
            console.log('data:', res.data);
            setResult(res.data);
            toast.success('Hate speech classified successfully!');
        },
        onError: (error: AxiosError) => {
            console.log('error:', error.message);
            toast.error(error.message);
        }
    })

    const handleSubmit = (inputText: string) => {
        console.log('handleSubmit', inputText)
        mutation.mutate(inputText)
    }


    return (
        <>
            <Toaster position="top-right" toastOptions={{
                success: {
                    className: 'bg-teal-500 text-white',
                    iconTheme: {
                        primary: '#FFFFFF',
                        secondary: '#2DD4BF',
                    },
                },
                error: {
                    className: 'bg-red-500 text-white',
                    iconTheme: {
                        primary: '#FFFFFF',
                        secondary: '#EF4444',
                    },
                }
            }} />

            <Container>
                <div className='grid md:grid-cols-12'>
                    <div className='md:col-span-8'>
                        <InputArea handleSubmit={handleSubmit} isPending={mutation.isPending} />
                    </div>
                    <div className='md:col-span-4'>
                        <OutputArea text={result.text} labels={result.labels} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Classifier