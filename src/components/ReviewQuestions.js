import React from 'react';

export const ReviewQuestions = props => {
    const { connectionNumber, customerName, phoneNumber } = props

    return (
        <table>
            <td> Connection Number</td>
            <td> {connectionNumber} </td>
        </table>
    )
}
