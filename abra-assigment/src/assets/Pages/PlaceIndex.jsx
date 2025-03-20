import { useEffect, useState } from 'react'
import { placeService } from '../services/place.service-local'
import { PlaceList } from '../cmps/PlaceList'
import { Loader } from '../cmps/Loader'
import { PlaceFilter } from '../cmps/PlaceFilter'

export function PlaceIndex() {
    const [places, setPlaces] = useState(null)

    useEffect(() => {
        loadPlaces()
    }, [])

    async function loadPlaces() {
        const newPlaces = await placeService.query()
        setPlaces(newPlaces)
    }

    if (!places) return <div><Loader /></div >
    return (
        <div>
            <h3>Places App</h3>
            <main>
                <PlaceFilter />
                <PlaceList places={places} />
            </main>
        </div>
    )
}