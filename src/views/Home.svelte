<script>
	import { onMount } from 'svelte';
	import { push } from 'svelte-spa-router';

	import portfolio from './../portfolio.json';

	let technologyTags = [];
	let educationTags = [];

	function getTags(type) {
		let projects = portfolio.projects;

		let tags = [];

		for (const project of projects) {
			let category = project.tags[type];

			for (let tag of category) {
				if (tags.indexOf(tag) == -1) {
					tags.push(tag);
				}
			}
		}

		return tags;
	}

	onMount(() => {
		technologyTags = getTags('technology');
		educationTags = getTags('education');
	});
</script>

<style>
	.lower-heading {
		margin-top: 5rem;
	}

	ul {
		margin-bottom: 5rem;
	}
</style>

<h3>
	I develop educational software for
</h3>
<ul>
	{#each educationTags as tag}
		<li>
			<button class="simple-button tag" on:click={() => {push(`/query/education/${tag}`)}}>
				{tag}
			</button>
		</li>
	{/each}
</ul>
<h3 class="lower-heading">
	I have used technologies such as
</h3>
<ul>
	{#each technologyTags as tag}
		<li>
			<button class="simple-button tag" on:click={() => {push(`/query/technology/${tag}`)}}>
				{tag}
			</button>
		</li>
	{/each}
</ul>
