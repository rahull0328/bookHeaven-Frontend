import React from 'react'

function Cards({item}) {
  return (
    <>
        <div className="mt-4 my-3 p-3">
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                <figure style={{ height: '650px', overflow: 'hidden' }}>
                    <img 
                    src={item.image} style={{width: '100%', height: '100%', objectFit: 'cover'}}  alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}
                    {/* <div className="badge badge-secondary text-white">{item.category}</div> */}
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-between">
                        <div className="btn btn-outline cursor-pointer dark:bg-pink-700 dark:text-white hover:bg-pink-700 hover:text-white duration-200">{item.author}</div>
                        {/* <div className="btn btn-outline cursor-pointer dark:bg-pink-700 dark:text-white hover:bg-pink-700 hover:text-white duration-200">$&nbsp;{item.price}</div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards