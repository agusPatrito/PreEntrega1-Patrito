import MOCK_DATA from '../data/mock.json'


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 200)
    })
}