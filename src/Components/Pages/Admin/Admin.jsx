import React from 'react';

function Admin() {
    return (
        <section className={"min-h-screen p-10 flex items-start justify-center bg-blue-100"}>
            <div
                className={"w-1/2 border p-6 rounded-lg bg-white backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200"}>
                <h1 className={"text-center capitalize font-bold text-gray-600 text-2xl mb-5"}>post medicine</h1>
                <form className={"flex flex-col"}>
                    <input type="text" name="name" className={"form-input my-3 rounded-md"}
                           placeholder={"Enter Medicine Name"}/>
                    <input type="text" name="brand" className={"form-input my-3 rounded-md"}
                           placeholder={"Enter Medicine Brand"}/>
                    <input type="date" name="expiry" className={"form-input my-3 rounded-md"}
                           placeholder={"Enter Medicine Expiry"}/>
                    <input type="number" name="price" className={"form-input my-3 rounded-md"}
                           placeholder={"Enter Medicine Price"}/>
                    <select name="currency" className={"form-select my-3 rounded-md"} placeholder={"Select Currency"}>
                        <option value="Rs">Rs</option>
                    </select>
                    <div className={"my-3"}>
                        <label className={"mr-3"}>Availability</label>
                        <input type="radio" name="availability" className={"form-radio mr-2"} id={"availability-yes"}/>
                        <label htmlFor="availability-yes" className={"mr-4"}>Yes</label>
                        <input type="radio" name="availability" className={"form-radio mr-2"} id={"availability-no"}/>
                        <label htmlFor="availability-no">No</label>
                    </div>
                    <textarea name="description" className={"form-textarea my-3 rounded-md"}
                              placeholder={"Enter medicine description"}></textarea>
                    <input type="file" className={"form-input"} name="image"/>
                    <input type="submit" value="Post"
                           className={"bg-blue-600 hover:bg-blue-700 py-3 px-5 mt-5 rounded-md text-white capitalize font-bold"}/>
                </form>
            </div>
        </section>
    );
}

export default Admin;