import React from "react";

class AddItemTwo extends React.Component {
  change(e) {
    if ("" !== e.target.value) {
      this.button.disabled = false;
    } else {
      this.button.disabled = true;
    }
  }
  add(e) {
    console.log(this.input.value);
    this.input.value = "";
    this.button.disabled = true;
  }

  render() {
    return (
      <div>
        <input
          ref={input => (this.input = input)}
          onChange={this.change.bind(this)}
        />
        <button
          onClick={this.add.bind(this)}
          ref={button => (this.button = button)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddItemTwo;
