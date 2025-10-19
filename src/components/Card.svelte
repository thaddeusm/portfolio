<script>
	import { onMount } from 'svelte';
	import { push } from 'svelte-spa-router';

	import Seatsmart from './../icons/Seatsmart.svelte';
	import WritingToolkit from './../icons/WritingToolkit.svelte';
	import MU from './../icons/MU.svelte';
	import Gist from './../icons/Gist.svelte';
	import Activities from './../icons/Activities.svelte';
	import BEC from './../icons/BEC.svelte';
	import IELTS from './../icons/IELTS.svelte';
	import TOEIC from './../icons/TOEIC.svelte';
	import Robomuse from './../icons/Robomuse.svelte';
	import Mixtape from './../icons/Mixtape.svelte';
	import ELP from './../icons/ELP.svelte';

	const components = {
		'Seatsmart': Seatsmart,
		'WritingToolkit': WritingToolkit,
		'MU': MU,
		'Gist': Gist,
		'Activities': Activities,
		'BEC': BEC,
		'IELTS': IELTS,
		'TOEIC': TOEIC,
		'Robomuse': Robomuse,
		'Mixtape': Mixtape,
		'ELP': ELP,
	};

	export let project;
	export let category = null;
	export let large = false;

  	export let component = components[project.icon];

	$: backgroundColor = `background: ${project.color}`;
</script>

<style>
	@media screen and (max-width: 800px) {
		.container, .large-container {
			border-radius: .2rem;
			margin: 7rem -.75rem 4rem -.75rem;
		}
	}

	@media screen and (min-width: 801px) {
		.container, .large-container {
			border-radius: .2rem;
			margin: 7rem auto 4rem auto;
		}
	}

	.large-container {
		display: grid;
		grid-template-columns: 1fr 6rem 1fr;
		grid-template-rows: auto 1fr 30%;
		grid-template-areas:
			". icon ."
			"detail detail detail"
			"detail detail detail";
		align-content: center;
		justify-content: center;
		max-width: 750px;
	}

	.container {
		background: var(--light-gray);
		box-shadow: 2px 4px 10px var(--gray);
		display: grid;
		grid-template-columns: 1fr 6rem 1fr;
		grid-template-rows: auto 1fr 30%;
		grid-template-areas:
			". icon ."
			"tagline tagline tagline"
			". link .";
		align-content: center;
		justify-content: center;
		max-width: 750px;
	}

	.icon-area {
		grid-area: icon;
		margin-top: -3rem;
		background: var(--gray);
		border-radius: .2rem;
		width: 6rem;
		height: 6rem;
		display: grid;
		align-content: center;
		box-shadow: 1px 2px 1px var(--dark-gray);
	}

	.tagline-area {
		grid-area: tagline;
		margin: 2rem auto 1rem auto;
		padding: .25rem;
	}

	.link-area {
		grid-area: link;
		margin: 1rem auto;
	}

	.detail-area {
		grid-area: detail;
		margin: 1rem auto;
		padding: 1rem;
	}

	h3 {
		margin: 1rem auto 2rem auto;
	}

	.detail-area > p {
		text-align: left;
		max-width: 650px;
		margin: 0 auto 5rem auto;
	}
</style>

{#if large}
	<div class="large-container" style={backgroundColor}>
		{#if component}
			<div class="icon-area">
				<svelte:component this={component} width={'5.5rem'} height={'5.5rem'} />
			</div>
		{/if}
		<div class="detail-area">
			<h3>
				Background
			</h3>
			<p>
				{project.description.background}
			</p>
			<h3>
				Details
			</h3>
			<p>
				{project.description.details}
			</p>
			<h3>
				Reflection
			</h3>
			<p>
				{project.description.reflection}
			</p>
		</div>
	</div>
{:else}
	<div class="container">
		{#if component}
			<div class="icon-area">
				<svelte:component this={component} width={'5.5rem'} height={'5.5rem'} />
			</div>
		{/if}
		<div class="tagline-area">
			<h3>
				{project.name}
			</h3>
			<p>
				{project.tagline}
			</p>
		</div>
		<div class="link-area">
			<button class="simple-button" on:click={() => {push(`/detail/${category}/${project.index}`)}}>
				more
			</button>
		</div>
	</div>
{/if}
