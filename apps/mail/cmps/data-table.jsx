import { DataTableRow } from "./data-table-row.jsx"

const { useState, useEffect } = React

export function DataTable({ emails }) {

    console.log(emails)
    return <table border="1">
        <thead>

        </thead>
        <tbody>
            {emails.map(email => <DataTableRow key={email.id} email={email} />)}
        </tbody>
    </table>
}
