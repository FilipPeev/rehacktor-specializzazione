import { useEffect, useState, useRef, useCallback } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import supabase from '../supabase/supabase-client';

const chatContainer = {

};

dayjs.extend(relativeTime);

export default function RealtimeChat({ data }) {
    const [messages, setMessages] = useState([]);
    const [loadingInitial, setLoadingInitial] = useState(false);
    const [error, setError] = useState("");
    const messageRef = useRef(null);

    const scrollSmoothToBottom = () => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    };

    const getInitialMessages = useCallback(async () => {
        setLoadingInitial(true);
        const { data: messages, error } = await supabase
            .from("message")
            .select()
            .eq("game_id", data?.id);
        if (error) {
            setError(error.message);
            return;
        }
        setLoadingInitial(false);
        setMessages(messages);
    }, [data?.id]);

    useEffect(() => {
        if (data) {
            getInitialMessages();
        }

        const channel = supabase
            .channel("message")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "message" },
                () => getInitialMessages()
            )
            .subscribe();

        return () => {
            if (channel) {
                supabase.removeChannel(channel);
            }
            channel.unsubscribe();
        };
    }, [data, getInitialMessages]);

    useEffect(() => {
        scrollSmoothToBottom();
    }, [messages]);

    // console.log(messages);
    return (
        <div ref={messageRef} className="chatboxStyle">
            {loadingInitial && <progress></progress>}
            {error && <article>{error}</article>}
            {messages &&
                messages.map((message) => (

                    <article key={message.id}>
                        <p className="mb-1">
                            <span className="textUsername">
                                {message.profile_username}:
                            </span>
                            <span className="textMessaggio ms-2">
                                {message.content}
                            </span>
                        </p>
                        <p className="textOrario ">{dayjs(message.updated_at).format("DD/MM HH:mm")}</p>
                        <p className="textOrario mb-0">

                        </p>
                    </article>
                ))}
        </div>
    );
}
