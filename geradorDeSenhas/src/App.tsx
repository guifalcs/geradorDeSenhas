import './App.css'
import Header from './shared/Header'
import MainContent from './components/MainContent'
import Features from './components/Features'
import Tips from './components/Tips'
import Footer from './shared/Footer'
import { Analytics } from '@vercel/analytics/next'

function App() {

  return (
    <>
    <Header />
    <MainContent />
    <Features />
    <Tips />
    <Footer />
    <Analytics />
    </>
  )
}

export default App
