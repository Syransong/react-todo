import React from 'react'
import { useState } from 'react';

// Library Imports
import { CheckIcon } from '@heroicons/react/24/solid' 

export const EditForm = ({ editedTask, updateTask }) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName});
    }

    return (
        <div 
            role="dialog" 
            aria-labelledby='editTask'
            // onClick={}
        >
            <form 
                className='todo'
                onSubmit={handleFormSubmit}
            >
                <div className="wrapper">
                    <input 
                        type="text"
                        id="editTask"
                        className="input"
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Update Task"
                    />
                    <label 
                        htmlFor="editTask"
                        className="label"
                    >
                        Update Task     
                    </label>
                </div>
                <button 
                    className="btn"
                    aria-label="Confirm Updated Task"
                    type="submit"
                >
                    <CheckIcon 
                        strokeWidth={2}
                        height={24}
                        width={24}

                    />
                </button>
            </form>
        </div>
    );
}
