import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";

function Main(){
    const [transactions, setTransactions] = useState([])
    
    useEffect(()=>{
        fetch("https://ntwigamartin.github.io/Bank-of-Flatiron-data/db.json")
        .then(res=>res.json())
        .then(data=>setTransactions(data.transactions))
    }, [])
    
         
    
    const tableElements = transactions.map(element=>{
        return (
                <tr key={element.id}>
                    <td>{element.date}</td>
                    <td>{element.description}</td>
                    <td>{element.category}</td>
                    <td>{element.amount}</td>
                </tr>
        )
    })
    
    const [formData, setFormData] = useState([{
        "date": "",
        "description": "",
        "category": "",
        "amount": ""
    }])

    const [submittedData, setSubmittedData] = useState([])
    
    function handleChange(event){
        setFormData((prevState) => {
            return { 
                ...prevState,
                [event.target.name] : event.target.value
            }
        })
    }
    

    function handleSubmit(event){
        event.preventDefault()
        const dataArray = [...submittedData, formData];
        setSubmittedData(dataArray)
        
    }

    const newTableRow = submittedData.map((data, index)=>{
        return (
            <tr key={index}>
                <td>{data.date}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td>{data.amount}</td>
            </tr>
        )
    })

    return (
        <div>       
            <SearchBar item={transactions}/>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Transaction Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tableElements}
                    {newTableRow}
                    </tbody>
                </table>
            </div>
            <br/><br/>
            <div className="add-details">
                <h2>Add New Transaction Details</h2>
                <form onSubmit={handleSubmit}>
                    <input type="date" name="date" placeholder="date" value={formData.date} onChange={handleChange}/>
                    <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange}/>
                    <input type="text" name="category" placeholder="category" value={formData.category} onChange={handleChange}/>
                    <input type="text" name="amount" placeholder="amount" value={formData.amount} onChange={handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Main;
             