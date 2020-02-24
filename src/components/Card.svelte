<script>
	import { push } from 'svelte-spa-router';

	import Seatsmart from './../icons/Seatsmart.svelte';
	import WritingToolkit from './../icons/WritingToolkit.svelte';

	export let project;
	export let category = null;
	export let large = false;

	$: backgroundColor = `background: ${project.color}`;
</script>

<style>
	@media screen and (min-width: 801px) {
		.container {
			border-radius: .2rem;
		}

		.large-container {
			border-radius: .2rem;
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
		margin: 14rem auto 4rem auto;
		max-width: 900px;
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
		margin: 7rem auto 4rem auto;
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
	}

	.link-area {
		grid-area: link;
		margin: 1rem auto;
	}

	.detail-area {
		grid-area: detail;
		margin: 1rem auto;
		padding: 2rem;
	}

	h3 {
		margin: 1rem auto;
	}

	.detail-area > p {
		text-align: left;
		max-width: 650px;
		margin: 0 auto 5rem auto;
	}
</style>

{#if large}
	<div class="large-container" style={backgroundColor}>
		<div class="icon-area">
			{#if project.icon == "Seatsmart"}
				<Seatsmart width={'5.5rem'} height={'5.5rem'} />
			{:else if project.icon == "WritingToolkit"}
				<WritingToolkit width={'5.5rem'} height={'5.5rem'} />
			{/if}
		</div>
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
		<div class="icon-area">
			{#if project.icon == "Seatsmart"}
				<Seatsmart width={'5.5rem'} height={'5.5rem'} />
			{:else if project.icon == "WritingToolkit"}
				<WritingToolkit width={'5.5rem'} height={'5.5rem'} />
			{/if}
		</div>
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
