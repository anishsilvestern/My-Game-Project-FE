import React from 'react'
import SOSGame from '/src/assets/SOS_game.png'
import './Interface.css'
import { Link } from 'react-router-dom'

const Interface = () => {
  return (
    <div>
        <div className='container-fluid my-3'>
            <div className='row'>
                <div className='col sosMainDiv' style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
                    <h1 className='text-center pacifico-regular sosTitle' style={{marginRight:"2rem"}}>SOS GAME</h1>
                    <img className='sosImage' src={SOSGame} alt="SOS IMAGE" />
                    <div style={{marginLeft:"2rem"}}>
                        <Link to="/sos"><button className="sosBtn pacifico-regular">SOS GO.....</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Interface