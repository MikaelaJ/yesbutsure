<script lang="ts">
	import type { Brand, Person, Item } from './models/interface';
	import hector1 from '$lib/assets/images/yesbutsure/Hector_1.jpg';
	import hector2 from '$lib/assets/images/yesbutsure/Hector_2.jpg';
	import astoncirce from '$lib/assets/images/yesbutsure/aston_circe.png';
	import quentin from '$lib/assets/images/yesbutsure/quentin.png';

	/* export let persons: Person[]; */
	export let card: Item[];
	console.log('card from Post', card);
	/* export let brandName: string;
	export let description: string; */
	/* export let title: string;
	export let id: number;
	export let data: Brand[]; */

	/* export let image: string; */
	/* export let post: Artist[]; */

	/* $: ({title, artistName, description, users, posts} = props); */
	const getImgSource = (name: string) => {
		switch (name) {
			case 'hector_1':
				return hector1;
				break;
			case 'hector_2':
				return hector2;
				break;
			case 'aston_circe':
				return astoncirce;
				break;
			case 'quentin':
				return quentin;
				break;

			default:
				null;
				break;
		}
	};
</script>

<div class="flex">
	<div class="grid grid-cols-1 w-full gap-2 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 my-12">
		{#each card as { image, content, title }}
			<div
				class="flex flex-col cursor-pointer rounded-sm md:flex border-black-ybs shadow dark:bg-black-ybs-lighter"
			>
				<a href="/">
					<img
						class="h-64 w-full object-top object-cover"
						src={getImgSource(image)}
						alt={`Bild som återkopplar till projektet: ${title}`}
					/>
				</a>
				<div class="flex flex-col p-4">
					<h3 class="text-lg uppercase text-black-ybs dark:text-primary-ybs-lighter">{title}</h3>
					<p class="italic text-black text-sm text-black-ybs dark:text-primary-ybs-lighter">
						{content}
					</p>
					<!-- <p class="text-sm text-black-ybs">{content}</p>
					<p class="italic text-secondary-ybs">{title}</p> -->
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- <div class="container flex flex-col">
	<a href={`/cases/${slug}`}>

	<div class="flex-col text-center mt-12">
			<h1 class="bg-primary-ybs-darker dark:bg-secondary-ybs p-6 font-serif text-secondary-ybs dark:text-primary-ybs-darker">{brandName}</h1>
			<div class="flex justify-center">
				<p class="flex text-black-ybs dark:text-primary-ybs-lighter my-6 px-12 max-w-3xl">{description}</p>
			</div>
		</div>

	<div class="flex">
		<div class="grid grid-cols-1 w-full gap-2 sm:grid-cols-2 md:gap-7 lg:grid-cols-3 my-12 ">
			{#each cards as {image, content, title}}
				<div
					class="flex flex-col cursor-pointer rounded-sm md:flex border-black-ybs shadow dark:bg-black-ybs-lighter"
				>
					<a href="/">
						<img
							class="h-64 w-full object-top object-cover"
							src={getImgSource(image)}
							alt={`Bild som återkopplar till projektet: ${brandName}`}
						/>
					</a>
					<div class="flex flex-col p-4">
						<h3 class="text-lg uppercase text-black-ybs dark:text-primary-ybs-lighter">
							{title}
						</h3>
						<p class="italic text-black text-sm text-black-ybs dark:text-primary-ybs-lighter">{content}</p>
						<p class="text-sm text-black-ybs">{description}</p>
						<p class="italic text-secondary-ybs">{brandName}{id}</p>
						
					</div>
				</div>
			{/each}
		</div>
	</div>
	</a>
</div> -->
