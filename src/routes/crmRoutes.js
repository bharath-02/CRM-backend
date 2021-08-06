import { addNewContact } from '../controllers/crmController'

const Routes = (app) => {
    app.route('/contact')
        .get((req, res) => {
            res.send('GET request successful')
        })

        .post(addNewContact)

    app.route('/contact/:contactID')
        .put((req, res) => {
            res.send('PUT request successfull')
        })
        .delete((req, res) => {
            res.send('DELETE request successfull')
        })
}

export default Routes;