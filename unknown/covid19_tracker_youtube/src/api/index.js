import axios from 'axios'

const url = 'https://covide.mathdro.id/api'

export const fetchData = async () => {
    try {
        const response = await axios.get(url);

        return response;
    }   catch (error) {

    }
}