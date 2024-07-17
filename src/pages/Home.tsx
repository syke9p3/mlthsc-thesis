import { useEffect, useRef, useState } from "react";
import About from "../components/About"
import Banner from "../components/Banner"
import Classifier from "../components/Classifier"
import SavedPosts from "../components/SavedPosts"

import { pipeline, env, AutoModelForSequenceClassification, AutoTokenizer } from "@xenova/transformers";


const Home = () => {

    const [input, setInput] = useState("Input text")
    const [scores, setScores] = useState(
        [
            { label: "Race", score: 0.9910967946052551 },
            { label: "Physical", score: 0.13646088540554047 },
            { label: "Religion", score: 0.09824617207050323 },
            { label: "Gender", score: 0.06588869541883469 },
            { label: "Age", score: 0.040375784039497375 },
            { label: "Others", score: 0.014223281294107437 },
        ]
    )

    // Keep track of the classification result and the model loading status.
    const [result, setResult] = useState(null);
    const [ready, setReady] = useState(null);



    useEffect(() => {

        const classify = async () => {

            env.allowLocalModels = false;
            const model_name = "syke9p3/bert-multilabel-tagalog-hate-speech-classifier"


            try {
                console.log("Starting classifier...")

                const classifier = await pipeline("text-classification", model_name)

                const input = "parang ewan na arabo naman to"
                const output = await classifier(input, { topk: 6 });

                console.log(input)
                console.log(output)

                // setScores(output)
            } catch (e) {

            }
        }

        classify()


    }, [])

    return (
        <main className="bg-[#F7F8F9]">


            {/* <main className="flex min-h-screen flex-col items-center justify-center p-12">
                <h1 className="text-5xl font-bold mb-2 text-center">Transformers.js</h1>
                <h2 className="text-2xl mb-4 text-center">Next.js template</h2>

                <input
                    className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4"
                    type="text"
                    placeholder="Enter text here"
                    onInput={e => {
                        classify(e.target.value);
                    }}
                />

                {ready !== null && (
                    <pre className="bg-gray-100 p-2 rounded">
                        {(!ready || !result) ? 'Loading...' : JSON.stringify(result, null, 2)}
                    </pre>
                )}
            </main> */}
            <div className="z-50 fixed bottom-0 right-0 p-6 m-6 bg-white min-w-[300px] shadow-lg flex flex-col gap-8">
                <div>{input}</div>
                {scores.map((score, i) => (
                    <div key="i">
                        <p>{score.label}: {(score.score * 100).toFixed(2)}%</p>
                        <div style={{ height: '10px', width: `${score.score * 100}%`, maxWidth: '300px', backgroundColor: 'red' }} />
                    </div>
                ))

                }

            </div>
            <Classifier />
            <SavedPosts />
            <About />
            <Banner />
        </main>
    )
}

export default Home

