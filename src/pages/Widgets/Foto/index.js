import React, {Component} from 'react'
import FotoLayout from './components/foto.js'

class Foto extends Component {
  render() {
    return(
      <div>
        <FotoLayout
          foto={this.props.foto}
        />
      </div>
    )
  }
}

export default Foto;
