/** @jsx React.DOM */
var App = React.createClass({

  getInitialState: function() {
    return {data: {items : []}};
  },

  sort: function(items, dragging) {
    var data = this.state.data;
    data.items = items;
    data.dragging = dragging;
    this.setState({data: data});
  },

  sortableGrid: function(item, i) {
    return (
        <SortableGridItem
           sort={this.sort}
           data={this.state.data}
           key={i}
           item={item} />
      );
  },

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data) {
        this.setState({data : data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div id="app">
        <div id="grid">{this.state.data.items.map(this.sortableGrid, this)}</div>
        <StateView data={this.state.data} />
      </div>
    )
  }
});