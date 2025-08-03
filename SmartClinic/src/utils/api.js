// API configuration utility
export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Helper function for making API calls
export const apiCall = async (endpoint, options = {}) => {
	const url = `${API_BASE}${endpoint}`;

	const defaultOptions = {
		headers: {
			"Content-Type": "application/json",
			...options.headers,
		},
		...options,
	};

	try {
		const response = await fetch(url, defaultOptions);
		return response;
	} catch (error) {
		console.error("API call failed:", error);
		throw error;
	}
};

export default { API_BASE, apiCall };
