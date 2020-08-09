import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import data from './data.json'
import titles from './titles.json'
import './styles.css'

function useTracks() {
  const [tracks, setTracks] = useState(null)
  useEffect(() => {
    setTimeout(() => setTracks(data), 1)
  }, [])
  return tracks
}

function TrackList({ tracks }) {
  if (!tracks) {
    return <h3>Loading ...</h3>
  }

  return (
    <ListGroup variant="flush">
      {tracks.map((track, index) => (
        <ListGroup.Item key={track.imgSrc}>
          <strong>{index + 1} </strong>
          <img src={`https://www.wetafx.co.nz/${track.imgSrc}`} alt={track.imgSrc} width="200px" />

          <h4 className="link">{titles[track.href]}</h4>
          <a
            className="link"
            href={`https://www.google.com/search?q=${encodeURIComponent(titles[track.href])}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5>Search Google for {titles[track.href]}</h5>
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default function App() {
  const tracks = useTracks()
  return (
    <div>
      <TrackList tracks={tracks} />
    </div>
  )
}
