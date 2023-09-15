import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Players from './Component/Players/Players'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectPlayer, setSelectPlayer] = useState([]);

  const handleCancelSelectedPlayer = player => {
    const newPlayers = selectPlayer.filter(item => item.id !== player.id)
    setSelectPlayer(newPlayers)
    toast.success(`Successfully Deleted ${player.name}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const handleSelectPlayer = player => {
    const have = selectPlayer.find(item => item.id === player.id)
    if(have){
      toast.error(`Already Selected ${player.name}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else if(selectPlayer.length>10){
      toast.error(`You con't select more then 11 players`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      setSelectPlayer([...selectPlayer, player])
        toast.success(`Successfully select ${player.name}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }
  }
  return (
    <>
      <Header
        selectPlayer={selectPlayer}
        handleCancelSelectedPlayer={handleCancelSelectedPlayer}
      />
      <Players 
        handleSelectPlayer={handleSelectPlayer}
      />
      <ToastContainer />
    </>
  )
}

export default App
