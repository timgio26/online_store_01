import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

export function Carousel({ slides, options }){
    // const  = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
    return(
        <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide border-slate-600 border-2 m-1 rounded-md h-36" key={index}>
                {/* <div className="embla__slide__number">{index + 1}</div> */}
                {index+1}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}