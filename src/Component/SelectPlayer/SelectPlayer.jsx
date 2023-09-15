import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';

const SelectPlayer = ({player, handleCancelSelectedPlayer}) => {
    const {img, name, player_role} = player
    return (
        <div className='flex items-center my-5 gap-5 border-4 rounded-xl  overflow-hidden'>
            <img src={img} alt={`image og ${name}`} className='w-28 bg-black'/>
            <div className="flex flex-1 gap-5 items-center justify-between">
                <div className="">
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className='text-lg font-light'>{player_role}</p>
                </div>
                <FiDelete onClick={()=> handleCancelSelectedPlayer(player)} className='text-2xl mr-5 cursor-pointer'/>
            </div>
        </div>
    );
};

SelectPlayer.propTypes = {
    player : PropTypes.array,
    handleCancelSelectedPlayer : PropTypes.func,
};

export default SelectPlayer;