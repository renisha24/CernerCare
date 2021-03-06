var React =require('react');
var ReactDOM=require('react-dom');
var PropTypes=require('prop-types');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name:{this.props.name} </h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes={
  img:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name='Tyler McGinnis'
    username='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>,
  document.getElementById('app')
);
