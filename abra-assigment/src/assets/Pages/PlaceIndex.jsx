import { useEffect, useState } from 'react'
import { placeService } from '../services/place.service-local'
import { PlaceList } from '../cmps/PlaceList'
import { Loader } from '../cmps/Loader'
import { PlaceFilter } from '../cmps/PlaceFilter'

export function PlaceIndex() {
    const [places, setPlaces] = useState(null)
    const [filterBy, setFilterBy] = useState(placeService.getDefaultFilter())

    useEffect(() => {
        console.log("filterBy", filterBy)
        loadPlaces(filterBy)
    }, [filterBy])

    async function loadPlaces(filterBy) {
        try {
            const newPlaces = await placeService.query(filterBy)
            setPlaces(newPlaces)
        } catch (error) {
            console.log('cannot load Places ,', error)
        }
    }

    if (!places) return <div><Loader /></div >
    return (
        <div>
            <h3>Places App</h3>
            <main>
                <PlaceFilter filterBy={filterBy} onSetFilter={setFilterBy} />
                <PlaceList places={places} />
            </main>
        </div>
    )
}