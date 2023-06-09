import React from 'react'

export default function Product() {
    return (
        <div>

            <form>

                <div className="mb-3">
                    <label for="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productname" placeholder="Lenevo Yoga X1" />
                </div>
                <div className="mb-3">
                    <label for="product-detail" className="form-label">Description</label>
                    <textarea className="form-control" id="product-detail" rows="5"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Product Image</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
                <ul class="list-group list-group-horizontal">
                    <div class="input-group " style={{ "width": "70%" }}>
                        <div class="input-group-text">Colour</div>
                        <input type="text" class="form-control" placeholder="Mention all Color comma saperated" />
                    </div>
                    <select class="form-select" id='category' style={{ "width": "30%", "marginLeft": "3px" }}>
                        <option selected>Category</option>
                        <option value="1">Laptop</option>
                        <option value="2">Mobile</option>
                        <option value="3">Others</option>
                    </select>
                </ul>
                <h3>Specifications</h3>
                
                    <div class="row">
                        <div class="col">
                        <input type="text" class="form-control" id="processorInfo" placeholder="Processor Info" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="osInfo" placeholder="OS information" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="sizeInfo" placeholder="size description" />
                        </div>
                        
                    </div>
                    <div class="row my-3">
                        <div class="col">
                        <input type="text" class="form-control" id="ramInfo" placeholder="RAM Info" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="memoryInfo" placeholder="Memory Information" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="weightInfo" placeholder="Weight Information" />
                        </div>
                        
                    </div>
                    <div class="row my-3">
                        <div class="col">
                        <input type="text" class="form-control" id="processorInfo" placeholder="Processor Info" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="osInfo" placeholder="OS information" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="size info" placeholder="size description" />
                        </div>
                        
                    </div>
                    <div class="row my-3">
                        <div class="col">
                        <input type="text" class="form-control" id="chipsetInfo" placeholder="Chipset Info" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="type" placeholder="Type" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="displayInfo" placeholder="Display Information" />
                        </div>
                        
                    </div>

                    <div class="row my-3">
                        <div class="col">
                        <input type="text" class="form-control" id="portInfo" placeholder="Port Info" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="wifi" placeholder="Wifi Inforrmation" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="powerSupply" placeholder="Power Information" />
                        </div>
                        
                    </div>

                    <div class="row my-3">
                        <div class="col">
                        <input type="text" class="form-control" id="warrenty" placeholder="Warrenty Info" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="material" placeholder="Build Quality" />
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" id="battery" placeholder="Battery Information" />
                        </div>
                        
                    </div>
                


            </form>


        </div>
    )
}
