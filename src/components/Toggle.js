import React, { Component } from 'react'
import Switch from './Switch'

class Toggle extends Component {
	static defaultProps = {
		onToggle: () => {}
	}

	state = {
		on: false
	}

	toggle = () => { 
		this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on))
	}

	render() {
		return <Switch on={this.state.on} onClick={this.toggle} />
	}
}

export default Toggle