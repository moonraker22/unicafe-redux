import { connect } from 'react-redux'
import { set } from '../features/filterSlice'

const Filter = (props) => {
  const handleChange = (event) => {
    props.set(event.target.value)
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set: (filter) => dispatch(set(filter)),
  }
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter
