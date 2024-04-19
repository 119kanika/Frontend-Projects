
const AddTodo = () => {

  return (
    <div className="container ">

        <div className="row item-row">
          <div className="col-6">
            <input type="text" placeholder='Enter todo' />
          </div>
          <div className="col-4">
            <input type="date" name="date" />
          </div>
          <div className='col-2'>
            <button type='button' className='btn btn-success action-button'>
              Add
            </button>
          </div>
        </div>

    </div>
  )
}

export default AddTodo