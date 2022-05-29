import dayjs from "dayjs";

const Message = ({ self, text, time }) => {
	return (
		<div className={`mb-2 flex flex-col ${self ? "self-end" : "self-start"}`}>
			<div
				className={`flex min-w-max max-w-[80%] flex-col rounded-3xl px-4  py-2 shadow  ${
					self
						? "bg-red-500 text-slate-50 shadow-red-600"
						: "bg-slate-200 text-slate-900 shadow-slate-500/20"
				}`}
			>
				{text}
				<small
					className={`font-median mt-1 self-end px-0 text-xs ${
						self ? "text-slate-50" : "text-slate-500"
					}`}
				>
					{dayjs(time).format("HH:mm")}
				</small>
			</div>
		</div>
	);
};

export default Message;
