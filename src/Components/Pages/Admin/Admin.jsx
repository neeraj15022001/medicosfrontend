import React from 'react';

function Admin() {
    return (
        <section className={"min-h-screen p-10 flex items-start justify-center bg-white dark:bg-gray-800"}>
            <div
                className={"w-full sm:w-full md:w-1/2"}>
                <h1 className={"capitalize font-bold text-gray-600 dark:text-gray-300 text-5xl mb-5"}>post medicine</h1>
                <form className={"flex flex-col"}>
                    <input type="text" name="name" className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                           placeholder={"Enter Medicine Name"}/>
                    <input type="text" name="brand" className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                           placeholder={"Enter Medicine Brand"}/>
                    <input type="date" name="expiry" className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                           placeholder={"Enter Medicine Expiry"}/>
                    <input type="number" name="price" className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                           placeholder={"Enter Medicine Price"}/>
                    <select name="currency" className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"} placeholder={"Select Currency"}>
                        <option value="Rs">Rs</option>
                    </select>
                    <div className={"my-3"}>
                        <label className={"mr-3 dark:text-gray-300 font-bold"}>Availability</label>
                        <input type="radio" name="availability" className={"form-radio mr-2"} id={"availability-yes"}/>
                        <label htmlFor="availability-yes" className={"mr-4 dark:text-gray-300"}>Yes</label>
                        <input type="radio" name="availability" className={"form-radio mr-2"} id={"availability-no"}/>
                        <label htmlFor="availability-no" className={"mr-4 dark:text-gray-300"} >No</label>
                    </div>
                    <textarea name="description" className={"dark:text-gray-300 dark:focus:border-blue-300 my-3 p-4 text-xl bg-transparent border-b-4 focus:border-blue-600 outline-0"}
                              placeholder={"Enter medicine description"}></textarea>
                    <input type="file" className={"bg-transparent text-gray-300"} name="image"/>
                    <input type="submit" value="Post"
                           className={"cursor-pointer bg-blue-600 dark:bg-transparent transition hover:bg-blue-700 dark:hover:bg-blue-300 rounded-md py-3 text-white dark:text-blue-300 dark:hover:text-gray-800 font-bold text-2xl capitalize mt-8 dark:border dark:border-blue-300"}/>
                </form>
            </div>
        </section>
    );
}

export default Admin;