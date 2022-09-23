<script>
	import { routes } from './routes.js';
	import Router from 'svelte-spa-router';
	import { location, pop, push } from 'svelte-spa-router';

	import Back from './icons/Back.svelte';
	import Github from './icons/Github.svelte';
	import Figma from './icons/Figma.svelte';

	let location_value;

	const unsubscribeLocation = location.subscribe(value => {
		location_value = value;
	});

	let loc = '';
	let main;

	$: if (location_value == '/') {
		loc = 'home';
	} else if (location_value.includes('/')) {
		loc = location_value.split('/')[2];
	}

	function routeBack() {
		pop();
	}

	function scrollTop() {
		window.scrollTo(0, 0);
		main.scrollTop = 0;
	}
</script>

<style>
	@media screen and (max-width: 800px) {
		.container {
			grid-template-rows: 5% auto 1fr 15%;
			grid-template-columns: 1fr;
			grid-template-areas:
				"aside"
				"header"
				"main"
				"footer";
		}

		.abbreviated {
			display: none;
		}

		img {
			height: 10rem;
			display: block;
			margin: 2rem auto;
		}

		aside {
			padding: 1.5rem .75rem;
		}

		main {
			padding: 4rem .75rem;
		}
	}

	@media screen and (min-width: 801px) {
		.container {
			grid-template-columns: 30% 1fr;
			grid-template-rows: auto 1fr 1fr;
			grid-template-areas:
				"header aside"
				"header main"
				"footer main";
		}

		aside {
			padding: 2rem 4rem 0 4rem;
		}

		main {
			overflow-y: scroll;
			scroll-behavior: smooth;
		}

		header {
			align-self: flex-end;
		}

		img {
			width: 80%;
			display: block;
			margin: 2rem auto;
		}
	}

	.container {
		display: grid;
		width: 100%;
		height: 100%;
	}

	aside {
		grid-area: aside;
		height: 4rem;
	}

	header {
		grid-area: header;
		text-align: center;
		padding: 0 1rem;
	}

	main {
		grid-area: main;
		text-align: center;
	}

	footer {
		grid-area: footer;
		background: var(--gradient);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-content: center;
		text-align: center;
	}

	footer > a {
		display: block;
	}
</style>

<svelte:head>
	<title>Thaddeus McCleary | { loc }</title>
</svelte:head>

<div class="container">
	<aside>
		{#if $location !== '/'}
			<button class="simple-button" on:click={routeBack}>
				<Back width={'1.5rem'} height={'1.5rem'} />
			</button>
		{/if}
	</aside>
	<header class={$location !== '/' ? 'abbreviated' : ''}>
		<img src="/thaddeus.png" alt="Thaddeus McCleary">
		<h1>
			My name is Thaddeus McCleary.
		</h1>
	</header>
	<main bind:this={main}>
		<Router {routes} on:routeLoaded={scrollTop} />
	</main>
	<footer>
		<a href="https://github.com/thaddeusm" target="_blank" class="simple-button">
			<Github width={'1.5rem'} height={'1.5rem'} />
		</a>
		<a href="/resume.pdf" target="_blank" class="simple-button">
			resume
		</a>
		<a href="https://www.figma.com/file/dilN7BoMfOA2SQ8xMtRuhg/Portfolio?node-id=0%3A1/" target="_blank" class="simple-button">
			<Figma width={'1.5rem'} height={'1.5rem'} />
		</a>
	</footer>
</div>
