import React from "react";

export const TodoItem = ({ value, identifier, isChecked, onChange }) => {
  const Tag = isChecked ? (props) => <s {...props} /> : (props) => <div {...props} />;
  return (
    <Tag className={`todo-item ${isChecked && "todo-item-cleared"}`}>
      <input checked={isChecked} onChange={event => {
        onChange(identifier, !isChecked);
      }} type="checkbox" />
      { value }
    </Tag>
  );
};

export default TodoItem;