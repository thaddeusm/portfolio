<script>
	import { onMount } from 'svelte';
	import { push } from 'svelte-spa-router';

	import Card from './../components/Card.svelte';

	import portfolio from './../portfolio.json';

	export let params;

	let projects = [];

	function findProjects() {
		let results = [];

		let targetTag = params.tag.split('%20').join(' ');
		let category = params.category;

		let index = 0;
		for (const project of portfolio.projects) {
			let categoryTags = project["tags"][category];

			for (let tag of categoryTags) {
				if (tag == targetTag) {
					project.index = index;
					results.push(project);
					break;
				}
			}

			index++;
		}

		return results;
	}

	onMount(() => {
		projects = findProjects();
	});
</script>

<style>
	
</style>

<h3>
	{#if params.category == 'education'}
		I develop software for 
	{:else}
		I have worked with 
	{/if}
	{params.tag.split('%20').join(' ')}.
</h3>

{#each projects as project}
	<Card {project} category={params.category} />
{/each}
