import React, {useEffect, useState} from "react";

function Main(){
    const [transactions, setTransactions] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/transactions")
        .then(res=>res.json())
        .then(data=>setTransactions(data))
    }, [])
    
    const tableElements = transactions.map(element=>{
        return (
            <tbody>
                <tr>
                    <td>{element.date}</td>
                    <td>{element.description}</td>
                    <td>{element.category}</td>
                    <td>{element.amount}</td>
                </tr>
            </tbody>
        )
    })
    
    
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Transaction Amount</th>
                        </tr>
                    </thead>
                    {tableElements}
                </table>
            </div>
            <div>
                {/*<form>
                    <input type="" name="" value=""/>
                    <input type="" name="" value=""/>
                    <input type="" name="" value=""/>
                    <input type="" name="" value=""/>
                    <button>Submit</button>
    </form>*/}
            </div>
        </div>
    )
}

export default Main;