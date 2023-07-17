# Next 13 Fullstack Apps

This is a bboilerplate uses next.js, tailwindcss, radixui / shadecn, prisma, auth.js

## Prerequisites

add `.env` file to root directory of your app and add the follwing

```.env
# time to revalidate for ISR, 0 for SSG
NEXT_PUBLIC_TIME_TO_REVALIDATE=0

# AUTH js needs url and secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecretstring

# if using oAuth provider
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Learn More

- [Next.js docs](https://nextjs.org/docs)
- [Tailwindcss docs](https://tailwindcss.com/docs/installation)
- [shadcn ui docs](https://ui.shadcn.com/docs)
- [Radix docs](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Radix Icons docs](https://icons.radix-ui.com/)
- [Prisma docs](https://www.prisma.io/docs)
- [Zustand docs](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Auth.js](https://authjs.dev/)
- [Tailwindcss Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
