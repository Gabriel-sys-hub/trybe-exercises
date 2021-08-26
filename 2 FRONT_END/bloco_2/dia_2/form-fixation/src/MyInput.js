import React from 'react'

class MyInput extends React.Component {
  
  render() {
    const { handleInput } = this.props;

    return (
      <div>
        <label>
          First Name
                    <input
            type="text"
            name="firstName"
            onChange={handleInput} />
        </label>
        <label>
          Last Name
                    <input
            type="text"
            name="lastName"
            onChange={handleInput} />
        </label>
        <label>
          Are u Okay?
                    <input
            type="checkbox"
            name="checkbox"
            onChange={handleInput} />
        </label>
        <label className="form-label">File</label>
        <input type="file" accept="application/pdf" />
      </div>
    )
  }
}

export default MyInput
