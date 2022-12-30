import React from 'react';
import TopNav from './TopNav';

export default function Layout(props: { children: any }): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center 
            min-h-screen text-gray-700 mt-0
            from-gray-100  to-gray-300 bg-gradient-to-br
             rounded-lg shadow-lg" >
        <TopNav />
        <div className="flex flex-col flex-grow m-10 p-8 xs:m-4 xs:p-4 overflow-hidden bg-white rounded-lg shadow-lg w-5/6 xs:w-[70%] xs:min-w-[360px] sm:w-3/4 ">
            {props.children}
        </div>
      </div>
    )
}