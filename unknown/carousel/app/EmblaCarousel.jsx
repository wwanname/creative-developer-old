'use client'
import React from 'react'
import Image from 'next/image'
import '../css/embla.css'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const SLIDE_IMAGE = [
  {
    src: "/images/dyal_thak/background.jpg"
  },
  {
    src: "/images/landon_speers/background.jpg"
  },
  {
    src: "/images/leidinger_matthias/background.jpg"
  },
  {
    src: "/images/mark_rammers/background.jpg"
  },
]

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla" dir="rtl">
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDE_IMAGE.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Image src={slide.src} alt="image" width={1920} height={1080} className="embla__slide__number" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel