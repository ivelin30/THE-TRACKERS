import { createContext, useState } from 'react'
import axios from 'axios';

const DataProvider = createContext({});

export const DataProviderHook = ({children}) => {
  
  const [ navScroll , setNavScroll] = useState(0);
  const [ isOpen , setIsOpen ] = useState(true);
  const [ menuIsOpen , setMenuIsOpen ] = useState(false);
  const [allImage, setAllImage] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const renderAlbums = () => {
    axios.get('http://localhost:5000/albums').
    then(res => {
      const albums = res.data.data
      setAllImage(albums.reverse());
    }).catch(err => {console.log(err)})
  };

  return (
    <DataProvider.Provider value={{
      navScroll, setNavScroll, isOpen, setIsOpen, menuIsOpen , setMenuIsOpen,
      allImage, setAllImage, renderAlbums, isAdmin, setIsAdmin, isLogged, setIsLogged,
      isLoading, setIsLoading,
    }}>
        {children} 
    </DataProvider.Provider>
  )
}

export default DataProvider