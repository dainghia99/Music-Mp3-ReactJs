import { useEffect, useState, useRef } from "react";
import {
    BiSolidSkipPreviousCircle,
    BiSolidSkipNextCircle,
} from "react-icons/bi";
import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";
import axios from "axios";

const PlayPause = () => {
    const [tracks, setTracks] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:3000/api/music");
            setTracks(response.data);
        }
        fetchData();
    }, []);

    const handlePlayPause = () => {
        console.log(audioRef.current);
        if (audioRef.current.paused) {
            audioRef.current.play().catch((error) => {
                console.error("Playback failed:", error);
                setIsPlaying(false);
            });
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handlePrevious = () => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (tracks.length > 0) {
            audioRef.current.src = `http://localhost:3000${tracks[currentTrackIndex].url}`;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrackIndex, tracks]);

    return (
        <>
            <audio ref={audioRef} className="music">
                {tracks.length > 0 && (
                    <source
                        src={`http://localhost:3000${tracks[currentTrackIndex].url}`}
                        type="audio/mpeg"
                    />
                )}
                Your browser does not support the audio element.
            </audio>
            <div className="flex items-center justify-center gap-4 my-6">
                <button onClick={handlePrevious}>
                    <BiSolidSkipPreviousCircle className="text-5xl" />
                </button>
                <button type="button" onClick={handlePlayPause}>
                    {isPlaying ? (
                        <IoPauseCircle className="text-8xl" />
                    ) : (
                        <IoPlayCircle className="text-8xl" />
                    )}
                </button>
                <button onClick={handleNext}>
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
