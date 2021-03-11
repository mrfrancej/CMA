import { Contacts } from "../views/Contacts";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contatcs: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/france_agenda")
					.then(response => response.json())
					.then(contacts => setStore({ contatcs: contacts }));
			}
		}
	};
};

export default getState;
