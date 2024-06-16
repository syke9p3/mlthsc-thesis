import About from "../components/About"
import Banner from "../components/Banner"
import HateSpeechTextArea from "../components/HateSpeechTextArea"
import SavedPosts from "../components/SavedPosts"

const Home = () => {

    return (
        <main>
            <Banner />
            <HateSpeechTextArea />
            <SavedPosts />
            <About />
        </main>
    )
}

export default Home