import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

//
// Children Components

const ToggleOn = withToggle(({ on, children }) => {
	return on ? <p>{children}</p> : null
})

const ToggleOff = withToggle(({ on, children }) => {
	return on ? null : <p>{children}</p>
})

const ToggleButton = withToggle(({ on, toggle, ...props }) => {
	return <Switch on={on} onClick={toggle} { ...props } />
})


//
// Component

class Toggle4 extends Component {
	static On = ToggleOn
	static Off = ToggleOff
	static Button = ToggleButton
	static childContextTypes = {
		[TOGGLE_CONTEXT]: PropTypes.object.isRequired
	}

	state = {
		on: false
	}

	toggle = () => {
		this.setState(({ on }) => ({
			on: !on
		}))
	}

	getChildContext = () => ({
		[TOGGLE_CONTEXT]: {
			on: this.state.on,
			toggle: this.toggle
		}
	})

	render() {
		return <div>{this.props.children}</div>
	}
}

export default Toggle4


//
// The Higher Order Component (HOC)

function withToggle(Component) {
	function Wrapper(props, context) {
		const toggleContext = context[TOGGLE_CONTEXT]
		return <Component { ...toggleContext } { ...props } />
	}

	Wrapper.contextTypes = {
		[TOGGLE_CONTEXT]: PropTypes.object.isRequired
	}

	return Wrapper
}


//
// Custom toggle component

export const CustomToggle = withToggle(({ on, toggle }) => {
	return <button onClick={toggle}>
		{ on ? 'on' : 'off' }
	</button>
})