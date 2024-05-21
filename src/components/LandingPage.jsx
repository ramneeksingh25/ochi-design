import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
	return (
		<div className="w-full h-screen bg-zinc-900 pt-1">
			<div className="textstructure mt-52 px-20">
				{["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
					return (
						<div
							className="masker"
							key={index}>
								<div className="w-fit flex items-end overflow-hidden">
							{index===1 && (<div className="mr-[1vw] w-[9vw] h-[6vw] bg-white relative top-[1vw]"></div>)}
							<h1 className="uppercase text-[7.5vw] leading-[7vw] font-['Founders Grotesk X-Condensed'] font-semibold tracking-tighter">
								{item}
							</h1>
								</div>
						</div>
					);
				})}
			</div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index) => (
        <p key={index} className="text-md font-light leading-none tracking-tight">
              {item}
        </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase rounded-full">Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong/>
            </span>
          </div>
        </div>
      </div>
		</div>
	);
}

export default LandingPage;
