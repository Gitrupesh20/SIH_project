import React from 'react'
import './Form.css'
function Publication() {
    async function fetchPublications() {
        const query = document.getElementById('query').value;
        const searchType = document.getElementById('search_type').value;
        const startYear = document.getElementById('start_year').value;
        const endYear = document.getElementById('end_year').value;

        const requestBody = {
            query: query,
            search_type: searchType,
            start_year: startYear,
            end_year: endYear
        };

        const response = await fetch('http://127.0.0.1:5000/fetch-publications', { 
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();
        document.getElementById('output').innerHTML = <p>${result.message} - ${result.count} publications fetched.</p>;
    }

    async function getPublications() {
        const response = await fetch('http://127.0.0.1:5000/get-publications', {
            method: 'GET'
        });
        const publications = await response.json();
        document.getElementById('output').innerHTML = <pre>${JSON.stringify(JSON.parse(publications), null, 2)}</pre>;
    }
    async function fetchPublications() {
        const query = document.getElementById('query').value;
        const searchType = document.getElementById('search_type').value;
        const startYear = document.getElementById('start_year').value;
        const endYear = document.getElementById('end_year').value;

        const requestBody = {
            query: query,
            search_type: searchType,
            start_year: startYear,
            end_year: endYear
        };

        const response = await fetch('http://127.0.0.1:5000/fetch-publications', { 
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();
        document.getElementById('output').innerHTML = <p>${result.message} - ${result.count} publications fetched.</p>;
    }

    async function getPublications() {
        const response = await fetch('http://127.0.0.1:5000/get-publications', {
            method: 'GET'
        });
        const publications = await response.json();
        document.getElementById('output').innerHTML = <pre>${JSON.stringify(JSON.parse(publications), null, 2)}</pre>;
    }
  return (
    <div className='main_form'>
    <h1>Publication Search</h1>

<div className='second_main'>
<label for="query">Search Query (Author):</label>
<input type="text" id="query" required/>

<label for="search_type">Search Type:</label>
<select id="search_type">
  <option value="author">Author</option>
  <option value="title">Title</option>
</select>

<label for="start_year">Start Year:</label>
<input type="number" id="start_year"/>

<label for="end_year">End Year:</label>
<input type="number" id="end_year"/>

<button onclick="fetchPublications()"  className='first'>Fetch Publications</button> 
<button onclick="getPublications()"  className='second'>Get Stored Publications</button>
</div>
</div>

  )
}

export default Publication

   