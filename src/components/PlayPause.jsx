import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'


const PlayPause = ({isPlaying, activeSong, song, handlePause, HandlePlay}) =>
 (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={35}
    className="text-gray-300"
    onClick={handlePause}
    />
 ) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={HandlePlay}
    />
 ));

export default PlayPause;
