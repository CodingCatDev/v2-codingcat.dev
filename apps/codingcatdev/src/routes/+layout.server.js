import { listContent } from '$lib/server/content';
import { ContentType } from '$lib/types';
/**
 * @type {import('./$types').LayoutServerLoad}
 * */
export async function load() {
	return {
		course: await (await listContent({ contentType: ContentType.course, limit: 3 })).content,
		tutorial: await (await listContent({ contentType: ContentType.tutorial, limit: 3 })).content,
		podcast: await (await listContent({ contentType: ContentType.podcast, limit: 3 })).content,
		post: await (await listContent({ contentType: ContentType.post, limit: 3 })).content
	};
}
