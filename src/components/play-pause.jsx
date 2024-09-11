import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { IoPlayCircle } from "react-icons/io5";

const PlayPause = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-4 my-6">
                <button>
                    <BiSolidSkipPreviousCircle className="text-5xl" />
                </button>
                <button>
                    <IoPlayCircle className="text-8xl" />
                </button>
                <button>
                    <BiSolidSkipNextCircle className="text-5xl" />
                </button>
            </div>
            <div className="flex items-center justify-center gap-4 my-6">
                <span>00:00</span>
                <input type="range" />
                <span>04:00</span>
            </div>
        </>
    );
};

export default PlayPause;
