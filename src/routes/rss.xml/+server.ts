export const prerender = true

import * as config from '$lib/config'
import type { Post } from '$lib/types'

export async function GET({ fetch }) {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()

	const headers = { 'Content-Type': 'application/xml' }

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<description>${config.description}</description>
				<link>${config.url}</link>
				<copyright>Matija Kljajić © ${new Date().getFullYear()}</copyright>
				<language>en</language>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${config.url}${post.slug}</link>
							<guid isPermaLink="true">${config.url}${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
							${post.categories
								.map(
									(category) => `<category>${category}</category>
									`
								)
								.join('')
							}
						</item>
					`
					)
					.join('')
				}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}