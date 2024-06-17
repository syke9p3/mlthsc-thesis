import Container from './Container'

const About = () => {
    return (
        <section id="about">
            <Container>
                <div className="text-center">
                    <h1 className="text-3xl font-bold my-6">What is Multilabel Tagalog Hate Speech Classifier?</h1>
                    <p className="text-gray-500 text-sm">
                        The classifier discerns hateful content related to age, gender, race, religion, physical attributes, and other categories, enhancing the identification, and understanding of diverse forms of harmful speech.
                    </p>
                </div>
                <div>
                    [Age - ]
                    [Gender - ]
                    [Physical - ]
                    [Race - ]
                    [Religion - ]
                    [Other - ]
                </div>
            </Container>
        </section>
    )
}

export default About