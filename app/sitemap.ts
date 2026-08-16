// app/sitemap.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { SITE_URL } from "./lib/site";

const BASE_URL = SITE_URL;

/**
 * Every route is written out in full rather than generated from a list, so the
 * priority and change frequency of each page can be tuned individually and a
 * new page is never silently inherited into the sitemap with the wrong weight.
 *
 * `trailingSlash: true` in next.config.js means every URL here must end in a
 * slash — a mismatch would make the sitemap point at redirects.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spa-in-mahipalpur/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spa-in-delhi/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spa-in-dwarka/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-gurugram/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-karol-bagh/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-aerocity/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-vasant-kunj/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-saket/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-hauz-khas/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spa-in-green-park/`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/locations/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery/`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
