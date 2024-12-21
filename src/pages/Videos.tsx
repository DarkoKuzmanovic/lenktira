import { useState, useEffect } from 'react'
import { Video } from '../types'

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const loadVideos = async () => {
      const response = await fetch('/src/content/videos.json')
      const data = await response.json()
      setVideos(data)
    }
    loadVideos()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <h1 className="font-serif text-5xl font-semibold text-gray-900 tracking-tight">
        Video Gallery
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {videos.map((video, index) => (
          <div key={index} className="group space-y-5">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 shadow-md">
              <iframe
                src={video.url}
                className="w-full h-full"
                allowFullScreen
                title={video.title}
              />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-medium text-gray-900 tracking-tight group-hover:text-primary-600 transition-colors">
                {video.title}
              </h2>
              <p className="text-lg text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos