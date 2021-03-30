/* WHAT IS A REDUCER?
- a function that accepts the applications and action
- based on the action type, then do some logic
- if multiple if applicationsments needed, just use a switch
- the state can be renamed to what its returning

const reducer = (state = [], action) => {
    if(action.type === 'CREATE'){
        return state
    }
            or 

    switch(action.type) {
        case 'FETCH_ALL':
            return state
        case 'CREATE':
            return state
        default:
            break
    }
}
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default (applications = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload
		case 'CREATE':
			return [...applications, action.payload]
		default:
			return applications
	}
}
