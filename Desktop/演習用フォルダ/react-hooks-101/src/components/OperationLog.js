import React from 'react'
const OperationLog = ({ OperationLog }) => {
  return (
    <tr>
    <td>{OperationLog.description}</td>
    <td>{OperationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLog