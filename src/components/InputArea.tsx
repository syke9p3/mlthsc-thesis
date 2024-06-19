import { twMerge } from "tailwind-merge";
import { TbListTree } from "react-icons/tb";
import { CgSpinner } from "react-icons/cg";
import { getWordCount } from "../utils";
import { useState } from "react";

const examples = [
    { id: 'example1', text: 'Ang mga bakla parang tanga lang' },
    { id: 'example2', text: 'Tanginang mga katoliko kala mo diyos' },
    { id: 'example3', text: 'Hoy umayos ka itsura mo pangit ew badjao na arabo bakla' },
]


interface InputSectionProps {
    handleSubmit: Function;
    isPending: boolean;
}

const InputArea = ({ handleSubmit, isPending }: InputSectionProps) => {

    console.log('isPending: is ', isPending)

    const [inputText, setInputText] = useState('');
    const [isValidInput, setIsValidInput] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    const handleSubmitInput = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('handleSubmitInput:', inputText)
        handleSubmit(inputText);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {

        const value = event.target.value;
        setInputText(value);

        const wordCount = getWordCount(value);
        setWordCount(wordCount);
        setIsValidInput(wordCount >= 3 && wordCount <= 280);

    };

    const isButtonDisabled = (!isValidInput || isPending); // disabled when input is invalid or loading
    const isButtonActive = (isValidInput && !isPending); // active when input is valid and not loading
    const isButtonHoverable = (isValidInput && !isPending); // hoverable when input is valid and not loading


    return (
        <section className="py-6 px-2 ">
            <form className="px-6 py-3 border-2=x border-dashed=x">
                <h1 className="mt-1 mb-3 text-center font-bold text-xl ">Input Hate Speech Post</h1>
                <div className="relative border bg-white">
                    <textarea value={inputText}
                        placeholder="Enter hate speech text here"
                        onChange={handleInputChange}
                        className={twMerge(`px-4 pt-4 pb-6 text-sm bg-[#EBEFF5]=x bg-white resize-none w-full  min-h-[400px] focus:outline-none`, `${isValidInput || wordCount === 0 ? 'outline-teal-500 focus:outline-teal-500' : 'outline-red-500 focus:outline-red-500'}`)}
                    />
                    <div className="px-4 py-3  justify-between items-center grid grid-cols-1 sm:flex gap-2">
                        <select className="text-sm px-6 py-4 rounded-md cursor-pointer order-3 sm:order-1"
                            onChange={handleInputChange}
                            value={inputText}
                        >
                            <option value="" defaultValue={""}>Select an example</option>
                            {examples.map((example, i) => (
                                <option key={example.id} value={example.text}>{`Example ${i + 1}`}</option>
                            ))}
                        </select>
                        <div>
                            <h3 className={twMerge("text-sm pointer-events-none order-2 text-right", `${isValidInput || wordCount === 0 ? 'text-teal-500' : 'text-red-500'}`)}>
                                {
                                    wordCount === 0 ? (<span>Minimum <b>3</b> words</span>) : `${wordCount} / 280 words`
                                }
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button disabled={isButtonDisabled}
                        className={`${isButtonActive ? 'opacity-100' : 'opacity-20'}  animate w-full my-3`}
                        onClick={handleSubmitInput}
                    >
                        <span
                            className={twMerge("font-mono text-sm px-6 py-4 bg-[#22242B] grid place-items-center text-white rounded-md items-center gap-2 transition-all duration-100 ease-in-out",
                                `${isButtonHoverable ? 'hover:bg-teal-500' : ''}`)
                            }>
                            <div className="flex gap-1 items-center">
                                {
                                    !isPending ?
                                        (<>
                                            <TbListTree />
                                            Classify
                                        </>) :
                                        (<>
                                            <CgSpinner className="animate-spin" />
                                            Classifying...
                                        </>)
                                }

                            </div>
                        </span>
                    </button>
                </div>
            </form>
        </section>
    );
}

export default InputArea

