import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        zipCode: '',
        landline: '',
        cellPhone: '',
        hasCovidHistory: false,
        conditions: [],
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            if (name === 'conditions') {
                const updatedConditions = [...formData.conditions];

                if (checked) {
                    updatedConditions.push(value);
                } else {
                    const index = updatedConditions.indexOf(value);
                    if (index !== -1) {
                        updatedConditions.splice(index, 1);
                    }
                }

                setFormData((prevState) => ({
                    ...prevState,
                    conditions: updatedConditions,
                }));
            } else {
                const newValue = checked;
                setFormData((prevState) => ({
                    ...prevState,
                    [name]: newValue,
                }));
            }
        } else {
            const newValue = value;
            setFormData((prevState) => ({
                ...prevState,
                [name]: newValue,
            }));
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     const citizenData = {
    //         firstName: formData.firstName,
    //         lastName: formData.lastName,
    //         dateOfBirth: formData.dateOfBirth,
    //         address: formData.address,
    //         city: formData.city,
    //         zipCode: formData.zipCode,
    //         landline: formData.landline,
    //         cellPhone: formData.cellPhone,
    //         hasCovidHistory: formData.hasCovidHistory,
    //         conditions: formData.conditions,
    //     };
    //
    //     try {
    //         console.log("first-name" + citizenData.firstName)
    //         await axios.post('/api/citizens', citizenData);
    //         console.log('Registration success');
    //         alert('Registration successful!');
    //         // Handle success, e.g., show a success message, reset the form, etc.
    //         setFormData({
    //             firstName: '',
    //             lastName: '',
    //             dateOfBirth: '',
    //             address: '',
    //             city: '',
    //             zipCode: '',
    //             landline: '',
    //             cellPhone: '',
    //             hasCovidHistory: false,
    //             conditions: [],
    //         });
    //     } catch (error) {
    //         console.error('Registration error:', error);
    //         alert('Registration failed!');
    //         // Handle error, e.g., show an error message, etc.
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send POST request with formData to the backend API for registration
        // Example using fetch:
        fetch('/api/citizens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Registration success:', data);
                // Handle success, e.g., show a success message, reset the form, etc.
                alert('Registration successful!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    address: '',
                    city: '',
                    zipCode: '',
                    landline: '',
                    cellPhone: '',
                    hasCovidHistory: false,
                    conditions: [],
                });
            })
            .catch((error) => {
                console.error('Registration error:', error);
                alert('Registration failed!');
            });
    };


    // Render the registration form HTML
    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City:</label>
                <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                >
                    <option value="">Select City</option>
                    <option value="Beer-Sheva">Beer-Sheva</option>
                    <option value="Haifa">Haifa</option>
                    <option value="Jerusalem">Jerusalem</option>
                    <option value="Tel Aviv">Tel Aviv</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="landline" className="form-label">Landline:</label>
                <input
                    type="tel"
                    id="landline"
                    name="landline"
                    value={formData.landline}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cellPhone" className="form-label">Cell Phone:</label>
                <input
                    type="tel"
                    id="cellPhone"
                    name="cellPhone"
                    value={formData.cellPhone}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    id="hasCovidHistory"
                    name="hasCovidHistory"
                    checked={formData.hasCovidHistory}
                    onChange={handleInputChange}
                    className="form-check-input"
                />
                <label htmlFor="hasCovidHistory" className="form-check-label">COVID-19 History</label>
            </div>
            <div className="mb-3">
                <label className="form-label">Conditions:</label>
                <div className="form-check">
                    <input
                        type="checkbox"
                        id="condition1"
                        name="conditions"
                        value="Diabetes"
                        checked={formData.conditions.includes('Diabetes')}
                        onChange={handleInputChange}
                        className="form-check-input"
                    />
                    <label htmlFor="condition1" className="form-check-label">Diabetes</label>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        id="condition2"
                        name="conditions"
                        value="Cardiovascular Problems"
                        checked={formData.conditions.includes('Cardiovascular Problems')}
                        onChange={handleInputChange}
                        className="form-check-input"
                    />
                    <label htmlFor="condition2" className="form-check-label">Cardiovascular Problems</label>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        id="condition3"
                        name="conditions"
                        value="Allergies"
                        checked={formData.conditions.includes('Allergies')}
                        onChange={handleInputChange}
                        className="form-check-input"
                    />
                    <label htmlFor="condition3" className="form-check-label">Allergies</label>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        id="condition4"
                        name="conditions"
                        value="Other"
                        checked={formData.conditions.includes('Other')}
                        onChange={handleInputChange}
                        className="form-check-input"
                    />
                    <label htmlFor="condition4" className="form-check-label">Other:</label>
                    <input
                        type="text"
                        id="otherCondition"
                        name="otherCondition"
                        value={formData.conditions.includes('Other') ? formData.otherCondition : ''}
                        onChange={handleInputChange}
                        disabled={!formData.conditions.includes('Other')}
                        className="form-control"
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default RegistrationForm;
