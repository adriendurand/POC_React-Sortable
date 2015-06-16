/** @jsx React.DOM */
var SortableGridItem = React.createClass({
  mixins: [Sortable],
  render: function() {
    console.log(this);
    return this.transferPropsTo(
    
      <div id={this.props["item"]} className={this.isDragging() ? "item dragging" : "item"}>
        <span>{this.props.item}</span>
      </div>
    );
  },
  placement: function(x,y,over) {
    var width = over.offsetWidth / 2;
    return x > width;
  }
})