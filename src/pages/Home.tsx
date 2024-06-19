import About from "../components/About"
import Banner from "../components/Banner"
import Classifier from "../components/Classifier"
import SavedPosts from "../components/SavedPosts"

const Home = () => {

    return (
        <main className="bg-[#F7F8F9]">
            <Classifier />
            <SavedPosts />
            <About />
            <Banner />
        </main>
    )
}

export default Home

