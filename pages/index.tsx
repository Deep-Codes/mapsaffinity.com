import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Modal from "../components/Modal";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import getImagePath from "../utils/getImagePath";
import getPostsData from "../utils/getPostsData";
import InstagramIcon from "../components/icons/InstagramIcon";
import GlobeIcon from "../components/icons/GlobeIcon";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>
          Maps Affintiy | Maps and visualisation around geography, politics and
          more.
        </title>
        <meta
          property="og:image"
          content="https://mapsaffinity.com/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://mapsaffinity.com/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <img
              width={150}
              src="/maps_affinity.png"
              alt="Logo of maps_affinity"
            />
            {/* <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              maps_affinity
            </h1> */}
            <p className="text-white/75 sm:max-w-[50ch]">
              In May 2019, maps_affinity was created to explore the intersection
              of design, geography, and politics.
            </p>
            <p className="text-white/75 sm:max-w-[50ch]">
              As the page grew to over 19,000 followers, chloromaps.com{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://dpnkr.in/blog/building-maps-affinity-and-chloromaps"
              >
                was created
              </a>{" "}
              to help build choropleth visualisations.
            </p>

            <p className="text-white/75 sm:max-w-[50ch]">
              Posts created by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://twitter.com/DeepankarBhade"
              >
                Deepankar
              </a>{" "}
              &{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://www.linkedin.com/in/varnika-saha"
              >
                Varnika
              </a>
            </p>

            <div>
              <a
                className="pointer umami--click--mapsaffinity_instagram z-10 mt-6 flex  items-center rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:opacity-80 md:mt-4"
                href="https://www.instagram.com/maps_affinity/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />{" "}
                <span className="ml-2">Explore on Instagram!</span>
              </a>
              <a
                className="pointer umami--click--chloromaps z-10 mt-6 flex  items-center rounded-lg border border-white bg-none px-3 py-2 text-sm font-semibold text-white opacity-80 transition hover:bg-white hover:text-black hover:opacity-100 md:mt-4"
                href="https://chloromaps.com"
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon /> <span className="ml-2">Try Chloromaps.com</span>
              </a>
            </div>
          </div>
          {images.map(({ id, createdAt, title, filename }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt={title.split("\n")[0]}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                // placeholder="blur"
                // blurDataURL={blurDataUrl}
                src={getImagePath(filename)}
                width={720}
                height={720}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Built using Vercel's{" "}
        <a
          href="https://vercel.com/templates/next.js/image-gallery-starter"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Image gallery starter kit
        </a>
      </footer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const data = getPostsData();

  return {
    props: {
      images: data,
    },
  };
}
