export const fetchMedicines = async () => {
    const url = "http://localhost:3000/api/v1/medicines/list"
    let medicines = await fetch(url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    return medicines;
}