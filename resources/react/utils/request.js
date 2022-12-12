import Axios from 'axios';

export default (endpoint, payload = [], success, error = false) => {

    Axios.get(endpoint, {
        params: {
            payload: payload,
        }
    })
    .then(res => {

        const data = res.data;

        if (data.status_code !== 200) {

            if (! error) {
                return console.error(data.status_code, data.status, data.message);
            } else {
                return error(data.status_code, data.status, data.message);
            }

        }

        return success(data);

    })
    .catch(err => {

        return ! error ? console.error(err) : error(err);

    });

};
