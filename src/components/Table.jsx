import DataTable from 'react-data-table-component';

import { Spiner } from '@/components/Spiner';

export function Table({ title, columns, data, isLoading}) {
    return (
        <>
            <DataTable
                title={title}
                columns={columns}
                data={data}
                theme='dark'
                highlightOnHover
                pointerOnHover
                pagination
                progressPending={isLoading}
                progressComponent={<Spiner />}
                defaultSortFieldId={1}
            />
        </>
    )
}