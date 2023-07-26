import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Player({player}) {
  return (
    
    <Card style={{ width: '18rem', backgroundColor: 'gold', borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', margin: '10px'}}>
        <Card.Img 
            variant="top" 
            src={player.image} style={{ width: '100%', height: '300px'}}
        />
      <Card.Body>
        <Card.Title style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}} > 
            {player.name}
        </Card.Title>
        <Card.Text style={{textAlign: 'center'}} >
            {player.team}
        </Card.Text>
        <Card.Text style={{textAlign: 'center'}} >
            {player.nationality}
        </Card.Text>
        <Card.Text style={{textAlign: 'center'}} > #
            {player.jerseyNumber}
        </Card.Text>
        <Card.Text style={{textAlign: 'center'}} >
            {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
    
  )
}


