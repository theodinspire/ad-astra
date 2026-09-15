<script setup lang="ts">
import { computed, ref } from 'vue';

type Selected = 'first' | 'second';

const selected = ref<Selected>('first');

const firstClass = computed(() =>
	selected.value === 'first' ? 'selected' : undefined,
);
const secondClass = computed(() =>
	selected.value === 'second' ? 'selected' : undefined,
);

const pangrams = {
	first: 'Sphinx of Black Quartz, judge my vow!',
	second: 'Both fickle dwarves jinx my pig quiz.',
};

const copy = computed(() => pangrams[selected.value]);
</script>

<template>
	<div
		class="border-core-300 mx-auto mb-6 h-25 w-full rounded-lg border bg-white px-8 py-4 md:w-9/10"
	>
		<div class="flex h-7 w-full gap-8 border-b border-b-gray-300 px-4">
			<div class="tab text-sm" :class="firstClass" @click="selected = 'first'">
				First
			</div>
			<div
				class="tab text-sm"
				:class="secondClass"
				@click="selected = 'second'"
			>
				Second
			</div>
		</div>
		<p class="mt-2">{{ copy }}</p>
	</div>
</template>

<style scoped>
.tab {
	--line: 3px;

	box-sizing: border-box;

	color: var(--color-gray-400);
	padding-bottom: var(--pad);

	&.selected {
		color: var(--color-gray-700);
		border-bottom: var(--line) solid var(--color-pink-950);
	}
}
</style>
