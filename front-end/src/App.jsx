import React from 'react';
import { Header, Info, Topics, Blog, Testimonials, Footer } from './components';
import { MenuIcon } from './assets/svg/MenuIcon';


const App = () => {
  return (
  <>
  <Header />
  <Topics />
  <Info />
  <Blog />
  <Testimonials />
  {/* <Footer /> */}
  <MenuIcon size={'rem'} color={'black'}/>
  </>
  )


};

export default App