import dayjs from "dayjs";
import Header from "./Header";
import Messages from "./Messages";
import Write from "./Write";

const ChatBox = ({ userName, messages, sendMessage }) => {
	console.log(messages);
	return (
		<div className='w-full max-w-lg rounded-lg bg-gray-50 px-8 py-2 shadow'>
			<Header userName={userName} />
			<Messages />
			<Write
				sendMessage={(message) => {
					sendMessage({
						text: message,
						userName,
						time: dayjs().toDate(),
					});
				}}
			/>
		</div>
	);
};

export default ChatBox;
