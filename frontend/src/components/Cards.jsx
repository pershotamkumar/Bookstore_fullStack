import React from 'react'

const Cards = ({ item }) => {
  console.log(item)
  return (
    <>
      <div className="card bg-base-100 w-81 shadow-xl mt-4 mb-4 m-3 hover:scale-105 duration-300 dark:border-white  dark:bg-slate-900 dark:text-white" >
        <figure>
          <img
            src={item.img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{` ${item.category}`}</div>
          </h2>

          <p>If a dog chews shoes whose shoes does he choose?</p>
          {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
     
    </div> */}
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{`$ ${item.price}`}</div>
            <div className="badge badge-outline text-black hover:text-white hover:bg-pink-400 dark:bg-slate-900 dark:text-white cursor-pointer">buy now</div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Cards
