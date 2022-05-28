import Header from "./Header";
import Messages from "./Messages";
import Write from "./Write";

const ChatBox = () => {
    return (
        <div>
            <Header />
            <Messages />
            <Write />
        </div>
    );
}

export default ChatBox;