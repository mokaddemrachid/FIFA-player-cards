import React from 'react'
import Player from './Player'


export default function PlayerList({players}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {players.map((el) => <Player key={el.name} player={el} />)}
    </div>
  )
}
