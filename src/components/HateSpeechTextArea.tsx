import { useState } from "react";
import Container from "./Container";
import { TbListTree } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";


const examples = [
    { id: 'example1', text: 'Ang mga bakla parang tanga lang' },
    { id: 'example2', text: 'Tanginang mga katoliko kala mo diyos' },
    { id: 'example3', text: 'Hoy umayos ka kasuklam suklam itsura mo kadiri' },
]

const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
}

const HateSpeechTextArea = () => {

    const [inputText, setInputText] = useState('');
    const [isValidInput, setIsValidInput] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {

        const value = event.target.value;
        setInputText(value);

        const wordCount = getWordCount(value);
        setWordCount(wordCount);
        setIsValidInput(wordCount >= 3 && wordCount <= 280);
    };

    const handleSubmitInput = () => {
        setIsLoading(true);
        axios.post(`http://localhost:8080/labels`, { input: inputText }).
            then(response => {
                setIsLoading(false);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            })

    }

    return (
        <section className="py-6 px-2 ">
            <Container className="">
                <div className="px-6 py-3 border-2 border-dashed">
                    <h1 className="mt-1 mb-3 text-center font-bold text-xl">Input Hate Speech Post</h1>
                    <div className="relative border">
                        <textarea value={inputText}
                            placeholder="Enter hate speech text here"
                            onChange={handleInputChange}
                            className="px-3 pt-2 pb-6  bg-[#EBEFF5] resize-none w-full  min-h-[200px] outline-teal-500 focus:outline-none focus:outline-teal-500"
                        />
                        <div className=" bottom-2 right-2 px-3 py-4  pointer-events-none flex justify-end">
                            <span className={twMerge("text-sm  opacity-80", `${isValidInput ? 'text-inherit' : 'text-red-500'}`, `${wordCount > 0 ? 'visible' : 'invisible'}`)}>{wordCount} / 280 words</span>
                        </div>
                    </div>
                    <div className="justify-between grid grid-cols-1 sm:flex ">
                        <select className="text-sm px-6 py-4 my-3 rounded-md cursor-pointer"
                            onChange={handleInputChange}
                            value={inputText}
                        >
                            <option value="" defaultValue={""}>Select an example</option>
                            {examples.map((example, i) => (
                                <option key={example.id} value={example.text}>{`Example ${i + 1}`}</option>
                            ))}
                        </select>
                        <button disabled={!isValidInput}
                            className={`${isValidInput ? 'opacity-100' : 'opacity-20'}  animate`}
                            onClick={handleSubmitInput}
                        >
                            <span
                                className={twMerge("text-sm px-6 py-4 bg-[#22242B] grid place-items-center text-white rounded-md items-center gap-2 transition-all duration-100 ease-in-out",
                                    `${isValidInput || isLoading ? 'hover:bg-teal-500' : ''}`)
                                }>


                                {!isLoading ? (
                                    <div className="flex gap-1 items-center">
                                        <TbListTree />
                                        Classify
                                    </div>) :
                                    <div className="flex gap-1 items-center">
                                        <CgSpinner className="animate-spin" />
                                        Classifying...
                                    </div>
                                }
                            </span>
                        </button>
                    </div>

                </div>
            </Container>
        </section>

    );
}

export default HateSpeechTextArea

