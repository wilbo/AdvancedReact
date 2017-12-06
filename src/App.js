import React, { Component } from 'react'
import Toggle from './components/Toggle'
import Toggle2 from './components/Toggle2'
import Toggle3 from './components/Toggle3'
import Toggle4, { CustomToggle } from './components/Toggle4'
import Toggle5, { MyEventComponent } from './components/Toggle5'

class App extends Component {
  render() {
    return (
			<div style={{ margin: 50 }}>
				<h3>Simple toggle:</h3>
				<p>A toggle component in its simpelest form.</p>
				<Toggle onToggle={on => console.log('toggle', on)} />
				<hr />

				<h3>Compound Toggle:</h3>
				<p>A flexible toggle component with modular extra functionality.</p>
				<Toggle2>
					<Toggle2.Button />
					<Toggle2.On>Toggle is on</Toggle2.On>
					<Toggle2.Off>Toggle is off</Toggle2.Off>
				</Toggle2>
				<hr />

				<h3>Compound Context Toggle:</h3>
				<p>The nested components will be accessed by context. This makes for flexible nesting inside the compound component (look at the source).</p>
				<Toggle3>
					<Toggle3.Button />
					<Toggle3.On>Toggle is on</Toggle3.On>
					<div>
						<Toggle3.Off>Toggle is off</Toggle3.Off>
					</div>
				</Toggle3>
				<hr />

				<h3>Compound Context Hoc Toggle:</h3>
				<p>Using higher order components (hoc's) to create even more flexiblity by allowing the user to access the toggled state in their own components.</p>
				<Toggle4>
					<Toggle4.Button />
					<Toggle4.On>Toggle is on</Toggle4.On>
					<div>
						<Toggle4.Off>Toggle is off</Toggle4.Off>
					</div>
					<CustomToggle />
				</Toggle4>
				<hr />

				<h3>Avoiding Prop Namespace Collisions:</h3>
				<p>Adding a single prop instead of multiple (by using the spread operator) will prevent namespace collisions.</p>
				<Toggle5>
					<Toggle5.Button />
					<Toggle5.On>Toggle is on</Toggle5.On>
					<Toggle5.Off>Toggle is off</Toggle5.Off>
					{ /* 'on' would collide with Toggle5's 'on'  */ }
					<MyEventComponent event="onClick" on={e => console.log(e.type)} />
				</Toggle5>
				<hr />
			</div>
    );
  }
}

export default App


