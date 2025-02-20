import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { CaptainDataContext } from './CaptainDataContext';

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

// ✅ Add PropTypes validation
CaptainContext.propTypes = {
    children: PropTypes.node.isRequired, // Ensures `children` is provided
};

export default CaptainContext;
