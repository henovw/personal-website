//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './Projects.tsx'
import AboutMe from './AboutMe.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
    </Routes>
    </BrowserRouter>
)
