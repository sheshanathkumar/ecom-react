import React from 'react'

export default function Product() {
    return (
        <div>

            <form>

                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productname" placeholder="Lenevo Yoga X1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-detail" className="form-label">Description</label>
                    <textarea className="form-control" id="product-detail" rows="5"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Product Image</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <ul className="list-group list-group-horizontal">
                    <div className="input-group " style={{ "width": "70%" }}>
                        <div className="input-group-text">Colour</div>
                        <input type="text" className="form-control" placeholder="Mention all Color comma saperated" />
                    </div>
                    <select className="form-select" id='category' style={{ "width": "30%", "marginLeft": "3px" }}>
                        <option defaultValue="1" >Category</option>
                        <option defaultValue="2">Laptop</option>
                        <option defaultValue="3">Mobile</option>
                        <option defaultValue="4">Others</option>
                    </select>
                </ul>
                <h3 className='my-3'>Specifications</h3>
                
                    <div className="row">
                        <div className="col">
                        <input type="text" className="form-control" id="processorInfo" placeholder="Processor Info" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="osInfo" placeholder="OS information" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="sizeInfo" placeholder="size description" />
                        </div>
                        
                    </div>
                    <div className="row my-3">
                        <div className="col">
                        <input type="text" className="form-control" id="ramInfo" placeholder="RAM Info" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="memoryInfo" placeholder="Memory Information" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="weightInfo" placeholder="Weight Information" />
                        </div>
                        
                    </div>
                
                    <div className="row my-3">
                        <div className="col">
                        <input type="text" className="form-control" id="chipsetInfo" placeholder="Chipset Info" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="type" placeholder="Type" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="displayInfo" placeholder="Display Information" />
                        </div>
                        
                    </div>

                    <div className="row my-3">
                        <div className="col">
                        <input type="text" className="form-control" id="portInfo" placeholder="Port Info" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="wifi" placeholder="Wifi Inforrmation" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="powerSupply" placeholder="Power Information" />
                        </div>
                        
                    </div>

                    <div className="row my-3">
                        <div className="col">
                        <input type="text" className="form-control" id="warrenty" placeholder="Warrenty Info" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="material" placeholder="Build Quality" />
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" id="battery" placeholder="Battery Information" />
                        </div>
                        
                    </div>
                


            </form>


        </div>
    )
}
