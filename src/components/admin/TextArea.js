import React from 'react';

export default ({onChangeHandler, name, value}) => (
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">{name}</span>
    </div>
    <textarea onChange={onChangeHandler} value={value} class="form-control" aria-label="With textarea"></textarea>
  </div>
)
