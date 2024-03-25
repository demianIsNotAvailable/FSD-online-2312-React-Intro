import "./CharacterCard.css"

export const CharacterCard = ({ character, handleClick }) => {

    return (
        <div className="character-card" onClick={handleClick}>
            <h4>{character.name}</h4>
            <h5>{character.species}</h5>
            <img src={character.image}></img>
        </div>
    )
}