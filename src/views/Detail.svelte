<script>
	import { onMount } from 'svelte';
	import { push } from 'svelte-spa-router';

	import Card from './../components/Card.svelte';

	import portfolio from './../portfolio.json';

	export let params;

	let project = portfolio.projects[params.index];

	$: backgroundColor = `background: ${project.color}`;
</script>

<style>
	h3 {
		margin: 2rem;
	}

	.project-links {
		margin-bottom: 4rem;
	}
</style>

<h1>
	{project.name}
</h1>
<h3>
	{project.tagline}
</h3>
<Card large={true} {project} />
<section class="project-links">
	{#if project.urls.main !== ''}
		<a class="brand-button" target="_blank" href={project.urls.main} style={backgroundColor}>
			website
		</a>
	{/if}
	{#if project.urls.repo !== ''}
		<a class="brand-button" target="_blank" href={project.urls.repo} style={backgroundColor}>
			repo
		</a>
	{/if}
	{#if project.urls.figma !== ''}
		<a class="brand-button" target="_blank" href={project.urls.figma} style={backgroundColor}>
			mockups
		</a>
	{/if}
</section>