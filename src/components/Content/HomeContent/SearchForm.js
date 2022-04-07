import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
        const [searchValue, setSearchValue] = useState("");

        let navigate = useNavigate()

  return (
    <>
        <form
        className="spinForm"
        onSubmit={(e) => {
            e.preventDefault()
            if(searchValue) {
            navigate("/" + searchValue)
            }
          }
          }
        >
          <input className="spinText"
          value={searchValue}

          onChange={(e) => {
              if(e.target.value.length < 150) {
              setSearchValue(e.target.value)
              }
            }
            }
          type="text"
          placeholder="vanilla, chocolate, mint, strawberry, cookie dough"/>
          <input className="spinSubmit" type="submit" value="Spin!"/>
        </form>

        <p className="spinWarning">Ensure options are separated by a comma.</p>
      </>
  )
}