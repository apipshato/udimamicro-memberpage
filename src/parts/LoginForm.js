import React from 'react'

export default function LoginForm() {

    function submit(e){
        e.preventDefault()

    }
    return <div className="flex justify-center items-center pb-24">
        <div className="w-3/12">
            <h1 className="text-4xl text-gray-400 mb-6">
                <span className="font-bold">Continue</span> Study, <br/>
                Finish your <span className="font-bold">Goals</span>
            </h1>
            <form onSubmit={submit}></form>
        </div>
        </div>
    
}
