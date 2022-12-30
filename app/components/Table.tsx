import React from 'react';

export type TableRowType = {
    avatar?: string | null,
    columns?: (string | null)[]
}

type TableType = {
    headers: String[],
    records: TableRowType[]
}

const HeaderCol: React.FC = (props) => {
    return (
        <th 
            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            {props.children}
        </th>
    )
}

// const AvatarColumn:React.FC<TableRowType> = (props) => (<td
//     className="px-6 py-4 whitespace-no-wrap border-b border-gray-200" >
//     <div className="flex items-center">
//         <div className="flex-shrink-0 w-10 h-10">
//             <img className="w-10 h-10 rounded-full" src={props.avatar}
//                 alt="admin dashboard ui" />
//         </div> 
//     </div>
// </td>)

const TableRow:React.FC<TableRowType> = (props) => {
    const {avatar, columns = []} = props;

    return (
        <tr>
            {columns.map((column, index) => (
                <td key={index}
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        {
                            index === 0 && (
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="round-avatar-clip" src={avatar} alt="avatar"/>
                                </div> 
                            )
                        }
                        <div className="ml-4">
                            <div className="text-sm font-medium leading-5 text-gray-900">
                                {column}
                            </div>
                        </div>
                    </div>
                </td>))}
        </tr>
    )
}

const Table: React.FC<TableType> = function Table(props) {
    const { headers, records } = props;

    return (<div className="flex flex-col mt-8">
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
                <thead>
                    <tr>
                    {headers.map((header,index) => (<HeaderCol key={index} >{header}</HeaderCol>))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {records.map((record, index) => (<TableRow key={index} {...record} />))}
                </tbody>
            </table>
        </div>
    </div>
</div>)
}

export default Table;