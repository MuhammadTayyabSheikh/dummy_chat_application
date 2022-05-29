import { BsCameraVideo, BsTelephone } from "react-icons/bs";

const Header = (props) => {
	const { userName } = props;
	return (
		<div className='flex justify-between border-b py-4'>
			<h3 className='font-semobold text-2xl text-slate-900'>{userName}</h3>

			<div className='flex items-center gap-5'>
				<button className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:shadow'>
					<BsCameraVideo />
				</button>
				<button className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:shadow'>
					<BsTelephone />
				</button>
			</div>
		</div>
	);
};
export default Header;
