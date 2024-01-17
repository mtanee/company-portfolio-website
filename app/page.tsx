
import Hero from './components/Hero'
import About from './components/About'

import Gap from './components/Gap'
import Vision from './components/Vision'
import Client from './components/Client'
import Work from './components/Work'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Box from './components/Box'
import Coref from './components/Coref'
import Team1 from './components/Team1'
import CRev from './components/CRev'
import Anim_opacity from './components/Animation/Anim_opacity'
export default function Home() {
  return (
    <div className=''>
    
        <Hero />
        <Gap />
        <Anim_opacity duration={2}  >
        
      <About/>
      </Anim_opacity>
      <Box />
      <Gap />
      
      <Coref />
      
      <Gap />
      <Client />
      
      
      <Gap />
      <Team1 />
     
      <Gap />
      <Work />
     <Gap />
      <Vision />
      <Gap />
      <CRev />
      <Gap />
      <Contact />
      <Footer />

      
      
      </div>
    
  )
}
