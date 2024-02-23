import React from 'react'
import PropTypes from 'prop-types'
import cookieStyle from './Cookie.module.css'


export default class Cookie extends React.Component {
  componentDidMount () {
    this.checkCookie()
  }

  setCookie () {
    let date = new Date()
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + date.toUTCString()
    let secure = window.location.href.indexOf('localhost') > -1 ? '' : 'secure'
    document.cookie = 'cookie=yes;' + expires + ';path=/;SameSite=Lax;' + secure
    document.getElementById('Cookie').className = 'd-none'
  }

  getCookie (cname) {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  checkCookie () {
    let cookie = this.getCookie('cookie')
    if (cookie !== '') {
      document.getElementById('Cookie').style.display = "none"
    }
    else {
      document.getElementById('Cookie').style.display = "block"
    }
  }

  render () {
    return (
      <section className={cookieStyle.Cookie} id='Cookie'>
        <div className={cookieStyle.CookieInternal}>
          <div className={cookieStyle.cookieImage}>
            <svg viewBox="0 0 512 512">
              <path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 00-57.79 57.81l-35.1 68.88a132.645 132.645 0 00-12.82 80.95l12.08 76.27a132.521 132.521 0 0037.16 72.96l54.77 54.76a132.036 132.036 0 0072.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0057.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
            </svg>
          </div>
          <p className={cookieStyle.cookieP}>{this.props.text_1} <a href="https://support.google.com/analytics/answer/6004245" alt='google analytics cookye policy' target="_blank" rel="noopener noreferrer">{this.props.text_2}</a>.</p>
          <button className={cookieStyle.cookieButton} onClick={this.setCookie}>OK</button>
        </div>
      </section>
    )
  }
}

Cookie.propTypes = {
  text_1: PropTypes.string,
  text_2: PropTypes.string
}
