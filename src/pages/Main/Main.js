import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            {/*<About />*/}
            {/* Add courses*/}
            <Education />
            {/* 3 columns with Data Science, Full-stack dev, could engineer*/}
            <Skills />
            <Projects />
            <Achievement />
            <Experience />
            {/*<Services />*/}
            {/*<Testimonials />*/}
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
