import React from 'react'
import { connect } from 'react-redux'
import fetchApi from '../Actions/requisition';

function Home({ data, loading, fetchApi }) {
 
  return (
    <div>
      { loading ? <div>Loading</div> : data.data.children.map((title, index) => <li key={ index }>{ title.data.title }</li>) }
      <select onChange={({target}) => fetchApi(target.value)}>
        <option>reactjs</option>
        <option>frontend</option>
      </select>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchApi: (payload) => dispatch(fetchApi(payload))
})

const mapStateToProps = (state) => ({
  data: state.redditReducer.data,
  loading: state.redditReducer.loading
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);