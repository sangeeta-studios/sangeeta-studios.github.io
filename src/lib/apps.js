// The apps shown on the home page. To add an app, add an entry here and
// (if it has one) put its icon in static/.
//
// `id` must match the app's heading anchor in src/content/legal/privacy-policy.md,
// so the card's "Privacy" link lands on the right section.

/**
 * @typedef {object} App
 * @property {string} id
 * @property {string} name
 * @property {string | null} icon Path in static/, or null for a lettered placeholder
 * @property {string[]} highlights Short facts shown under the name
 * @property {string} description
 * @property {string} packageId Android application ID
 * @property {string | null} playStoreUrl null while the app is not yet released
 * @property {string} category schema.org applicationCategory
 */

/** @type {App[]} */
export const apps = [
	{
		id: 'cg-tax-calculator',
		name: 'CG Tax Calculator',
		icon: null,
		highlights: ['⭐️ 4.8', 'Flutter'],
		description:
			'A comprehensive and easy-to-use calculator for Indian Capital Gains Tax. Features support for multiple asset classes, precise holding period calculations, and professional PDF report generation.',
		packageId: 'com.cgtax.calculator',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cgtax.calculator',
		category: 'FinanceApplication'
	},
	{
		id: 'birthday-age-calculator',
		name: 'Birthday and Age Calculator',
		icon: '/birthday-age-calculator-icon.png',
		highlights: ['9 languages', 'Flutter'],
		description:
			'Exact ages, live birthday countdowns and reminders for family and friends. Includes anniversaries, Hindu calendar (tithi) birthdays and greeting cards to share, in English and 8 Indian languages. Everything stays on your phone.',
		packageId: 'com.sangeetastudios.agecalculator',
		playStoreUrl: null,
		category: 'LifestyleApplication'
	},
	{
		id: 'math-sprouts',
		name: 'Math Sprouts',
		icon: '/math-sprouts-icon.png',
		highlights: ['Ages 4–10', 'Flutter'],
		description:
			"A mental maths game for children that adapts to every answer. Kids type their answers (no multiple choice), earn stars, build streaks and grow from Seed to Forest Legend, while parents get clear progress reports. No ads, no tracking, and children's data stays on the device.",
		packageId: 'com.sangeetastudios.mathsprouts',
		playStoreUrl: null,
		category: 'EducationalApplication'
	}
];
