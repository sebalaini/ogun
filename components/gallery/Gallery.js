import React from 'react'
import PropTypes from 'prop-types'

// https://github.com/express-labs/pure-react-carousel
import { CarouselProvider, Slider, Slide, DotGroup, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import galleryStyle from './Gallery.module.css'

export default class Gallery extends React.Component {
  constructor() {
    super()

    this.state = {
      events: ['Title 1', 'Title 2'],
      allphotos: [
        {
          'src': 'ogun5.jpg',
          'title': 'Akin'
        },
        {
          'src': 'ogun.jpg',
          'title': 'Ogun'
        },
        {
          'src': 'ogun1.jpg',
          'title': 'Ogun'
        },
        {
          'src': 'ogun2.jpg',
          'title': 'concert'
        },
        {
          'src': 'ogun3.jpg',
          'title': 'Akin'
        },
        {
          'src': 'ogun6.jpg',
          'title': 'Cafe berlin concert'
        },
        {
          'src': 'enclave.jpg',
          'title': 'Enclave concert'
        },
        {
          'src': 'ogun4.jpg',
          'title': 'concert'
        },
        {
          'src': 'babelsound1.jpg',
          'title': 'Babel sound concert'
        },
        {
          'src': 'babelsound2.jpg',
          'title': 'Babel sound concert'
        },
        {
          'src': 'callesuena.jpg',
          'title': 'la calle suena concert'
        }
      ],
      singleEvent: [],
      allvideos: [
        {
          src: 'esw6QLSl9_E',
          title: 'ololo live',
        },
        {
          src: '-DhPBYC8VAY',
          title: 'ashiri dudu live',
        },
        {
          src: 'QzRjVFw8yaY',
          title: 'efon live',
        },
        {
          src: 'RUssvHLdBT8',
          title: 'resurrection live',
        },
      ]
    }
  }

  ImagesComponent = () => this.state.allphotos.map((image, key) =>
    <img key={key} src={`../../img/${image.src}`} className='lazy' alt={image.title} />
  )

  VideosComponent = () => this.state.allvideos.map((video, key) => (
    <Slide index={key} key={key}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
          src={'https://www.youtube.com/embed/' + video.src}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.title}
        />
      </div>
    </Slide>
    )
  )

  render () {
    return (
      <section id='gallery' className={`${galleryStyle.gallery} container-fluid section`}>

        <h2 className="text-center">{this.props.gallery_prop_title}</h2>

        <div className={galleryStyle.videoGallery}>
          <CarouselProvider
            visibleSlides={1}
            step={1} 
            totalSlides={4}
            naturalSlideWidth={100}
            naturalSlideHeight={50}
          >
            <Slider>
              {this.VideosComponent()}
            </Slider>
            <DotGroup />
            <ButtonBack><span></span></ButtonBack>
            <ButtonNext><span></span></ButtonNext>
          </CarouselProvider>
        </div>

        <div className={galleryStyle.photoGallery}>
          {this.ImagesComponent()}
        </div>

      </section>
    )
  }
}

Gallery.propTypes = {
  gallery_prop_title: PropTypes.string,
}