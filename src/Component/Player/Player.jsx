import PropTypes from 'prop-types';

const Player = ({player, handleSelectPlayer}) => {
    const {age, description, name, player_role, img, id, home_division, tagline} = player;
    return (
        <div className="card card-compact border-2">
        <figure className='min-h-[250px] bg-black'><img src={img} alt={`image of ${name}`} className=' w-full h-fit'/></figure>
        <div className="card-body">
            <h2 className="text-lg font-bold">
            {name}
            <span className="border-2 rounded-2xl pr-2 pl-1 ml-1"> {age}</span>
            </h2>
            <span className='font-medium text-base'>{player_role}</span>
            <span className='text-sm text-justify'>{description.slice(0,100)}</span>
            <div className="card-actions items-center justify-between mt-5">
                <button 
                    className="btn btn-primary btn-outline"
                    onClick={()=>document.getElementById(`my_modal_5${id}`).showModal()}
                >Details</button>
                <dialog id={`my_modal_5${id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <figure><img src={img} alt={`image of ${name}`} className=' w-full h-fit'/></figure>
                    <div className="card-body">
                        <h2 className="text-lg font-bold">
                        {name}
                        <span className="border-2 rounded-2xl pr-2 pl-1 ml-1"> {age}</span>
                        </h2>
                        <span className='text-sm'>Tagline: {tagline}</span>
                        <span className='font-medium text-lg'>Playing role: {player_role}</span>
                        <span className='text-base font-light'>{home_division}</span>
                        <span className='text-sm text-justify'>{description}</span>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-primary btn-outline">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
                <button 
                    className="btn btn-primary btn-outline"
                    onClick={()=>handleSelectPlayer(player)}
                >Select</button>
            </div>
        </div>
        </div>
    );
};

Player.propTypes = {
    player : PropTypes.object,
    handleSelectPlayer : PropTypes.func,
};

export default Player;