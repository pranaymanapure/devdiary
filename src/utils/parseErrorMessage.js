const parseErrorMessage = (error) => {
    // Check error.response.data first (most specific backend errors)
    if (error && error.response && error.response.data) {
        const data = error.response.data;

        // 1. If error.response.data is an object, look for .message or .error
        if (typeof data === "object" && data !== null) {
            if (data.message && typeof data.message === "string") {
                return data.message;
            }
            if (data.error && typeof data.error === "string") {
                // Fallback to .error field
                return data.error;
            }
            // If it's an object but no usable fields, log and fall through to default.
            console.error(
                "Received object error from error.response.data without .message or .error string field:",
                data
            );
        }
        // 2. If error.response.data is a string, try HTML parsing then treat as plain text.
        else if (typeof data === "string") {
            // Attempt HTML parsing on the string data
            const regex = /<pre>Error: (.*?)<br>/s;
            const match = regex.exec(data);
            if (match && match[1]) {
                return match[1]; // HTML parsed message from error.response.data string
            }
            // If not HTML-parsable and non-empty, return as plain text.
            if (data.trim().length > 0) {
                return data;
            }
            // If it's an empty string from error.response.data
            if (data.trim().length === 0) {
                console.error(
                    "Received empty error string from error.response.data."
                );
            }
        }
        // If error.response.data is not an object or string (e.g., number, boolean), log it.
        else {
            console.error(
                "error.response.data was present but not an object or string:",
                data
            );
        }
    }
    // Fallback: If no error.response.data, but error.message exists (e.g., network error, or error created with new Error("message"))
    else if (
        error &&
        error.message &&
        typeof error.message === "string" &&
        error.message.trim().length > 0
    ) {
        // Attempt HTML parsing on error.message as well, as it might contain it
        const regex = /<pre>Error: (.*?)<br>/s;
        const match = regex.exec(error.message);
        if (match && match[1]) {
            return match[1];
        }
        // Otherwise, return the plain error.message
        return error.message;
    }
    // If none of the above, log the entire error structure if it exists
    else if (error) {
        console.error(
            "Error object structure not recognized or no specific message found:",
            error
        );
    } else {
        console.error(
            "parseErrorMessage called with undefined or null error object."
        );
    }

    // Final Fallback: Generic error message
    return "Error: Unable to complete request";
};

export default parseErrorMessage;
