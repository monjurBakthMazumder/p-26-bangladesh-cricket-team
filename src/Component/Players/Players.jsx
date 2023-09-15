import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';

const Players = ({handleSelectPlayer}) => {

    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('./players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className='px-[10%]'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center underline my-10">Total players: {players.length}</h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center underline">Make Your Dream 11</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 my-10">
                {
                    players.map(player => 
                        <Player
                        handleSelectPlayer={handleSelectPlayer}
                            key={player.id}
                            player={player}
                        />
                    )
                }
            </div>
        </div>
    );
};
Players.propTypes = {
    handleSelectPlayer : PropTypes.func,
};

export default Players;