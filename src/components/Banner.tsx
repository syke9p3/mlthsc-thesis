
import Container from './Container'

const Banner = () => {
    return (
        <section className="bg-[#22242B] text-[#EBEFF5] ">
            <Container className="text-center pb-12 pt-8 px-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold tracking-tighter ">Multilabel Tagalog Hate Speech Classifier</h1>
                <p className="capitalize text-sm mt-4 max-w-md">MULTILABEL CLASSIFICATION OF TAGALOG HATE SPEECH USING BIDIRECTIONAL ENCODER REPRESENTATIONS FROM TRANSFORMERS (BERT) </p>
            </Container>
        </section>
    )
}

export default Banner