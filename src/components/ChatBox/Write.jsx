import { useState } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Write = ({ sendMessage }) => {
	const [message, setMessage] = useState("");
	// console.log(message);
	return (
		<form
			className='flex items-center gap-4 border-t py-4'
			onSubmit={(e) => {
				e.preventDefault();
				sendMessage(message);
				setMessage("");
			}}
		>
			<button
				type='button'
				className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-lg text-slate-700 transition hover:shadow'
			>
				<MdOutlineEmojiEmotions />
			</button>

			<input
				className='text-wrap flex-1 bg-transparent focus:outline-none'
				type='text'
				placeholder='Type you Message'
				onChange={(e) => setMessage(e.target.value)}
				value={message}
			/>

			<button
				type='button'
				className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-lg text-slate-700 transition hover:shadow'
			>
				<AiOutlinePaperClip />
			</button>

			<button className='flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-lg text-white transition hover:bg-red-600'>
				<FiSend />
			</button>
		</form>
	);
};
export default Write;
