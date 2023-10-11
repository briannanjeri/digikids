import React from 'react'
import ModalVideo from 'react-modal-video'

const VideoModal = ({ isVideoOpen, setIsVideoOpen, videoId = 'u9QLk_K8Hlw' }) => (
  <ModalVideo channel="youtube" autoplay isOpen={isVideoOpen} videoId={videoId} onClose={() => setIsVideoOpen(false)} />
)

export default VideoModal
