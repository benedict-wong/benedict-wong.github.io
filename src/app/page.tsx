import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import TechStack from './components/techstack/TechStack'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </>
  )
}
