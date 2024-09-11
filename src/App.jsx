import Title from "./components/title";
import AppImage from "./components/app-image";
import SongName from "./components/song-name";
import Auth from "./components/auth";
import PlayPause from "./components/play-pause";
function App() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-300">
            <div className="w-[450px] h-[600px] p-8 bg-white rounded-lg shadow-lg">
                {/* Title */}
                <Title />
                {/* Image */}
                <div className="flex items-center justify-center my-3">
                    <AppImage />
                </div>
                {/* SongName */}
                <SongName />
                {/* Auth */}
                <Auth />
                {/* Play/Pause */}
                <PlayPause />
            </div>
        </div>
    );
}

export default App;
