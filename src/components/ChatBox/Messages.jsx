import Message from "./Message";

const Messages = ({ userName, messages }) => {
	return (
		<div className='thin-scrollbar my-6 flex h-96 flex-col overflow-y-auto overflow-x-hidden pr-2'>
			{messages.map((message, index) => (
				<Message
					key={index}
					self={message.userName === userName}
					text={message.text}
					time={message.time}
				/>
			))}
		</div>
	);
};

export default Messages;
