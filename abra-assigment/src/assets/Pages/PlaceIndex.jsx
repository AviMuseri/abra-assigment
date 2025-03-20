import { useEffect, useState } from "react"
import { PlaceFilter } from "../cmps/PlaceFilter"
import { PlaceList } from "../cmps/PlaceList"

export function PlaceIndex() {
    const [places, setPlaces] = useState(null)

    useEffect(() => {
        loadPlaces()
    }, [])

    function loadPlaces() {

    }
    return (
        <>
            <PlaceFilter />
            <PlaceList />
        </>
    )
}