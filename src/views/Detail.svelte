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
		margin: 4rem;
	}

	@media screen and (max-width: 500px) {
		a {
			display: block;
			width: 5rem;
			margin: 2rem auto;
		}
	}
</style>

<h1>
	{project.name}
</h1>
<h3>
	{project.tagline}
</h3>
<section class="project-links">
	{#if project.urls.main && project.urls.main !== ''}
		<a class="brand-button" target="_blank" href={project.urls.main} style={backgroundColor}>
			website
		</a>
	{/if}
	{#if project.urls.repo && project.urls.repo !== ''}
		<a class="brand-button" target="_blank" href={project.urls.repo} style={backgroundColor}>
			repo
		</a>
	{/if}
	{#if project.urls.figma && project.urls.figma !== ''}
		<a class="brand-button" target="_blank" href={project.urls.figma} style={backgroundColor}>
			mockups
		</a>
	{/if}
</section>
<Card large={true} {project} />
