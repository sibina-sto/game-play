const GameCard = ({
    game
}) =>{
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src="/images/avatar-1.jpg" />
                <h6>Action</h6>
                <h2>Cover Fire</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div>
    );
} 

export default GameCard;