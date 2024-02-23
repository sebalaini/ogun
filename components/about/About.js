import React from 'react'
import PropTypes from 'prop-types'

import aboutStyle from './About.module.css'

export default class About extends React.Component {
  render () {
    return (
      <section id='about' className={`${aboutStyle.about} container-fluid section`}>

        <div className='row'>

          <div className="col-sm-12 col-lg-6 col-xl-5 mx-auto" >
            <p className={`${aboutStyle.capitalP} ${aboutStyle.aboutP}`}>
              {this.props.text_1}
            </p>
          </div>

          <div className="col-sm-12 col-lg-6 col-xl-5 mx-auto">
            <p className={`${aboutStyle.capitalP} ${aboutStyle.aboutP}`}>
              {this.props.text_2}
            <br />
              {this.props.text_2_2}
            </p>
          </div>

        </div>
      </section>
    )
  }
}

About.propTypes = {
  text_1: PropTypes.string,
  text_1_1: PropTypes.string,
  text_2: PropTypes.string,
  text_2_2: PropTypes.string,
  text_3: PropTypes.string,
  text_3_3: PropTypes.string,
}
