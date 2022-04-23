// import React, { Component } from 'react'
// import { ThemeContext } from './ThemeContext';

// class ThemeButton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
//       <button 
//         {...props} 
//         onClick={props.changeTheme}
//         style={{backgroundColor: theme.background, 
//         color: theme.foreground}}>Button</button>
//     )
//   }
// }

// ThemeButton.contextType = ThemeContext

// export default ThemeButton;

import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeButton(props) {
  const theme = useContext(ThemeContext)
  return (
    <button 
        {...props} 
        onClick={props.changeTheme}
        style={{backgroundColor: theme.background, 
        color: theme.foreground}}>Button</button>
  )
}
