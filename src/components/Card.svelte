<script>
	import { push } from 'svelte-spa-router';

	import Seatsmart from './../icons/Seatsmart.svelte';
	import WritingToolkit from './../icons/WritingToolkit.svelte';
	import MU from './../icons/MU.svelte';
	import Gist from './../icons/Gist.svelte';
	import Activities from './../icons/Activities.svelte';
	import BEC from './../icons/BEC.svelte';
	import IELTS from './../icons/IELTS.svelte';
	import TOEIC from './../icons/TOEIC.svelte';
	import Chronology from './../icons/Chronology.svelte';
	import Robomuse from './../icons/Robomuse.svelte';

	export let project;
	export let category = null;
	export let large = false;

	$: backgroundColor = `background: ${project.color}`;
</script>

<style>
	@media screen and (min-width: 1300px) {
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
		max-width: 850px;
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
		{#if project.icon !== ''}
			<div class="icon-area">
				{#if project.icon == "Seatsmart"}
					<Seatsmart width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "WritingToolkit"}
					<WritingToolkit width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "MU"}
					<MU width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Gist"}
					<Gist width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Activities"}
					<Activities width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "BEC"}
					<BEC width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "IELTS"}
					<IELTS width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "TOEIC"}
					<TOEIC width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Chronology"}
					<Chronology width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Robomuse"}
					<Robomuse width={'5.5rem'} height={'5.5rem'} />
				{/if}
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
			<h3>{#if project.icon !== 'MU'}Related {/if}Learning Technologies and Design goals</h3>
			{#each project['LTDGoals'] as goal}
				{#if goal == 1}
					<p>
						<i>
							To provide students with experiences to develop theory-grounded and research-based competencies for the innovative, aesthetic, effective and sustainable design/development and management of technologies for learning opportunities and systems.
						</i>
						<a href="https://education.missouri.edu/degree/learning-and-design-technologies-edsp/" target="_blank" class="simple-button">read more</a>
					</p>
				{:else if goal == 2}
					<p>
						<i>
							To provide students with experiences to develop skills in data collection, analysis and evaluation for reflecting on and applying to the design/development of learning opportunities and systems.
						</i>
						<a href="https://education.missouri.edu/degree/learning-and-design-technologies-edsp/" target="_blank" class="simple-button">read more</a>
					</p>
				{:else}
					<p>
						<i>
							To provide students with experiences to become socially responsible, reflective/sensitive on the interaction of technologies & society and act ethically in response to current and future challenges of emerging technologies for learning.
						</i>
						<a href="https://education.missouri.edu/degree/learning-and-design-technologies-edsp/" target="_blank" class="simple-button">read more</a>
					</p>
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<div class="container">
		{#if project.icon !== ''}
			<div class="icon-area">
				{#if project.icon == "Seatsmart"}
					<Seatsmart width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "WritingToolkit"}
					<WritingToolkit width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "MU"}
					<MU width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Gist"}
					<Gist width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Activities"}
					<Activities width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "BEC"}
					<BEC width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "IELTS"}
					<IELTS width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "TOEIC"}
					<TOEIC width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Chronology"}
					<Chronology width={'5.5rem'} height={'5.5rem'} />
				{:else if project.icon == "Robomuse"}
					<Robomuse width={'5.5rem'} height={'5.5rem'} />
				{/if}
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
