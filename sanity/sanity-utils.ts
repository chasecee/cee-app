import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(orderRank) {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "logo": logo.asset->url,
            svgcode,
            subtitle,
            color,
            url,
            content
        }`,
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            "content": content[]{
                ...,
                markDefs[]{
                  ...,
                  _type == "internalLink" => {
                    "slug": @.reference->slug.current,
                    "refType": @.reference->_type
                  }
                }
              }
        }`,
    { slug },
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug":slug.current
        }`,
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            subtitle,
            "slug": slug.current,
            content[]{
                ...,
                _type == "image" => {
                    "imageUrl": asset->url,
                    "alt": alt
                }
            }
        }`,
    { slug },
  );
}
