import { useState } from 'react'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackgroundEffects } from '@/components/BackgroundEffects'
import { CustomCursor } from '@/components/CustomCursor'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TechMarquee } from '@/components/TechMarquee'
import { ProjectsSpiral } from '@/components/ProjectsSpiral'
import { About } from '@/components/About'
import { Hobbies } from '@/components/Hobbies'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'
import { DevelopmentProcess } from '@/components/DevelopmentProcess'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="grain relative min-h-screen">
      <LoadingScreen onDone={() => setLoaded(true)} />

      {loaded && (
        <>
          <ScrollProgress />
          <BackgroundEffects />
          <CustomCursor />
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <TechMarquee />
            <ProjectsSpiral />
            <About />
            <Hobbies />
            <Education />
            <Projects />
            <TechStack />
            <DevelopmentProcess />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}

export default App
