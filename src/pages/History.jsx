import video from "../img/pp.mp4";

export default  function History () {
    return (
        <div>
            <video
        className="background-video"
        autoPlay
          muted
          playsInline
          onEnded={() => setShowVideo(false)}
    >
        <source src={video} type="video/mp4" />
        </video>
        </div>
    )
}