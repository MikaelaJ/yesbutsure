<script lang="ts">
	import type { Brand, Item } from '../lib/models/interface';
	import Post from '$lib/Post.svelte';
	import Card from '$lib/Card.svelte';
	import bgImage from '$lib/assets/images/yesbutsure/Hector_2.jpg';
	import data from '$lib/assets/json/itemdata.json';
	console.log('data from cards', data);

	
</script>

<main class="dark:bg-black-ybs">
	<div class="container flex-col max-w-4xl md:pt-20 mb-12">
		<div class="flex mb-20">
			<div class="z-10">
				<h1
					class="flex text-8xl flex-col text-black-ybs dark:text-primary-ybs-lighter font-serif mb-8"
				>
					Vilka är vi
				</h1>
				<p class="text-black-ybs dark:text-primary-ybs-lighter">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lorem nec odio
					convallis, et aliquet diam ultrices. Sed commodo ultricies turpis, ac mattis nibh vehicula
					at. Nulla porttitor, purus vitae porta placerat, arcu ligula porta sapien, vel suscipit
					odio felis a metus. Pellentesque efficitur at urna ac gravida. Quisque porttitor odio
					lectus.
				</p>
			</div>
			<!-- <div class="image bg-cover w-1/3 noise" style="background-image: url('{bgImage}')"></div> -->
		</div>
	</div>
	<section class="container max-w-7xl">
		<div class="flex-col text-center mt-12">
			<h1 class="bg-primary-ybs-darker dark:bg-secondary-ybs p-6 font-serif text-secondary-ybs dark:text-primary-ybs-darker">Yes But Sure</h1>
			<div class="flex justify-center">
				<p class="flex text-black-ybs dark:text-primary-ybs-lighter my-6 px-12 max-w-3xl">Beskrivning</p>
			</div>
		</div>
		<Post card={data.slice(0, 3)} />
	</section>
</main>
