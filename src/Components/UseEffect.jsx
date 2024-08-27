import { data } from "autoprefixer";
import React from "react";
import { useEffect, useState } from "react";

const UseEffect = () => {

    useEffect(() => {
        getProducts()
    }, [])

    const [products, setProducts] = useState([])
    const [search, setSearched] = useState('')
    const searched = products?.filter((data) => data.title.toLowerCase().indexOf(search) !== -1)

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res)
            })
    }


    return (
        <>
            <h1 className=" text-4xl font-bold text-green-800  underline text-center bg-red-300 p-3 mytext">Sajid Online Super Market</h1>
            <div className="flex items-center justify-center">
                <input type="search" placeholder="Search by keywords or category"
                    className=" border-2 border-gray-500 outline-none p-2 rounded-md w-[50%] mt-6"
                    onChange={(e) => setSearched(e.target.value)} />
            </div>
            <div className=" text-left">
                {
                    searched.map((data) => (
                        <div className=" inline-block w-[300px] h-[100%] ml-8 container bg-gray-100 mt-2 p-2 rounded-md">
                            <div className="flex justify-center items-center">
                                <img className=" text-center w-[200px] h-[150px] rounded-md object-contain mix-blend-multiply" src={data.image} alt="" />
                            </div>
                            <h1 className="text-left" key={data.id}>
                                <span className=" font-semibold text-lg capitalize">Category: {data.category}</span>
                            </h1>
                            <br />
                            <span className="font-semibold text-[17px] font-serif">Keywords:</span> <br />
                            <span className="mt-0 text-[16px] font-serif"> {data.id}. {data.title}</span> <br />
                            <span className=" font-semibold text-[14px] font-serif">Price: ${data.price}</span> <br />
                            <div id="des" className=" hidden">{data.description} </div>
                            <button
                                className=" border-2 border-gray-700 p-[7px] rounded-md outline-none text-black font-semibold mt-3 w-[50%]"
                                id="btn"
                            >Show Details</button>

                        </div>
                    ))
                }
                <div id="modal" className=" w-[50%] bg-gray-400"></div>
            </div>
        </>
    )
}

export default UseEffect;