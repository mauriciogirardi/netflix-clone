'use client'

import { useEffect, useState } from 'react'

export function VideoRecorder() {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [time, setTime] = useState(0)
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream)
      })
      .catch((error) => {
        console.error('Error accessing camera and microphone:', error)
      })
  }, [])

  const handleRecord = () => {
    if (!stream) return
    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'video/webm;codecs=vp9,opus',
      videoBitsPerSecond: 6000000,
      audioBitsPerSecond: 128000,
    })

    const recordedChunks: Blob[] = []

    mediaRecorder.ondataavailable = (event) => {
      recordedChunks.push(event.data)
    }

    mediaRecorder.onstop = () => {
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
      setRecordedVideo(URL.createObjectURL(recordedBlob))
    }

    mediaRecorder.start()

    setTimeout(() => {
      setTime((prev) => prev + 1)
      mediaRecorder.stop()
    }, 30000) // Record for 30 seconds
  }

  return (
    <div>
      <button onClick={handleRecord}>Record {time}</button>

      {recordedVideo && (
        <div>
          <video
            src={recordedVideo}
            className="h-auto w-full"
            width={1920}
            height={1080}
            autoPlay
          />
          <a href={recordedVideo} download="recorded_video.webm">
            Download Video
          </a>
        </div>
      )}
    </div>
  )
}
