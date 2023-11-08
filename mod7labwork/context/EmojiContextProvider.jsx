import { createContext } from "react";
// import the createContext from React to create the context 
import { useContext } from "react";
// import useContext to use the context 
import { useState } from "react";

const EmojiContext = createContext();
// create a context for the emoji 



export const EmojiContextProvider = (props) => {
    const [emoji, setEmoji] = useState('happy');

    const handleMood = () => {
        setEmoji(emoji === 'happy' ? 'sad' : 'happy'); //define setEmoji function to change state using a handle function 
    };

    return (
        <EmojiContext.Provider value={{ emoji, handleMood }}>
            {props.children}
        </EmojiContext.Provider>
    );
};
export const useEmojiContext = () => {
    return useContext(EmojiContext);
};
// create a custom hook to access the context

