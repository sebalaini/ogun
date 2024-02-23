import React from 'react'
import PropTypes from 'prop-types'

import contactStyle from './Contact.module.css'

// import Pdf from '../../pdf/rider_ogun_afrobeat.pdf'

export default class Contact extends React.Component {
  render () {
    return (
      <>
        <section id='contact' className={`${contactStyle.contact} container-fluid section`}>
          <h1>
            {this.props.title}
          </h1>

          <p>
            {this.props.text_1} <a href="mailto:ogunafrobeat@gmail.com">{this.props.text_2}</a>
          </p>

          <p>
            {this.props.text_3} <a href="/pdf/rider_ogun_afrobeat.pdf">Rider</a>
          </p>

        </section>
        <footer className={`${contactStyle.footer} text-center`}>
          &copy; Copyright Ogun Afrobeat {new Date().getFullYear()}
        </footer>
      </>
    )
  }
}

Contact.propTypes = {
  title: PropTypes.string,
  text_1: PropTypes.string,
  text_2: PropTypes.string,
  text_3: PropTypes.string,
}
