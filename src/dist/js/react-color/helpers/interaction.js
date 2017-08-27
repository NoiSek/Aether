import Inferno from 'inferno'
import Component from 'inferno-component'

export const handleFocus = (Component, Span = 'span') => {
  return class Focus extends Component {
    state = { focus: false }
    handleFocus = () => this.setState({ focus: true })
    handleBlur = () => this.setState({ focus: false })

    render = () => (
      <Span onFocus={ this.handleFocus } onBlur={ this.handleBlur }>
        <Component { ...this.props } { ...this.state } />
      </Span>
    )
  }
}
