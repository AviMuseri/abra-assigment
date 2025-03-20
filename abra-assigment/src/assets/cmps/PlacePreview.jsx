export function PlacePreview({ place }) {
    if (!place) return <div>Loading</div>
    return (<>
        <h4>{place.name}</h4>
        <h4>{place.type}</h4>
        <h4>{place.address}</h4>
    </>
    )
}