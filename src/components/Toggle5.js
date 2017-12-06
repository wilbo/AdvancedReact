import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

//
// Children Components

const ToggleOn = withToggle(({ children, toggle: { on } }) => {
	return on ? <p>{children}</p> : null
})

const ToggleOff = withToggle(({ children, toggle: { on } }) => {
	return on ? null : <p>{children}</p>
})

const ToggleButton = withToggle(({ ...props, toggle: { on, toggle } }) => {
	return <Switch on={on} onClick={toggle} { ...props } />
})


//
// Component

class Toggle5 extends Component {
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

export default Toggle5


//
// The Higher Order Component (HOC)

function withToggle(Component) {
	function Wrapper(props, context) {
		const toggleContext = context[TOGGLE_CONTEXT]
		return <Component { ...props } toggle={toggleContext} />
	}

	Wrapper.contextTypes = {
		[TOGGLE_CONTEXT]: PropTypes.object.isRequired
	}

	return Wrapper
}


//
// Custom toggle component

export const MyEventComponent = withToggle(function MyEventComponent({ toggle, on, event }) {
	const props = {[event]: on}
	return toggle.on ? (
		<button { ...props }>
			the {event} event
		</button>
 	) : null
})