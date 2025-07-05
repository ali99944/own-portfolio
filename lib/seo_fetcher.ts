'use server'

import { Metadata } from "next"
import axiosHttp from "./axios_client"

export interface Seo {
    id: number
    name: string
    key: string
    type: 'page' | 'record'
    title: string
    description: string
    keywords: string
    robots_meta: string
    canonical_url: string
    og_title: string
    og_description: string
    og_image: string
    og_image_alt: string
    og_locale: string
    og_site_name: string
    twitter_title: string
    twitter_description: string
    twitter_image: string
    twitter_alt: string
    custom_meta_tags?: string | null
    created_at: string
    updated_at: string

}


const defaultSeo: Seo = {
    id: 0,
    name: "",
    key: "",
    type: 'page',
    title: "",
    description: "",
    keywords: "",
    robots_meta: "",
    canonical_url: "",
    og_title: "",
    og_description: "",
    og_image: "",
    og_image_alt: "",
    og_locale: "",
    og_site_name: "",
    twitter_title: "",
    twitter_description: "",
    twitter_image: "",
    twitter_alt: "",
    custom_meta_tags: null,
    created_at: "",
    updated_at: "",
}

export const getSeoData = async (page_key: string): Promise<Seo> => {
    try {
        const res = await axiosHttp.get(`seo/${page_key}`)
        return res.data as Seo
    } catch (error) {
        console.error(error)
        return defaultSeo
    }
}


export const constructMetadata = async (page_key: string): Promise<Metadata> => {
    const seo = await getSeoData(page_key)
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        robots: seo.robots_meta,
        openGraph: {
            title: seo.og_title,
            description: seo.og_description,
            images: [
                {
                    url: seo.og_image,
                    alt: seo.og_image_alt,
                },
            ],
            locale: seo.og_locale,
            siteName: seo.og_site_name,
        },
        twitter: {
            title: seo.twitter_title,
            description: seo.twitter_description,
            images: [
                {
                    url: seo.twitter_image,
                    alt: seo.twitter_alt,
                },
            ],
            card: 'summary_large_image',
        },
    }
}
