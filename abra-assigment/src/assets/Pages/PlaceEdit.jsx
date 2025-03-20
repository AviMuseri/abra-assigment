import { useState } from 'react'
import { placeService } from '../services/place.service-local'

export function PlaceEdit() {
    const [placeToEdit, setPlaceToEdit] = useState(placeService.getEmptyPlace())

    function onSavePlace(ev) {
        ev.preventDefault()
        placeService.save(placeToEdit)
            .then(console.log)
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setPlaceToEdit((prevPlace) => ({ ...prevPlace, [field]: value }))
    }

    const { name, type, address } = placeToEdit
    return (
        <>
            <div>PlaceEdit</div>
            <form onSubmit={onSavePlace}>
                <label htmlFor="name">Name: </label>
                <input type="text"
                    name="name"
                    id="name"
                    placeholder='Enter Place Name'
                    value={name}
                    onChange={handleChange}
                />

                <label htmlFor="type">select the type of the place: </label>
                <select name="type" id="type" value={type} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Park">Park</option>
                </select>
                <option
                />

                <label htmlFor="address">address: </label>
                <input type="text"
                    name="address"
                    id="address"
                    placeholder='Enter Place address'
                    value={address}
                    onChange={handleChange}
                />

                <div>
                    <button>{placeToEdit._id ? 'Save' : 'Add'}</button>
                </div>
            </form>
        </>

    )
}