
/* import type { PageServerLoad } from './$types';

export const load = (async () => {
	// 1.
	const response = await prisma.brand.findUnique({
		where: { id: 1 },
		include: {
			persons: {
				select: {
					name: true,
					email: true
				}
			},
			posts: {
				select: {
					title: true,
					published: true,
					content: true,
					image: true
				}
			}
		}
	});
	console.log('artist:', response);
	// 2.
	return { feed: response };
}) satisfies PageServerLoad; */
