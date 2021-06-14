import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Container } from '../styles/pages/home'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Home() {
  const [opened, setOpened] = useState(false)

  function handleOpenSidebar(){
    setOpened(!opened)
  }

  return (
    <Container>
       {opened ? (
         <>
          <button className="sidebarOpen" onClick={handleOpenSidebar}>
            <FiX color={"white"} size={35}/>
          </button>

          <Sidebar isOpen/>
         </>
       ) : (
         <>
          <button className="sidebarClose" onClick={handleOpenSidebar}>
            <FiMenu color={"white"} size={35}/>
          </button>
          <Sidebar/>
         </>
       )}


    </Container>
  )
}
