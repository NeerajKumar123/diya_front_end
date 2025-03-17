import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        dateCreated: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) return "Full Name is required";
        if (!/^\d{10}$/.test(formData.mobile)) return "Enter a valid 10-digit mobile number";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) return "Enter a valid email";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        setError("");
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwB7wqJNALTGKFva3QK_w0h57f118AAN77dBOr78ye_-jm8N8ISQdfgrOvRT0FnL8Va/exec", // Replace with your actual URL
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                    mode: "no-cors"
                }
            );
            setSuccess(true);
            setFormData({ fullName: "", mobile: "", email: "" });
        } catch (err) {
            setError("Network error. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto shadow-md rounded-lg p-6 mt-5 bg-amber-100">
            <h2 className="text-xl font-semibold mb-4 text-black">Contact Form</h2>
            {error && <p className="text-red-500 mb-3">{error}</p>}
            {success && <p className="text-green-500 mb-3">Form submitted successfully!</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>

    );
}

export default ContactForm;
