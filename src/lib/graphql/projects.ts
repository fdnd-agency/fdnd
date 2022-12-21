export const allProjects = `
query allProjects {
	projects(first: 10) {
		title
		slug
		visual {
			url
		}
	}
}`;

export const projectBySlug = `
query projectBySlug($slug: String!) {
	projects(where: { slug: $slug }) {
		title
		clients {
      title
    }
		visual {
			url
		}
		teamLeads {
			firstName
			surname
		}
		students(first: 10) {
			firstName
			surname
		}
		productOwners {
			firstName
			surname
		}
		coaches {
			firstName
			surname
		}
		studentwork(first: 20) {
			title
			sprint
      website
			students {
				firstName
				surname
			}
      repository
      visual {
        url
      }
    }
  }
}
`;
