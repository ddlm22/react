/*
 *
 * LunaDeMiel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import ItemPrincipal from 'components/ItemPrincipal';
import makeSelectLunaDeMiel from './selectors';
import messages from './messages';
import foto1 from './foto1.jpg';
import usuario from './usuario.jpg';
import d1 from './d1.jpg';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import c1 from './c1.jpg';
import c2 from './c2.jpg';
import c3 from './c3.jpg';
import c4 from './c4.jpg';
import{
  MainConteiner,
  ImgMainConteiner,
  MainImageContainer,
  Layer42,
  Layer42img,
  Telefono,
  Bienvenido,
  Especiales,
  TextoPrincipal,
  Centrar,
  Parrafo1,
  Parrafo2,
  Datos_reserva,
  Sombra,
  Opciones,
  Span_sombra,
  Input_sombra,
  Btn_buscar,
  Input_btnbuscar,
  Parte1,
  Span_parte1,
  Texto_parte1,
  Parte2,
  Imagenes_parte2,
  Img_parte2,
  Span_parte2,
  Input_parte2,
  Viaje_soñando,
  Destinos_top,
  Carrusel,
  Img_carrusel,
  Relajate,
  F_portada,

} from './styledComponents';

export class LunaDeMiel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainConteiner>
        <Helmet
          title="LunaDeMiel"
          meta={[]}
        />
          <MainImageContainer>

            <ImgMainConteiner src={foto1}/>
            <Layer42>
              <Layer42img src={usuario}/>
            </Layer42>
            <Telefono>Tel.(33)2404585</Telefono>
            <Bienvenido>Bienvendo Juan</Bienvenido>
            <Especiales>Especiales</Especiales>
            <TextoPrincipal>Lunas de miel.com</TextoPrincipal>
          </MainImageContainer>

          <Centrar>
            <Parrafo1>
            En este viaje especial nos
                encargamos de que todo sea perfecto y como tu lo quieres.
            </Parrafo1>
          </Centrar>

          <Centrar>
          <Parrafo2>
            ¿A donde quieres ir?
          </Parrafo2>
          </Centrar>

          <Centrar>
            <Datos_reserva>
              <Sombra>
                <Opciones>
                  <Span_sombra>Viaje</Span_sombra>
                  <Input_sombra type = "text"/>
                </Opciones>
                <Opciones>
                  <Span_sombra>Dias Viaje</Span_sombra>
                  <Input_sombra type = "text"/>
                </Opciones>
                <Opciones>
                  <Span_sombra>Presupuesto</Span_sombra>
                  <Input_sombra type = "text"/>
                </Opciones>
                <Btn_buscar>
                <Input_btnbuscar type = "submit" value="Buscar"/>
                </Btn_buscar>
              </Sombra>
            </Datos_reserva>
          </Centrar>


          <Centrar>
            <Parte1>
              <Span_parte1>Déjate sorprender</Span_parte1>
            <Texto_parte1>
              Diseñamos experiencias perfectas
              para esos dias especiales
            </Texto_parte1>
            </Parte1>
            <Parte2>
              <Imagenes_parte2>
                <Img_parte2 src = {p1}/>
                <Span_parte2>
                Viaje espectacular sin salir de mexico
                </Span_parte2>
                <Input_parte2 type = "submit" value = "Me interesa"/>
              </Imagenes_parte2>
              <Imagenes_parte2>
                <Img_parte2 src = {p2}/>
                <Span_parte2>
                Viaje espectacular sin salir de mexico
                </Span_parte2>
                <Input_parte2 type = "submit" value = "Me interesa"/>
              </Imagenes_parte2>
              <Imagenes_parte2>
                <Img_parte2 src = {p3}/>
                <Span_parte2>
                Viaje espectacular sin salir de mexico
                </Span_parte2>
                <Input_parte2 type = "submit" value = "Me interesa"/>
              </Imagenes_parte2>
            </Parte2>
          </Centrar>

          <Centrar>
          <Viaje_soñando>
          Tu viaje soñado a tu alcance
          </Viaje_soñando>
          </Centrar>

          <Centrar>
          <Destinos_top>
          Destinos Top
          </Destinos_top>
          </Centrar>

          <Centrar>
          <Carrusel>
            <Img_carrusel src = {c1}/>
            <Img_carrusel src = {c2}/>
            <Img_carrusel src = {c3}/>
            <Img_carrusel src = {c4}/>
          </Carrusel>
          </Centrar>

          <Centrar>
          <Relajate>
          Relajate y disfruta,nosotros nos encargamos de todo
          </Relajate>
          </Centrar>

          <Centrar>
          <F_portada src = {d1}/>
          </Centrar>

        </MainConteiner>
    );
  }
}

LunaDeMiel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LunaDeMiel: makeSelectLunaDeMiel(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LunaDeMiel);
