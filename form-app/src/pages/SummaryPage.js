import React, { useEffect, useState } from 'react';


function SummaryPage() {
    const [citizens, setCitizens] = useState([]);
    const [filters, setFilters] = useState({
        fromDate: '',
        toDate: '',
        city: '',
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const { fromDate, toDate, city } = filters;

        // Construct the query string
        const queryParams = new URLSearchParams();
        if (fromDate) queryParams.append('fromDate', fromDate);
        if (toDate) queryParams.append('toDate', toDate);
        if (city) queryParams.append('city', city);

        // Send GET request with filters to the backend API for fetching citizens
        fetch(`/api/citizens?${queryParams.toString()}`)
            .then((response) => response.json())
            .then((data) => {
                setCitizens(data);
            })
            .catch((error) => {
                console.error('Error fetching citizens:', error);
                // Handle error, e.g., show an error message, etc.
            });
    };


    useEffect(() => {
        // Fetch all citizens when the component mounts
        fetch('/api/citizens')
            .then((response) => response.json())
            .then((data) => {
                setCitizens(data);
            })
            .catch((error) => {
                console.error('Error fetching citizens:', error);
                // Handle error, e.g., show an error message, etc.
            });
    }, []);

    const handleExport = () => {

    };

    // Render the summary page HTML
    return (
        <div className="container">
            <form onSubmit={handleSearch} className="mb-4">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="fromDate" className="form-label">From Date:</label>
                        <input
                            type="date"
                            id="fromDate"
                            name="fromDate"
                            className="form-control"
                            value={filters.fromDate}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="toDate" className="form-label">To Date:</label>
                        <input
                            type="date"
                            id="toDate"
                            name="toDate"
                            className="form-control"
                            value={filters.toDate}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="city" className="form-label">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="form-control"
                            value={filters.city}
                            onChange={handleFilterChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Land Line</th>
                    <th>Cell Phone</th>
                    <th>Covid History</th>
                </tr>
                </thead>
                <tbody>
                {citizens.map((citizen) => (
                    <tr key={citizen.id}>
                        <td>{citizen.firstName} {citizen.lastName}</td>
                        <td>{citizen.dateOfBirth}</td>
                        <td>{citizen.address}</td>
                        <td>{citizen.city}</td>
                        <td>{citizen.zipCode}</td>
                        <td>{citizen.landline}</td>
                        <td>{citizen.cellPhone}</td>
                        <td>{citizen.hasCovidHistory ? "Yes" : "No"}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button type="button" className="btn btn-primary" onClick={handleExport}>
                Export to Excel
            </button>
        </div>
    );
}

export default SummaryPage;
