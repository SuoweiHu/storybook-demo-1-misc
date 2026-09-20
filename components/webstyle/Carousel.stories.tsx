import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

// ---------------------------------------------------------------------------
// Placeholder slides
// ---------------------------------------------------------------------------

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/anu1/1200/500',
    imageAlt: 'A scenic landscape – slide one',
    captionTitle: 'First slide label',
    captionText: 'Some representative placeholder content for the first slide.',
  },
  {
    image: 'https://picsum.photos/seed/anu2/1200/500',
    imageAlt: 'A scenic landscape – slide two',
    captionTitle: 'Second slide label',
    captionText: 'Some representative placeholder content for the second slide.',
  },
  {
    image: 'https://picsum.photos/seed/anu3/1200/500',
    imageAlt: 'A scenic landscape – slide three',
    captionTitle: 'Third slide label',
    captionText: 'Some representative placeholder content for the third slide.',
  },
];

const SLIDES_NO_CAPTIONS = SLIDES.map(({ image, imageAlt }) => ({
  image,
  imageAlt,
}));

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: 'WebStyle-Example/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    showIndicators: {
      control: 'boolean',
      description: 'Show clickable dot / pill indicators.',
    },
    showControls: {
      control: 'boolean',
      description: 'Show previous / next arrow buttons.',
    },
    indicatorStyle: {
      control: 'radio',
      options: ['default', 'gold'],
      description:
        '`gold` – ANU-branded circular indicators that expand to a pill on the active slide. `default` – standard Bootstrap white bars.',
    },
    controlColor: {
      control: 'radio',
      options: ['light', 'dark'],
      description:
        '`light` – default white arrows (good on dark imagery). `dark` – inverted dark arrows (good on light imagery).',
    },
    layout: {
      control: 'radio',
      options: ['default', 'bottom-bar'],
      description:
        '`default` – controls and indicators overlay the slide. `bottom-bar` – controls and indicators sit in a bar below the slides.',
    },
    id: {
      control: 'text',
      description:
        'HTML `id` for the carousel root element. A stable id is auto-generated when omitted.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes on the carousel root element.',
    },
    slides: {
      control: false,
      description:
        'Array of `CarouselSlide` objects. Each slide requires `image` and `imageAlt`. `captionTitle` and `captionText` are optional.',
    },
  },
  args: {
    showIndicators: true,
    showControls: true,
    indicatorStyle: 'gold',
    controlColor: 'light',
    layout: 'default',
    slides: SLIDES,
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

/** Default carousel with gold indicators, light controls and captions. */
export const Default: Story = {
  args: {
    id: 'carousel-default',
  },
};

// ---------------------------------------------------------------------------
// Indicator variants
// ---------------------------------------------------------------------------

/**
 * **Gold indicators** (ANU branded)
 *
 * Uses `.carousel-indicators-gold`: circular dots that expand to a rounded
 * pill on the active slide, coloured with ANU gold.
 */
export const GoldIndicators: Story = {
  name: 'Indicators — Gold (ANU branded)',
  args: {
    id: 'carousel-gold-indicators',
    indicatorStyle: 'gold',
  },
};

/**
 * **Default (Bootstrap) indicators**
 *
 * Standard Bootstrap white bar indicators.
 */
export const DefaultIndicators: Story = {
  name: 'Indicators — Default (Bootstrap)',
  args: {
    id: 'carousel-default-indicators',
    indicatorStyle: 'default',
  },
};

/**
 * **No indicators**
 *
 * Hides the dot indicators entirely.
 */
export const NoIndicators: Story = {
  name: 'Indicators — Hidden',
  args: {
    id: 'carousel-no-indicators',
    showIndicators: false,
  },
};

// ---------------------------------------------------------------------------
// Control colour variants
// ---------------------------------------------------------------------------

/**
 * **Dark controls**
 *
 * Applies `.carousel-control-dark` (`filter: invert(80%)`) to both prev/next
 * buttons. Useful when slide imagery is light-coloured.
 */
export const DarkControls: Story = {
  name: 'Controls — Dark',
  args: {
    id: 'carousel-dark-controls',
    controlColor: 'dark',
  },
};

/**
 * **No controls**
 *
 * Hides the prev/next arrow buttons entirely.
 */
export const NoControls: Story = {
  name: 'Controls — Hidden',
  args: {
    id: 'carousel-no-controls',
    showControls: false,
  },
};

// ---------------------------------------------------------------------------
// Layout variants
// ---------------------------------------------------------------------------

/**
 * **Bottom-bar layout**
 *
 * Applies `.carousel-with-bottom-bar`. Indicators and prev/next buttons move
 * out of the slide area into a flex bar below the images — useful when
 * overlaid controls would obscure captions or imagery.
 */
export const BottomBar: Story = {
  name: 'Layout — Bottom bar',
  args: {
    id: 'carousel-bottom-bar',
    layout: 'bottom-bar',
  },
};