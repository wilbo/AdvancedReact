import React, { Component } from 'react'
import Switch from './Switch'

const ToggleOn = ({ on, children }) => {
	return on ? <p>{children}</p> : null
}

const ToggleOff = ({ on, children }) => {
	return on ? null : <p>{children}</p>
}

const ToggleButton = ({ on, toggle, ...props }) => {
	return <Switch on={on} onClick={toggle} { ...props } />
}

class Toggle2 extends Component {
	static On = ToggleOn
	static Off = ToggleOff
	static Button = ToggleButton

	state = {
		on: false
	}

	toggle = () => {
		this.setState(({ on }) => ({
			on: !on
		}))
	}

	render() {
		const children = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				on: this.state.on,
				toggle: this.toggle
			})
		})
		
		return <div>{children}</div>
	}
}

export default Toggle2