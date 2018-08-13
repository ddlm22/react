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
    posicion: -1,
    matricula: '',
    nombre: '',
    materias: 0,
    area: '',
  }


  handleOpen = () => {
    this.setState({ open: true });
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

  handleOpenEdit = (index) => {
    this.setState({ open: true, posicion: index });
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
    this.setState({ arreMestros, open: false });
  }

  render() {
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
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Actualizar"
        primary
        keyboardFocused
        onClick={this.handleEditMaestro}
      />,
    ];

    const { arreMestros } = this.state;
    const TableExampleSimple = () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Matricula</TableHeaderColumn>
            <TableHeaderColumn>Nombre</TableHeaderColumn>
            <TableHeaderColumn>Materias</TableHeaderColumn>
            <TableHeaderColumn>Area</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            arreMestros.map((item, index) => (
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
            onChange={(event, newString) => {
              this.setState({ matricula: newString });
            }}
          />
          <TextField
            hintText="Nombre"
            fullWidth
            onChange={(event, newString) => {
              this.setState({ nombre: newString });
            }}
          />
          <TextField
            hintText="Materias"
            fullWidth
            onChange={(event, newString) => {
              this.setState({ materias: newString });
            }}
          />
          <TextField
            hintText="Area"
            fullWidth
            onChange={(event, newString) => {
              this.setState({ area: newString });
            }}
          />
        </Dialog>

        <Dialog
          title="Actualizar Maestro"
          actions={actionsEditar}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Matricula"
            fullWidth
            onChange={(event, newString) => {
              this.setState({ matricula: newString });
            }}
          />
          <TextField
            hintText="Nombre"
            fullWidth
            onChange={(event, newString) => {
              this.setState({ nombre: newString });
            }}
          />
          <TextField
            hintText="Materias"
            fullWidth
            onChange={(event, newString) => {
              this.setState({ materias: newString });
            }}
          />
          <TextField
            hintText="Area"
            fullWidth
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
