export const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" placeholder="Add task"/>
            </div>
            <div className="form-control">
                <label htmlFor="task">Day & Time</label>
                <input type="text" placeholder="Day and time"/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="task">Set reminder</label>
                <input type="checkbox"/>
            </div>
            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
    )
}

