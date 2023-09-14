import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const VideoEmbed: React.FC<{ video_id: string }> = ({ video_id }) => {
  if (video_id) {
    return (
      <LiteYouTubeEmbed
        aspectHeight={9}
        aspectWidth={16}
        id={video_id}
        title="NIMA"
      />
    );
  } else {
    return null;
  }
};
export default VideoEmbed;
