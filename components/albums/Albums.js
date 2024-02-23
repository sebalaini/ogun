import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import albumStyle from './Albums.module.css'

export default class Albums extends React.Component {
  render() {
    return (
      <>
        <section id='albums' className={`${albumStyle.albums} container-fluid section`}>
          <h2>
            {this.props.title}
          </h2>

          <div className={`${albumStyle.rows} row`}>
            <div className={`${albumStyle.cover} col-sm-12 col-md-6`}>
              <Image className={albumStyle.img} src='/img/fresh_me_up.jpg' alt="Fresh Me Up" width="300" height="300" />
            </div>

            <div className={`${albumStyle.songs} col-sm-12 col-md-6 mt-3 mt-md-0`}>
              <ul className={`${albumStyle.ul} list-unstyled`}>
                <li className={albumStyle.albumTitle}>Fresh Me Up</li>
                <li className={albumStyle.albumRelease}>{this.props.release} 2018</li>
                <li>1 Eje Ka Jo Yo 4:58</li>
                <li>2 Fresh Me Up 3:56</li>
              </ul>
            </div>
          </div>

          <div className={`${`${albumStyle.rows} row`} ${albumStyle.rowsRight}`}>
            <div className={`${albumStyle.cover} col-sm-12 col-md-6`}>
              <Image className={albumStyle.img} src='/img/koko_iroyin.jpg' alt="Koko Iroyin" width="300" height="300" />
            </div>

            <div className={`${albumStyle.songs} col-sm-12 col-md-6 mt-3 mt-md-0`}>
              <ul className={`${albumStyle.ul} list-unstyled`}>
                <li className={albumStyle.albumTitle}>Koko Iroyin</li>
                <li className={albumStyle.albumRelease}>{this.props.release} 2016</li>
                <li>1	Efon 6:52</li>
                <li>2	Olofofo	6:07</li>
                <li>3	Aye 6:14</li>
                <li>4	Oro Le Gbo 4:25</li>
                <li>5	Noah&apos;s Dance 4:13</li>
                <li>6	Resurrection Intro 0:50</li>
                <li>7	Resurrection 7:31</li>
                <li>8	Open & Close 5:44</li>
                <li>9	Afromaghreb (Part I) 4:54</li>
                <li>10	Afromaghreb (Part II) 4:43</li>
              </ul>
            </div>
          </div>

          <div className={`${albumStyle.rows} row`}>
            <div className={`${albumStyle.cover} col-sm-12 col-md-6`}>
              <Image className={albumStyle.img} src='/img/observer.jpg' alt="The Observer" width="300" height="300" />
            </div>

            <div className={`${albumStyle.songs} col-sm-12 col-md-6 mt-3 mt-md-0`}>
              <ul className={`${albumStyle.ul} list-unstyled`}>
                <li className={albumStyle.albumTitle}>The Observer</li>
                <li className={albumStyle.albumRelease}>{this.props.release} 2013</li>
                <li>1	Mono Economy 5:28</li>
                <li>2	Ewa Jo 6:25</li>
                <li>3	Colonial Mentality 8:51</li>
                <li>4	The Observer 6:39</li>
                <li>5	Salitre	5:05</li>
                <li>6	Padi Padi	6:29</li>
                <li>7	Eko Ile	5:58</li>
                <li>8	Monday Morning In Lagos	6:03</li>
                <li>9	Fuji 5:28</li>
                <li>10 Fela Licks	4:44</li>
              </ul>
            </div>
          </div>

          <div className={`${`${albumStyle.rows} row`} ${albumStyle.rowsRight}`}>
            <div className={`${albumStyle.cover} col-sm-12 col-md-6`}>
              <Image className={albumStyle.img} src='/img/unite.jpg' alt="Unite" width="300" height="300" />
            </div>

            <div className={`${albumStyle.songs} col-sm-12 col-md-6 mt-3 mt-md-0`}>
              <ul className={`${albumStyle.ul} list-unstyled`}>
                <li className={albumStyle.albumTitle}>Unite</li>
                <li className={albumStyle.albumRelease}>{this.props.release} 2021</li>
                <li>1	Orisun 04:48</li>
                <li>2	Pastorita 05:31</li>
                <li>3	Benefit for all 05:40</li>
                <li>4	Afroshark 06:45</li>
                <li>5	Ashiri Dudu 04:50</li>
                <li>6	Gnawa 05:44</li>
                <li>7	In justice 04:08</li>
              </ul>
            </div>
          </div>

        </section>
      </>
    )
  }
}

Albums.propTypes = {
  title: PropTypes.string,
  release: PropTypes.string,
}
