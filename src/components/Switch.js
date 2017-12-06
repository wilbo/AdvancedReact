import React from 'react'
import './Switch.css'

const Switch = ({ on, onClick }) => {
	return <div className={`switch switch-${on ? 'on' : 'off'}`} onClick={onClick}>
		<div></div>
	</div>
}

export default Switch