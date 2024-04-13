import React, { useState } from 'react'




const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const items = [
    { id: 1, name: "Test item 1", category: 'category name' },
    { id: 2, name: "Test item 2", category: 'category name' },
    { id: 3, name: "Test Item 3", category: 'category name' },
    { id: 4, name: "Test Item 4", category: 'category name' },
  ];



  return (
    
    <div className='w-full flex justify-center flex-col'>
      
      <div className='w-full py-4 flex justify-between'>

      <div className="lg:block mr-auto ml-6 hidden relative max-w-xs">
              <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                <span className="justify-center items-center flex">
                  <span className="justify-center items-center flex">
                    <span className="items-center justify-center flex">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                        stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0
                    11-14 0 7 7 0 0114 0z"/></svg>
                    </span>
                  </span>
                </span>
              </p>
              <input placeholder="Search Products" type="search" className="border border-gray-300 focus:ring-indigo-600
            focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
            </div>

          <button class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-6 cursor-pointer"
            onClick={() => setShowModal(true)}>
            Add Product
          </button>

      </div>
        <Modal/>
       <Grid items={items} />
       
    </div>
  )










  function Modal() {
    return (
      <>
      {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-full my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                     Add New Product
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className="relative p-6 flex-auto">

                    <form className='w-full'>

                      <div className="w-full mb-4">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="category">
                        Select Category
                      </label>
                      <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category">
                          <option>Category 1</option>
                          <option>Category 2</option>
                          <option>Category 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      </div>

                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="prodName">
                          Product Name
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prodName" type="text" placeholder="Name"/>
                      </div>

                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="desc">
                          Description
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Description"/>
                      </div>

                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="price">
                          Price
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Price"/>
                      </div>

                      <div className='mb-4'>
                        
                      <div className="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" multiple/>
                        </label>
                      </div> 

                      </div>

                    </form>
                    
                  </div>


                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }

}

export default Products


const Grid = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} >
          <ProdItem item={item}/>
        </div>
      ))}
    </div>
  );
};


const ProdItem = ({item}) => {
  return (
    <div className="flex flex-col justify-center">
	<div
		class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div className="w-full md:w-1/3 bg-white grid place-items-center">
			<img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl" />
    </div>
			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
					<p className="text-gray-500 font-medium hidden md:block">{item.category}</p>
					<div className="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p className="text-gray-600 font-bold text-sm ml-1">
							4.96
							<span className="text-gray-500 font-normal">(76 reviews)</span>
						</p>
					</div>
					<div className="">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clip-rule="evenodd" />
						</svg>
					</div>
					<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
						Superhost</div>
				</div>
				<h3 className="font-black text-gray-800 md:text-3xl text-xl">{item.name}</h3>
				<p className="md:text-lg text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<p className="text-xl font-black text-gray-800">
					$110
					<span className="font-normal text-gray-600 text-base"></span>
				</p>
			</div>
		</div>
	</div>
  )
}






