import React from 'react'

export default function Jester() {
  return (
    <>
    <table className ="table">
        <thead >
            <th>Name </th>
            <th> Branch</th>
        </thead>
        <tbody>
            {
                m.map(
                    (obj) =>{
                        return(
                            <tr>
                                <td>{obj.Name}</td>
                                <td>{obj.Branch}</td>
                            </tr>
                        )
                    }
                )
            }
        </tbody>
    </table>
    </>
  )
}
