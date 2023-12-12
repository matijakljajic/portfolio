import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const link = params.slug.replaceAll('-', ' ')
	try {
		const post = await import(`../../../posts/${link}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${link}`)
	}
}