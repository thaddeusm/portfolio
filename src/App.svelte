<script>
	import { routes } from './routes.js';
	import Router from 'svelte-spa-router';
	import { location, pop, push } from 'svelte-spa-router';

	import Back from './icons/Back.svelte';
	import Github from './icons/Github.svelte';
	import Flickr from './icons/Flickr.svelte';

	let location_value;

	const unsubscribeLocation = location.subscribe(value => {
		location_value = value;
	});

	let loc = '';

	$: if (location_value == '/') {
		loc = 'home';
	} else if (location_value.includes('/')) {
		loc = location_value.split('/').join('');
	}

	function routeBack() {
		pop();
	}
</script>

<style>
	@media screen and (max-width: 800px) {
		.container {
			grid-template-rows: auto auto 1fr 15%;
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

		header > a > img {
			height: 10rem;
			display: block;
			margin: 2rem auto;
		}

		aside {
			padding: 2rem;
		}

		main {
			padding: 4rem 0;
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
			overflow: auto;
		}

		header {
			align-self: flex-end;
		}

		header > a > img {
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
		<button class="simple-button" on:click={() => {push('/')}}>
			<img src="/thaddeus.png" alt="Thaddeus McCleary">
		</button>
		<h1>
			My name is Thaddeus McCleary.
		</h1>
	</header>
	<main>
		<Router {routes} />
	</main>
	<footer>
		<a href="https://github.com/thaddeusm" target="_blank" class="simple-button">
			<Github width={'1.5rem'} height={'1.5rem'} />
		</a>
		<a href="/resume.pdf" target="_blank" class="simple-button">
			resume
		</a>
		<a href="https://flickr.com/photos/teachermc/" target="_blank" class="simple-button">
			<Flickr width={'1.5rem'} height={'1.5rem'} />
		</a>
	</footer>
</div>