/**
 * Returns whether an element has CSS transitions applied directly on itself.
 *
 * @method hasTransitions
 * @param {Element} element
 * @return Boolean
 */
export default function hasTransitions(element) {
    if (typeof FastBoot !== 'undefined') {
        return;
    }

	const { transitionProperty, transitionDuration } = window.getComputedStyle(element);
	const hasNoDurations = transitionDuration.split(', ').every((duration) => duration === '0s');

	return !(hasNoDurations || transitionProperty === 'all' && transitionDuration === '0s');
}
