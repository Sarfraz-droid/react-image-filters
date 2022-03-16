import React from 'react';
import FilterIcon from '../components/Filter';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Filter',
  component: FilterIcon,
} as ComponentMeta<typeof FilterIcon>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof FilterIcon> = (args) => (
  <FilterIcon {...args} />
);

// Grayscale
export const GrayScale = Template.bind({});
GrayScale.args = {
  grayscale: 0.5,
};

// Blur
export const Blur = Template.bind({});
Blur.args = {
  blur: 5,
};

// Brightness
export const Brightness = Template.bind({});
Brightness.args = {
  brightness: 0.5,
};

// Contrast
export const Contrast = Template.bind({});
Contrast.args = {
  contrast: 0.5,
};

// Invert
export const Invert = Template.bind({});
Invert.args = {
  invert: 1,
};

// Sepia
export const Sepia = Template.bind({});
Sepia.args = {
  sepia: 0.3,
};

// Hue Rotate
export const HueRotate = Template.bind({});
HueRotate.args = {
  hueRotate: 90,
};

// Saturate
export const Saturate = Template.bind({});
Saturate.args = {
  saturate: 0.5,
};

// Drop Shadow
export const DropShadow = Template.bind({});
DropShadow.args = {
  dropShadow: {
    x: 5,
    y: 5,
    blur: 5,
    color: '#000',
  },
};

// 📌 We can also export a “story” for each prop
// Mixed
export const Mixed = Template.bind({});
Mixed.args = {
  grayscale: 0.5,
  blur: 5,
  brightness: 1,
  contrast: 1,
  invert: 0,
  sepia: 0.5,
  hueRotate: 90,
  saturate: 0.5,
  dropShadow: {
    x: 5,
    y: 5,
    blur: 5,
    color: '#000',
  },
};
