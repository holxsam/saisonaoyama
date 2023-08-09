# Demo

This is a demo of marketing site for a hair salon I built for a prospective client. You can view the live demo at [saisonaoyama-demo.vercel.app](https://saisonaoyama-demo.vercel.app/). It features i18n for English and Japanese users and a lovely user interface.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Bugs

### Headless UI

I am specifically using @headlessui/react@1.7.14 (not ^1.7.14 or anything later) because the Popover component currently has a bug where it won't close on clicked outside of the button/panel. This bug only happens in the header where there's a fixed height. If I place the same exact component in the body, it works as intended. This is a bug with @headlessui/react because if you install 1.17.14 or lower, everything works, fine. If you install anything past 1.17.14, it breaks.

### Next.js Static Assets

Also next.js static asset does not work as of next@^13.4.13.

Creating an image with next/image like so: `<Image src="/assets/photos/a.png">` will not link `/assets/photos/a.png` to `/public/assets/photos/a.png` as the docs have suggested so I had to manually import every image which is not ideal.
