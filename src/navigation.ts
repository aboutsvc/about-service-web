import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        {
          text: 'C2PA',
          href: getPermalink('/product/c2pa'),
        },
        {
          text: 'VarsCalculator',
          href: 'https://aboutsvc.github.io/vars-calculator-web-v2/',
        },
      ],
    },
    {
      text: 'Company',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        {
          text: 'C2PA',
          href: getPermalink('/product/c2pa'),
        },
        {
          text: 'VarsCalculator',
          href: 'https://aboutsvc.github.io/vars-calculator-web-v2/',
        },
      ],
    },
    {
      title: 'Company',
      links: [{ text: 'About', href: getPermalink('/about') }],
    },
    {
      title: 'Resources',
      links: [{ text: 'Blog', href: getPermalink('/blog') }],
    },
    {
      title: 'Support',
      links: [{ text: 'Contact', href: getPermalink('/contact') }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://aboutsvc.com/"> About Service</a> · All rights reserved.
  // `,
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://aboutsvc.com/"> About Service</a> · All rights reserved.
  `,
};
