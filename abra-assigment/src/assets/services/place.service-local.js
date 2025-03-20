
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'placeDB'
_createPlaces(10)
export const placeService = {
    query,
    getById,
    save,
    remove,
    getEmptyPlace,
    getRandomPlace,
    getDefaultFilter
}

async function query(filterBy = {}) {
    let places = await storageService.query(STORAGE_KEY)

    const { name, type } = filterBy
    if (name) {
        const regex = new RegExp(name, "i")
        places = places.filter(place => regex.test(place.name))
    } if (type) places = places.filter(place => place.type === type)

    return places
}

function getById(placeId) {
    return storageService.get(STORAGE_KEY, placeId)
}

function remove(placeId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, placeId)
}


function save(place) {
    if (place._id) return storageService.put(STORAGE_KEY, place)
    else return storageService.post(STORAGE_KEY, place)

}

function getEmptyPlace() {
    return {
        name: '',
        type: '',
        address: '',
    }
}

function getRandomPlace() {
    const names = ['Central Park', 'Grand Canyon', 'Eiffel Tower', 'Sydney Opera House', 'Mount Fuji']
    const types = ['Restaurant', 'Hotel', 'Park',]
    const addresses = ['New York, USA', 'Arizona, USA', 'Paris, France', 'Sydney, Australia', 'Honshu, Japan']

    return {
        id: utilService.makeId(),
        name: names[utilService.getRandomIntInclusive(0, names.length - 1)],
        type: types[utilService.getRandomIntInclusive(0, types.length - 1)],
        address: addresses[utilService.getRandomIntInclusive(0, addresses.length - 1)]
    }
}

function getDefaultFilter() {
    return { name: '', type: '' }
}

async function _createPlaces(size) {
    let placesArray = await storageService.query(STORAGE_KEY)
    if (!placesArray || !placesArray.length) {
        for (let i = 0; i < size; i++) {
            placesArray.push(getRandomPlace())
            console.log(placesArray)
        }
    }

    utilService.saveToStorage(STORAGE_KEY, placesArray)
    return placesArray
}
