import React, {useEffect, useState} from 'react';
import pill from "../../../assets/pill.png";
import {fetchMedicines} from "../../../services";

function Directory() {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        let mounted = true;
        fetchMedicines()
            .then(res => {
                if (mounted) {
                    setMedicines(res.medicines);
                }
            })
        return () => mounted = false
    }, [])
    return (
        <section className={"p-10 bg-white dark:bg-gray-800 h-screen"}>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-600 dark:bg-blue-300">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-800 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-800 uppercase tracking-wider"
                                    >
                                        brand
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-800 uppercase tracking-wider"
                                    >
                                        price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-white dark:text-gray-800 uppercase tracking-wider"
                                    >
                                        availability
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                                {medicines.map(medicine => (
                                    <tr key={medicine._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={pill} alt=""/>
                                                </div>
                                                <div className="ml-4">
                                                    <div
                                                        className="text-sm font-medium text-gray-900 capitalize">{medicine.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 capitalize">{medicine.brand}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                            {medicine.currency + " " + medicine.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                              className=" capitalize px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {medicine.availability ? "Yes" : "No"}
                          </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900" id={medicine._id}>
                                                More Details
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Directory;