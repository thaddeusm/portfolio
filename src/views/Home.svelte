<script>
	import { onMount } from 'svelte';
	import { push } from 'svelte-spa-router';
	import Card from './../components/Card.svelte';

	import portfolio from './../portfolio.json';

	let technologyTags = [];
	let educationTags = [];
	let MU = portfolio.education[0];

	$: backgroundColor = `background: ${MU.color}`;

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

	window.scrollTo(0, 0);

	onMount(() => {
		technologyTags = getTags('technology');
		educationTags = getTags('education');
	});
</script>

<style>
	.lower-heading {
		margin-top: 10rem;
	}

	ul {
		margin-bottom: 7rem;
	}

	.project-links {
		margin-bottom: 6rem;
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
<h3 class="lower-heading">
	I have also worked as a TESOL professional in 
</h3>
<ul>
	<li><a class="simple-button tag" href="https://fhsu.edu/english/faculty-and-staff/index" target="_blank">China</a></li>
	<li><a class="simple-button tag" href="https://www.youtube.com/watch?v=Dvg2CwTfoAA" target="_blank">Ukraine</a></li>
	<li><a class="simple-button tag" href="https://www.ozarkliteracy.org" target="_blank">Arkansas, USA</a></li>
	<li><a class="simple-button tag" href="https://flickr.com/photos/teachermc/albums/72157627128243426" target="_blank">South Korea</a></li>
</ul>
<h3 class="lower-heading">
	I recently earned an Educational Specialist degree!
</h3>
{#if MU}
	<Card large={true} project={MU} />
{/if}
<section class="project-links">
	{#if MU.urls.main !== ''}
		<a class="brand-button" target="_blank" href={MU.urls.main} style={backgroundColor}>
			website
		</a>
	{/if}
	{#if MU.urls.repo !== ''}
		<a class="brand-button" target="_blank" href={MU.urls.repo} style={backgroundColor}>
			repo
		</a>
	{/if}
	{#if MU.urls.figma !== ''}
		<a class="brand-button" target="_blank" href={MU.urls.figma} style={backgroundColor}>
			mockups
		</a>
	{/if}
</section>