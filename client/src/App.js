import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {  ChatScreen, GroupServer, HomeScreen, MicroBlog, Profile, Setting } from './Screens'
import PageNotfound from './Components/404-page/PageNotfound'
import NavComponent from './Components/Nav/NavComponent'

const App = () => {
  return (
    <BrowserRouter>
    <NavComponent />
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/chat' element={<ChatScreen />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/group' element={<GroupServer />} />
        <Route path='/blog' element={<MicroBlog />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='*' element={<PageNotfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App