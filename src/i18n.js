import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import Polyglot, { updatePolyglot } from './provider'

// Provider root component
export default class I18n extends Component {
  constructor(props) {
    super(props)

    updatePolyglot(props.locale, props.messages)
  }

  getChildContext() {
    return { t: Polyglot.t.bind(Polyglot) }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.locale !== this.props.locale) {
      Polyglot.locale(newProps.locale)
    }

    if (newProps.messages !== this.props.messages) {
      Polyglot.replace(newProps.messages)
    }
  }

  render() {
    const children = this.props.children
    return Children.only(children)
  }
}

I18n.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

I18n.childContextTypes = {
  t: PropTypes.func.isRequired,
}
