import React from 'react'
import landingStyle from './Landing.module.css'

export default class Landing extends React.Component {
  render () {
    return (
      <section className={`${landingStyle.Landing} section`} id='home'>
        <div className={landingStyle.info}>

          <h1>Ogun <span>Afrobeat</span></h1>

          <section className="contact_div_outer">
            <div className={landingStyle.contact_div}>
              <ul className={`${landingStyle.social_logos} clearfix`}>

                <li>
                  <a href="mailto:ogunafrobeat@gmail.com" className="social">
                    <span className="visuallyhidden">email</span>
                    <svg viewBox="0 0 448 512">
                      <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.facebook.com/ogunafrobeat/" target="_blank" rel="noopener noreferrer" className="social">
                    <span className="visuallyhidden">facebook</span>
                    <svg viewBox="0 0 448 512">
                      <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/channel/UCdJ_MUkEWP__zRY6fy7l66g" target="_blank" rel="noopener noreferrer" className="social">
                    <span className="visuallyhidden">youtube</span>
                    <svg viewBox="0 0 448 512">
                      <path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/ogunafrobeat/" target="_blank" rel="noopener noreferrer" className="social">
                    <span className="visuallyhidden">instagram</span>
                    <svg fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 640 640" style={{marginTop: 3 + 'px'}}>
                      <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM225.05 97.348h189.912c71.316 0 129.628 57.591 129.628 127.95v189.404c0 70.37-58.312 127.95-129.628 127.95H225.05c-71.304 0-129.628-57.58-129.628-127.95V225.298c0-70.36 58.324-127.95 129.628-127.95zm93.745 102.426c69.296 0 125.541 56.233 125.541 125.54 0 69.309-56.245 125.53-125.54 125.53-69.32 0-125.542-56.221-125.542-125.53 0-69.307 56.221-125.54 125.541-125.54zm0 42.402c45.887 0 83.139 37.229 83.139 83.139 0 45.898-37.252 83.138-83.139 83.138-45.91 0-83.15-37.24-83.15-83.138 0-45.91 37.24-83.14 83.15-83.14zm121.454-59.8c11.256 0 20.375 9.118 20.375 20.374 0 11.256-9.119 20.386-20.375 20.386s-20.386-9.13-20.386-20.386c0-11.256 9.13-20.374 20.386-20.374zm-199.69-48.65h158.895c59.658 0 108.45 48.544 108.45 107.87v159.688c0 59.327-48.792 107.87-108.45 107.87H240.558c-59.646 0-108.45-48.543-108.45-107.87V241.597c0-59.328 48.804-107.871 108.45-107.871z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/ogunafrobeat" target="_blank" rel="noopener noreferrer" className="social">
                    <span className="visuallyhidden">twitter</span>
                    <svg viewBox="0 0 448 512">
                      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                    </svg>
                  </a>
                </li>

              </ul>
            </div>
          </section>
        </div>
      </section>
    )
  }
}
