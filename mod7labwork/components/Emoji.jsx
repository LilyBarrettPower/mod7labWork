
import happyEmoji from '../src/assets/happy.jpeg';
import sadEmoji from '../src/assets/sad.jpeg';
// import the emojis and store in happyEMoji and sadEmoji
import '../src/Emoji.css';
// import the css for the emoji images
import { useEmojiContext } from '../context/EmojiContextProvider';
// import useEmoji custom hook to access the context in this component

const Emoji = () => {
    const { emoji, handleMood } = useEmojiContext(); 

    return (
        <div>
            <h2>Emoji component: </h2>
            <img className="Emoji image" src={emoji === 'happy' ? happyEmoji : sadEmoji} alt="Emoji" />
            {/* if the mood is happy, display the happyEmoji, if not display the sadEmoji */}
            <p>Current mood: {emoji}</p>
            {/* display the emoji here */}
                    <button className="button" onClick={handleMood}>Change mood!</button>
            {/* Add a button to toggle between the moods  */}
        </div>
    );
};

export default Emoji;