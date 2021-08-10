import {
    getContacts,
    getContact,
    addNewContact,
    updateContact,
    deleteContact
} from '../controllers/crmController'

const Routes = (app) => {
    app.route('/contact')
        .get(getContacts)

        .post(addNewContact)

    app.route('/contact/:contactID')
        .get(getContact)

        .put(updateContact)
        .delete(deleteContact)
}

export default Routes;