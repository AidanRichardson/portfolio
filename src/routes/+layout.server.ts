export const prerender = true;
export async function load({ fetch }) {
	const res = await fetch('/data/profile.json');
	if (!res.ok) throw new Error('Failed to load profile');
	const profile = await res.json();
	return { profile };
}
