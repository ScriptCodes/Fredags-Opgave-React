import React from 'react';
import Table from '../components/table';

const EndpointsPage = () => {
    const endpoints = [
        {
            method: 'GET',
            url: '/api/trades',
            requestBody: 'None',
            response: '[trade, trade, ...]',
            error: '(e1) - Unable to fetch trades',
        },
        {
            method: 'POST',
            url: '/api/trades',
            requestBody: '{ entryPrice, exitPrice }',
            response: 'trade',
            error: '(e2) - Invalid data',
        },
        {
            method: 'GET',
            url: '/api/trades/{id}',
            requestBody: 'None',
            response: 'trade',
            error: '(e3) - Trade not found',
        },
        {
            method: 'PUT',
            url: '/api/trades/{id}',
            requestBody: '{ entryPrice, exitPrice }',
            response: 'Updated trade',
            error: '(e4) - Trade not found or invalid data',
        },
        {
            method: 'DELETE',
            url: '/api/trades/{id}',
            requestBody: 'None',
            response: 'Deleted trade',
            error: '(e5) - Trade not found',
        },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <h1>API Documentation</h1>
            <p>Below is the documentation of the API endpoints for the Forex Trade Log:</p>
            <Table data={endpoints} />
        </div>
    );
};

export default EndpointsPage;
