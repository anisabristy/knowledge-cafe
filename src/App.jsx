import { useState } from 'react'
import Header from './components/header/header'

import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
   <main className='flex'>
      <Blogs></Blogs>
     <Bookmarks></Bookmarks>
   </main>
    </>
  )
}

export default App
