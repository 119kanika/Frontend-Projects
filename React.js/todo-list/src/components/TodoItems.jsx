
const TodoItems = () => {

    let todoName = 'Buy notebooks';
    let todoDate = 'complete homework'

  return (
    <div className="container ">
        <div className="row item-row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className='col-2'>
            <button type='button' className='btn btn-danger action-button'>
              Delete
            </button>
          </div>
        </div>
    </div>
  )
}

export default TodoItems