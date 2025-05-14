import { useContext } from "react";
import supabase from "../supabase/supabase-client";
import SessionContext from "../context/SessionContext";
import RealtimeChat from "./RealtimeChat";

export default function Chatbox({ data }) {
    const { session } = useContext(SessionContext);

    const handleMessageSubmit = async (event) => {
        event.preventDefault();
        const inputMessage = event.currentTarget;
        const { message } = Object.fromEntries(new FormData(inputMessage));
        if (typeof message === "string" && message.trim().length !== 0) {
            const { error } = await supabase
                .from("message")
                .insert([
                    {
                        profile_id: session?.user.id,
                        profile_username: session?.user.user_metadata.username,
                        game_id: data.id,
                        content: message,
                    },
                ])
                .select();
            if (error) {
                console.log(error);
            } else {
                inputMessage.reset();
            }
        }
    };

    return (
        <>
            <div>
                <RealtimeChat data={data && data} />
            </div>

            <form onSubmit={handleMessageSubmit} className="chatFieldset">
                <fieldset role="group">
                    <div className="chatInputWrapper">
                        <input type="text" name="message" placeholder="Chat..." className="inputStyle" />
                        <button type="submit" className="sendButton">Invia</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
