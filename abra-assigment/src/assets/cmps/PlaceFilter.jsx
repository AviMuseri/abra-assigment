import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"

export function PlaceFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        console.log("filterByToEdit", filterByToEdit)

        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (
        <section className="place-filter full main-layout">
            <h2>Places Filter</h2>
            <form >
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="name"
                    name="name"
                    placeholder="By Name"
                    value={filterByToEdit.txt}
                    onChange={handleChange}
                />
                <label htmlFor="type">Type:</label>
                <select name="type" id="type" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Park">Park</option>
                </select>
            </form>
        </section>
    )
}