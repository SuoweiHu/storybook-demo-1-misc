import React, { useId } from 'react';
import './src/styles/css/export.css';
import './src/styles/js/dist/export.js';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** A single carousel slide. */
export interface CarouselSlide {
  /** Slide image URL. */
  image: string;
  /** Alt text for the slide image (required for accessibility). */
  imageAlt: string;
  /** Optional heading shown inside the caption overlay. */
  captionTitle?: string;
  /** Optional body text shown inside the caption overlay. */
  captionText?: string;
}

/**
 * Visual style for the carousel indicators.
 * - `'default'` – standard Bootstrap white bars.
 * - `'gold'`    – ANU-branded circular indicators that expand to a pill when active.
 */
export type IndicatorStyle = 'default' | 'gold';

/**
 * Whether controls (prev/next arrows) use the default light colour or a
 * dark-inverted variant that is more legible on light slide backgrounds.
 */
export type ControlColor = 'light' | 'dark';

/**
 * Layout variant that moves prev/next buttons and indicators out of the
 * slide area and into a bar below the carousel.
 */
export type CarouselLayout = 'default' | 'bottom-bar';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface CarouselProps {
  /** Slides to display. At least one slide is required. */
  slides: CarouselSlide[];

  /**
   * Unique HTML `id` for the carousel root element.
   * Defaults to a React-generated stable id when omitted.
   */
  id?: string;

  /** Show clickable dot indicators. Defaults to `true`. */
  showIndicators?: boolean;

  /** Show previous/next navigation arrows. Defaults to `true`. */
  showControls?: boolean;

  /** Visual style of the dot indicators. Defaults to `'gold'`. */
  indicatorStyle?: IndicatorStyle;

  /**
   * Colour of the prev/next arrow controls.
   * Use `'dark'` when the slide imagery is light-coloured.
   * Defaults to `'light'`.
   */
  controlColor?: ControlColor;

  /**
   * `'default'` – controls and indicators overlay the slide area (Bootstrap default).
   * `'bottom-bar'` – controls and indicators sit in a bar *below* the slides.
   */
  layout?: CarouselLayout;

  /** Additional CSS classes applied to the outermost carousel element. */
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **Carousel** — ANU Webstyle Bootstrap carousel wrapper.
 *
 * Renders a fully accessible, manually-controlled Bootstrap 5 carousel
 * following the [ANU Web Style Guide](https://webpublishing.anu.edu.au/web-style-guide/carousel).
 *
 * The carousel is always paused (`data-bs-ride="false"`). Users advance slides
 * with the prev/next buttons or indicator dots.
 */
export const Carousel: React.FC<CarouselProps> = ({
  slides,
  id: idProp,
  showIndicators = true,
  showControls = true,
  indicatorStyle = 'gold',
  controlColor = 'light',
  layout = 'default',
  className = '',
}) => {
  const generatedId = useId();
  const carouselId = idProp ?? `carousel-${generatedId.replace(/:/g, '')}`;

  // Root class list
  const rootClasses = [
    'carousel',
    'slide',
    layout === 'bottom-bar' ? 'carousel-with-bottom-bar' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Indicator class list
  const indicatorClasses = [
    'carousel-indicators',
    indicatorStyle === 'gold' ? 'carousel-indicators-gold' : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Control extra class for dark arrows
  const controlExtra = controlColor === 'dark' ? ' carousel-control-dark' : '';

  // ---------------------------------------------------------------------------
  // Sub-renders
  // ---------------------------------------------------------------------------

  const indicators = showIndicators && (
    <div className={indicatorClasses}>
      {slides.map((_, i) => (
        <button
          key={i}
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide-to={i}
          className={i === 0 ? 'active' : undefined}
          aria-current={i === 0 ? 'true' : undefined}
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );

  const items = (
    <div className="carousel-inner">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-item${i === 0 ? ' active' : ''}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            className="d-block w-100"
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            alt={slide.imageAlt}
          />
          {(slide.captionTitle || slide.captionText) && (
            <div className="carousel-caption d-none d-md-block">
              {slide.captionTitle && <h5>{slide.captionTitle}</h5>}
              {slide.captionText && <p>{slide.captionText}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const prevButton = showControls && (
    <button
      className={`carousel-control-prev${controlExtra}`}
      type="button"
      data-bs-target={`#${carouselId}`}
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
  );

  const nextButton = showControls && (
    <button
      className={`carousel-control-next${controlExtra}`}
      type="button"
      data-bs-target={`#${carouselId}`}
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  );

  // ---------------------------------------------------------------------------
  // Layouts
  // ---------------------------------------------------------------------------

  if (layout === 'bottom-bar') {
    return (
      <div
        id={carouselId}
        className={rootClasses}
        data-bs-ride="false"
      >
        {items}
        <div className="carousel-bottom-bar">
          {indicators}
          <div className="carousel-buttons">
            {prevButton}
            {nextButton}
          </div>
        </div>
      </div>
    );
  }

  // Default (overlay) layout
  return (
    <div
      id={carouselId}
      className={rootClasses}
      data-bs-ride="false"
    >
      {indicators}
      {items}
      {prevButton}
      {nextButton}
    </div>
  );
};
