import React from 'react'

function Card() {
  return (
    <div>

        <div className='card'>
            <ul>
            <img src="" alt="" />
            <li>foto</li>
            </ul>
        </div>
        {/* <div className='favorites'>
        <h2>FAVORITES</h2>
       <ul className="newbasket">
        {favorites.map((x) => {
          return (
            <ul className="new_basket_element" key={x.id}>
              <img className="newimg" src={x.image} alt="" />
              <div className="cc">
                <li>{x.id}</li>
                <li>{x.name}</li>
              </div>
              <button className="newheart" onClick={addtoFavorites}>
                <i class="fa-regular fa-heart"></i>
              </button>
            </ul>
          );
        })}
      </ul>
        </div> */}
    </div>
  )
}

export default Card