import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaUp,
  faSortAlphaDown
} from "@fortawesome/free-solid-svg-icons";
// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon icon={faSortAlphaUp} />;
    return <FontAwesomeIcon icon={faSortAlphaDown} />;
  };

  render() {
    return (
      <thead>
        {this.props.columns.map(column => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => this.raiseSort(column.path)}
          >
            {column.label} {this.renderSortIcon(column)}
          </th>
        ))}
      </thead>
    );
  }
}

export default TableHeader;
