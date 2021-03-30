import axios from 'axios' // used to make api calls

const url = 'http://localhost:5001/applications'

// arrow function that does an axios get call to backend
// exporting this allows it to be used in other files
export const fetchApplications = () => axios.get(url)
export const createApplication = (newApplication) =>
	axios.post(url, newApplication)
