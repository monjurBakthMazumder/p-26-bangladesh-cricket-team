import PropTypes from 'prop-types';
import { BiSolidSelectMultiple } from 'react-icons/bi';
import SelectPlayer from '../SelectPlayer/SelectPlayer';

const Header = ({selectPlayer, handleCancelSelectedPlayer}) => {
    return (
        <div className="navbar bg-base-100 py-2 shadow-xl px-[10%] sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl">Bangladesh</a>
            </div>
            <div>
                <BiSolidSelectMultiple onClick={()=>document.getElementById('my_modal_5').showModal()} className='text-4xl cursor-pointer'/>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl">Dream-11</h3>
                    <p className='text-base font-light mt-2'>Selected: {selectPlayer.length} players</p>
                    {
                        selectPlayer.map((player, index) => 
                            <SelectPlayer
                                key={index}
                                player={player}
                                handleCancelSelectedPlayer={handleCancelSelectedPlayer}
                            />
                        )
                    }
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-primary btn-outline">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </div>
    );
};

Header.propTypes = {
    selectPlayer : PropTypes.object,
    handleCancelSelectedPlayer : PropTypes.func,
};

export default Header;