import React from 'react';

const Table = ({ data }) => {
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Method</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>URL</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Request Body</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Response</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f4f4f4' }}>Error</th>
                </tr>
            </thead>
            <tbody>
                {data.map((endpoint, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{endpoint.method}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{endpoint.url}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{endpoint.requestBody}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{endpoint.response}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{endpoint.error}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
