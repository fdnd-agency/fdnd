export const allProjects = `
query allProjects {
	projects(first: 10) {
		title
		slug,
		visual {
			url
		}
	}
}`;

export const projectBySlug = `
query projectBySlug($slug: String!) {
	projects(where: { slug: $slug }) {
		title
		client {
			title
		}
		visual {
			url
		}
		teamLead {
			firstName
			surname
		}
		students(first: 10) {
			firstName
			surname
		}
		productOwner {
			firstName
			surname
		}
	}
}`;
