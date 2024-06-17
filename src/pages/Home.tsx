import About from "../components/About"
import Banner from "../components/Banner"
import InputHateSpeech from "../components/InputHateSpeech"
import SavedPosts from "../components/SavedPosts"

const Home = () => {

    return (
        <main>
            {/* <Banner /> */}
            <InputHateSpeech />
            <SavedPosts />
            <About />
        </main>
    )
}

export default Home