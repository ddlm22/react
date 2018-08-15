/*
 *
 * Maestros
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { createStructuredSelector } from 'reselect';
import FlechitaAbajoIcon from 'material-ui/svg-icons/navigation/arrow-downward';
import FlechitaArribaIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import NeutroIcon from 'material-ui/svg-icons/action/compare-arrows';
import makeSelectMaestros from './selectors';


export class Maestros extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    arreMestros: [
      {
        matricula: '1234',
        nombre: 'Daniel',
        materias: 5,
        area: 'sistemas',
      },
      {
        matricula: '4321',
        nombre: 'Daney',
        materias: 3,
        area: 'Electrica',
      },
      {
        matricula: '4875',
        nombre: 'Rodrigo',
        materias: 6,
        area: 'Bioquimica',
      },
    ],
    open: false,
    openedit: false,
    posicion: -1,
    matricula: '',
    nombre: '',
    materias: 0,
    area: '',
    filtro: '',
    orden: 'down',
  }


  handleOpen = () => {
    this.setState({
      open: true,
      matricula: '',
      nombre: '',
      materias: '',
      area: '',
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCreateNewMaestro = () => {
    const {
      matricula,
      nombre,
      materias,
      area,
      arreMestros,
    } = this.state;

    const newMaestro = {
      matricula,
      nombre,
      materias,
      area,
    };

    arreMestros.push(newMaestro);
    this.setState({ arreMestros, open: false });
  }

  handleDeleteMaestro = (index) => {
    const { arreMestros } = this.state;
    delete arreMestros[index];
    const newMaestro = arreMestros;
    this.setState({ arreMestros: newMaestro });
  }

  handleCloseEdit = () => {
    this.setState({ openedit: false });
  };

  handleOpenEdit = (index) => {
    const { arreMestros } = this.state;
    this.setState({
      openedit: true,
      posicion: index,
      matricula: arreMestros[index].matricula,
      nombre: arreMestros[index].nombre,
      materias: arreMestros[index].materias,
      area: arreMestros[index].area,
    });
  };

  handleEditMaestro = () => {
    const {
      matricula,
      nombre,
      materias,
      area,
      arreMestros,
      posicion,
    } = this.state;

    const newMaestro = {
      matricula,
      nombre,
      materias,
      area,
    };

    arreMestros[posicion] = newMaestro;
    this.setState({ arreMestros, openedit: false });
  }

  render() {
    const { arreMestros, filtro, orden } = this.state;
    const arreMestrosordenado = arreMestros.sort((a, b) => {
      switch (filtro) {
        case 'matricula':
          if (orden === 'up') {
            return a.matricula < b.matricula;
          }
          return a.matricula > b.matricula;
        case 'nombre':
          if (orden === 'up') {
            return a.nombre < b.nombre;
          }
          return a.nombre > b.nombre;
        case 'materias':
          if (orden === 'up') {
            return a.materias < b.materias;
          }
          return a.materias > b.materias;
        case 'area':
          if (orden === 'up') {
            return a.area < b.area;
          }
          return a.area > b.area;
        default:
          return a.matricula < b.matricula;
      }
    });

    // ACCIONES DE DIALOGO
    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Guardar"
        primary
        keyboardFocused
        onClick={this.handleCreateNewMaestro}
      />,
    ];

    const actionsEditar = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={this.handleCloseEdit}
      />,
      <FlatButton
        label="Actualizar"
        primary
        keyboardFocused
        onClick={this.handleEditMaestro}
      />,
    ];

    // Estilo del cursor
    const cursor = {
      cursor: 'pointer',
    };
    // TABLA DE ALUMNOS
    const flechita = orden === 'down' ?
    (<FlechitaAbajoIcon
      style={cursor}
      onClick={() => this.setState({ orden: 'up' })}
    />)
    :
    (<FlechitaArribaIcon
      style={cursor}
      onClick={() => this.setState({ orden: 'down' })}
    />);

    const TableExampleSimple = () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>
              Matricula
              {
                filtro === 'matricula' ?
                flechita
                :
                <NeutroIcon
                  style={cursor}
                  onClick={() => this.setState({ filtro: 'matricula' })}
                />
              }
            </TableHeaderColumn>
            <TableHeaderColumn>
              Nombre
              {
                filtro === 'nombre' ?
                flechita
                :
                <NeutroIcon
                  style={cursor}
                  onClick={() => this.setState({ filtro: 'nombre' })}
                />
              }
            </TableHeaderColumn>
            <TableHeaderColumn>
              Materias
              {
                filtro === 'materias' ?
                flechita
                :
                <NeutroIcon
                  style={cursor}
                  onClick={() => this.setState({ filtro: 'materias' })}
                />
              }
            </TableHeaderColumn>
            <TableHeaderColumn>
              Area
              {
                filtro === 'area' ?
                flechita
                :
                <NeutroIcon
                  style={cursor}
                  onClick={() => this.setState({ filtro: 'area' })}
                />
              }
            </TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            arreMestrosordenado.map((item, index) => (
              <TableRow>
                <TableRowColumn>{item.matricula}</TableRowColumn>
                <TableRowColumn>{item.nombre}</TableRowColumn>
                <TableRowColumn>{item.materias}</TableRowColumn>
                <TableRowColumn>{item.area}</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                    label="Eliminar"
                    primary
                    style={style}
                    onClick={() => this.handleDeleteMaestro(index)}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                    label="Editar"
                    secondary
                    style={style}
                    onClick={() => this.handleOpenEdit(index)}
                  />
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
  );

    const style = {
      margin: 12,
    };

    return (
      <div>
        <Helmet
          title="Maestros"
          meta={[]}
        />
        <RaisedButton
          label="Crear"
          style={style}
          onClick={this.handleOpen}
        />
        {TableExampleSimple()}

        <Dialog
          title="Nuevo Maestro"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Matricula"
            fullWidth
            value={this.state.matricula}
            onChange={(event, newString) => {
              this.setState({ matricula: newString });
            }}
          />
          <TextField
            hintText="Nombre"
            fullWidth
            value={this.state.nombre}
            onChange={(event, newString) => {
              this.setState({ nombre: newString });
            }}
          />
          <TextField
            hintText="Materias"
            fullWidth
            value={this.state.materias}
            onChange={(event, newString) => {
              this.setState({ materias: newString });
            }}
          />
          <TextField
            hintText="Area"
            fullWidth
            value={this.state.area}
            onChange={(event, newString) => {
              this.setState({ area: newString });
            }}
          />
        </Dialog>

        <Dialog
          title="Actualizar Maestro"
          actions={actionsEditar}
          modal={false}
          open={this.state.openedit}
          onRequestClose={this.handleCloseEdit}
        >
          <TextField
            hintText="Matricula"
            fullWidth
            value={this.state.matricula}
            onChange={(event, newString) => {
              this.setState({ matricula: newString });
            }}
          />
          <TextField
            hintText="Nombre"
            fullWidth
            value={this.state.nombre}
            onChange={(event, newString) => {
              this.setState({ nombre: newString });
            }}
          />
          <TextField
            hintText="Materias"
            fullWidth
            value={this.state.materias}
            onChange={(event, newString) => {
              this.setState({ materias: newString });
            }}
          />
          <TextField
            hintText="Area"
            fullWidth
            value={this.state.area}
            onChange={(event, newString) => {
              this.setState({ area: newString });
            }}
          />
        </Dialog>

      </div>
    );
  }
}

Maestros.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Maestros: makeSelectMaestros(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Maestros);
