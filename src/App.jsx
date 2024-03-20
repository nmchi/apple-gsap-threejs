import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HighLights from './components/HighLights'

const App = () => {
    return (
        <main className='bg-black'>
            <Navbar />
            <HeroSection />
            <HighLights />
        </main>
    )
}

export default App