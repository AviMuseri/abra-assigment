import { PlacePreview } from "./PlacePreview";

export function PlaceList({ places }) {
    return (
        <ul className="place-list">
            {places.map(place =>
                <li key={place.id} className="place-preview" >
                    <PlacePreview place={place} />
                </li>)}
        </ul>
    )
}